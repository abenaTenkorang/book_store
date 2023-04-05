import {
  createSlice,
  createAsyncThunk,
  isPending,
  isFulfilled,
  isRejected,
} from '@reduxjs/toolkit';
import { addBookAPI, deleteBookAPI, getBooksFromAPI } from './booksAPI';

const initialState = {
  defaultCategory: 'Fiction',
  books: [],
  loading: false,
  error: undefined,
};

const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, thunkAPI) => {
    try {
      const books = await getBooksFromAPI();
      return books;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const addBook = createAsyncThunk(
  'books/addBook',
  async (bookInfo, thunkAPI) => {
    try {
      const { books } = thunkAPI.getState().books;
      const response = await addBookAPI(bookInfo, books);
      if (response === 'Created') {
        const books = await getBooksFromAPI();
        return books;
      }
      return thunkAPI.rejectWithValue('Wrong API response received!');
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId, thunkAPI) => {
    try {
      await deleteBookAPI(bookId);
      const books = await getBooksFromAPI();
      return books;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearBooksError: (state) => ({
      ...state,
      error: undefined,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isPending(addBook, fetchBooks, removeBook),
        (state) => ({
          ...state,
          loading: true,
        }),
      )
      .addMatcher(
        isFulfilled(addBook, fetchBooks, removeBook),
        (state, { payload }) => ({
          ...state,
          books: payload,
          error: undefined,
        }),
      )
      .addMatcher(
        isRejected(addBook, fetchBooks, removeBook),
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        }),
      );
  },
});

export { fetchBooks, addBook, removeBook };
export const { clearBooksError } = booksSlice.actions;
export default booksSlice.reducer;

const ADD_BOOK = 'bookstore/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const initialState = {
  books: [],
};

const books = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== payload)],
      };
    default:
      return state;
  }
};

export default books;

import { configureStore } from '@reduxjs/toolkit';
import books from './books/booksSlice';
import categories from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books,
    categories,
  },
});

export default store;

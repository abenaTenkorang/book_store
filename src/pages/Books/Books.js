import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/book/book';
import Form from '../../components/form/form';
import { removeBook } from '../../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  const removeBookHandle = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          onClick={() => removeBookHandle(book.item_id)}
        />
      )) }
      <Form />
    </div>
  );
};

export default Books;

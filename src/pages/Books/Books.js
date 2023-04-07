import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/book/book';
import HorizontalDivider from '../../components/Divider/Horizontal';
import Form from '../../components/form/form';
import { fetchBooks, removeBook } from '../../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const removeBookHandle = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div style={{ padding: '50px' }}>
      <div>
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fafafa',
          padding: '0',
          margin: '0',
          listStyle: 'none',
          gap: '20px',
        }}
        >
          {books.map((book) => (
            <Book
              key={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              onClick={() => removeBookHandle(book.item_id)}
            />
          )) }
        </ul>
        <HorizontalDivider />
        <Form />
      </div>
    </div>

  );
};

export default Books;

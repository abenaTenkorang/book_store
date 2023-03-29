import React, { useState } from 'react';
import Book from '../../components/book/book';
import Form from '../../components/form/form';

const Books = () => {
  const [InputState, setInputState] = useState([{
    id: 1,
    title: 'The boy',
    author: 'Abi Mayers',
  }]);

  const handleAddBook = () => {
    setInputState({});
  };

  return (
    <div>
      {InputState.map(({ title, id, author }) => (
        <Book key={id} title={title} author={author} onClick={handleAddBook} />
      )) }
      <Form />
    </div>
  );
};

export default Books;

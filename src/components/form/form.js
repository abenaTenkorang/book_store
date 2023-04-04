import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import Button from '../button/button';
import Input from '../Input/Input';
import { addBook } from '../../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState({
    title: '',
    author: '',
  });

  const addBookHandle = (e) => {
    e.preventDefault();
    dispatch(addBook(
      {
        item_id: Math.random(),
        title: inputState.title,
        author: inputState.author,
        category: 'Fiction',
      },
    ));

    setInputState({
      title: '',
      author: '',
    });
  };

  const onChangeHandle = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={addBookHandle}>
      <Input
        type="text"
        placeholder="title"
        value={inputState.title}
        name="title"
        onChange={onChangeHandle}
      />
      <Input
        type="text"
        placeholder="author"
        value={inputState.author}
        name="author"
        onChange={onChangeHandle}
      />
      <Button
        defaultProps
        title="Add Book"
        className="btn"
        onClick={() => 'clicked'}
      />
    </form>
  );
};

export default Form;

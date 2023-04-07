import React, { useState } from 'react';

import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import Button from '../button/button';
import Input from '../Input/Input';
import { addBook } from '../../redux/books/booksSlice';
import './form.css';

const Form = () => {
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState({
    title: '',
    author: '',
  });

  const addBookHandle = (e) => {
    e.preventDefault();
    if (inputState.title && inputState.author !== '') {
      dispatch(addBook(
        {
          item_id: uuid(),
          title: inputState.title,
          author: inputState.author,
          category: 'Fiction',
        },
      ));
    }

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
    <div>
      <h2 className="title">Add new Book</h2>
      <form className="form" onSubmit={addBookHandle}>
        <div style={{ width: '50%' }}>
          <Input
            type="text"
            placeholder="Book title"
            value={inputState.title}
            name="title"
            onChange={onChangeHandle}
          />
        </div>
        <div style={{ width: '30%' }}>
          <Input
            type="text"
            placeholder="Book author"
            value={inputState.author}
            name="author"
            onChange={onChangeHandle}
          />
        </div>
        <div style={{ width: '20%' }}>
          <Button
            defaultProps
            title="Add Book"
            className="add-btn"
            onClick={() => 'clicked'}
          />
        </div>

      </form>
    </div>

  );
};

export default Form;

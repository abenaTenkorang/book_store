import React from 'react';
import Button from '../button/button';
import Input from '../Input/Input';

const Form = () => (
  <form>
    <Input
      type="text"
      placeholder="title"
      value="title"
      name="title"
      onChange={(e) => (e.target.value)}
    />
    <Input
      type="text"
      placeholder="author"
      value="author"
      name="author"
      onChange={(e) => (e.target.value)}
    />
    <Button
      title="Add Book"
      className="btn"
      onClick={() => ('clicked')}
    />
  </form>
);

export default Form;

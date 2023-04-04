import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../button/button';

const Book = ({ title, author, onClick }) => (
  <li>
    {`Book Title: ${title} Author: ${author} ` }
    <Button defaultProps={false} className="btn" onClick={onClick} title="Remove" />
  </li>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

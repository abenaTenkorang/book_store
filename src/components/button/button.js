import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ title, button, onClick }) => (
  <button type="button" className={button} onClick={onClick}>{title}</button>
);

export default Button;

Button.propTypes = {
  button: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

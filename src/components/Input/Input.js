import React from 'react';
import { PropTypes } from 'prop-types';
import './Input.css';

const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
);

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

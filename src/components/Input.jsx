import React from 'react';

const Input = ({ onChange, value }) => (
  <input onChange={onChange} value={value} className="form-control" />
);

export default Input;

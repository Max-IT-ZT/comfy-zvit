// components/InputField.js
import React from 'react';

const InputField = ({ type, placeholder, value, onChange, label }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label className="input-label">{label}</label>
    </div>
  );
};

export default InputField;

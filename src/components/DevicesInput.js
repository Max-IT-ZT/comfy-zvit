// components/DevicesInput.js
import React from 'react';

const DevicesInput = ({ value, onChange, label }) => {
  return (
    <div className="input-container">
      <input
        type="tel"
        className="input-field"
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label className="input-label">{label}</label>
    </div>
  );
};

export default DevicesInput;

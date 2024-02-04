// components/CoefficientInput.js
import React from 'react';

const CoefficientInput = ({ coefficient, onCoefficientChange }) => {
  return (
    <div className="input-container">
      <input
        type="phone"
        step="0.01"
        // pattern="\d+(\.\d{1,2})?"
        // className="input-field "
        placeholder=""
        value={coefficient}
        onChange={onCoefficientChange}
      />
      <label className="input-label">Коефіцієнт</label>
    </div>
  );
};

export default CoefficientInput;

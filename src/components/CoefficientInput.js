// components/CoefficientInput.js
import React from 'react';

const CoefficientInput = ({ coefficient, onCoefficientChange }) => {
  const handleIncrement = () => {
    const updatedCoefficient = parseFloat(coefficient) + 0.01;
    onCoefficientChange(updatedCoefficient.toFixed(2));
  };

  const handleDecrement = () => {
    const updatedCoefficient = parseFloat(coefficient) - 0.01;
    onCoefficientChange(updatedCoefficient.toFixed(2));
  };

  return (
    <div className="input-container">
      <button className="control-button" onClick={handleIncrement}>
        +
      </button>
      <input
        type="number"
        step="0.01"
        pattern="\d+(\.\d{1,2})?"
        className="input-field"
        placeholder=""
        value={coefficient}
        onChange={onCoefficientChange}
      />
      <button className="control-button" onClick={handleDecrement}>
        -
      </button>
      <label className="input-label">Коефіцієнт</label>
    </div>
  );
};

export default CoefficientInput;

// components/SalariesDisplay.js
import React from 'react';

const SalariesDisplay = ({ itSalaries }) => {
  return (
    <div className="salary-windows">
      {itSalaries.map((salary, index) => (
        <div key={index} className="salary-window">
          <h3 className="salary-name">{`${index + 1}-Іт`}</h3>
          <p className="salary-coin">{`${salary.toFixed()} грн.`}</p>
        </div>
      ))}
    </div>
  );
};

export default SalariesDisplay;

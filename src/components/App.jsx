// App.js
import React, { useState, useEffect } from 'react';
import itPlanData from '../data/ItPlanData';
import hsPlanData from '../data/HsPlanData';
import getCurrentDay from '../utils/Utils';
import CoefficientInput from './CoefficientInput';
import SalariesDisplay from './SalariesDisplay';
import InputField from './InputField';
import DevicesInput from './DevicesInput';
import Header from './Header';

import './App.css';

const App = () => {
  const [itSum, setItSum] = useState('');
  const [itShare, setItShare] = useState('');
  const [happySum, setHappySum] = useState('');
  const [happyShare, setHappyShare] = useState('');
  const [smartphones, setSmartphones] = useState('');
  const [laptops, setLaptops] = useState('');
  const [tvs, setTvs] = useState('');
  const [itSalaries, setItSalaries] = useState(Array(4).fill(0));
  const [coefficient, setCoefficient] = useState(() => {
    return parseFloat(localStorage.getItem('coefficient')) || 6.2;
  });

  useEffect(() => {
    const itSumValue = parseFloat(itSum);
    if (!isNaN(itSumValue)) {
      const itSalariesCalculation = Array(4)
        .fill(0)
        .map((_, index) => {
          return (itSumValue * (coefficient / 100)) / (index + 1);
        });
      setItSalaries(itSalariesCalculation);
    }
  }, [itSum, coefficient]);

  useEffect(() => {
    localStorage.setItem('coefficient', coefficient.toString());
  }, [coefficient]);

  const handleCoefficientChange = e => {
    setCoefficient(parseFloat(e.target.value) || 0);
  };

  const generateMessage = () => {
    const currentDay = getCurrentDay();
    const itFact = parseInt(itSum, 10);
    const itPlan = itPlanData[currentDay - 1]?.plan || 0;
    const itDeviation = ((itFact - itPlan) / itPlan) * 100;
    const happyFact = parseInt(happySum, 10);
    const happyPlan = hsPlanData[currentDay - 1]?.plan || 0;
    const happyDeviation = ((happyFact - happyPlan) / happyPlan) * 100;
    const smartphonesCount = parseInt(smartphones, 10);
    const laptopsCount = parseInt(laptops, 10);
    const tvsCount = parseInt(tvs, 10);
    const isAnyDeviceSpecified = smartphonesCount || laptopsCount || tvsCount;
    let devicesMessage = '';
    if (isAnyDeviceSpecified) {
      devicesMessage = `
    Смарт ${smartphonesCount || '0'}
    Ноут ${laptopsCount || '0'}
    ТВ ${tvsCount || '0'}`;
    }
    return `Житомир
    ІТ ${itPlan}/${itFact} (${itDeviation.toFixed(1)}%)
    Частка: ${itShare}%
    ХС ${happyPlan}/${happyFact} (${happyDeviation.toFixed(1)}%)
    Частка: ${happyShare}%${devicesMessage}`;
  };

  const handleSubmit = () => {
    const message = generateMessage();
    alert(message);
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
        {/* Додайте інші компоненти тут */}
      </div>

      {/* Введення коефіцієнта */}
      <CoefficientInput
        coefficient={coefficient}
        onCoefficientChange={handleCoefficientChange}
      />
      <div className="logo">Заробітна плата</div>
      {/* Відображення зарплат */}
      <SalariesDisplay itSalaries={itSalaries} />

      {/* Введення сум за ІТ та Хеппі */}
      <InputField
        type="tel"
        placeholder=" "
        value={itSum}
        onChange={e => setItSum(e.target.value)}
        label="Сума за ІТ"
      />
      <InputField
        type="text"
        placeholder=" "
        value={itShare}
        onChange={e => setItShare(e.target.value)}
        label="Доля за ІТ (%)"
      />
      <InputField
        type="tel"
        placeholder=" "
        value={happySum}
        onChange={e => setHappySum(e.target.value)}
        label="Сума за Хеппі"
      />
      <InputField
        type="text"
        placeholder=" "
        value={happyShare}
        onChange={e => setHappyShare(e.target.value)}
        label="Доля за Хеппі (%)"
      />

      {/* Введення кількості пристроїв */}
      <DevicesInput
        value={smartphones}
        onChange={e => setSmartphones(e.target.value)}
        label="Кількість смартфонів"
      />
      <DevicesInput
        value={laptops}
        onChange={e => setLaptops(e.target.value)}
        label="Кількість ноутбуків"
      />
      <DevicesInput
        value={tvs}
        onChange={e => setTvs(e.target.value)}
        label="Кількість Телевізорів"
      />

      {/* Кнопка відправлення */}
      <button className="button" onClick={handleSubmit}>
        Відправити
      </button>
    </div>
  );
};

export default App;

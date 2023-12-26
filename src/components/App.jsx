// src/components/App.jsx
import React, { useState } from 'react';
import itPlanData from './ItPlanData';
import hsPlanData from './HsPlanData';
import getCurrentDay from './Utils';
import './App.css';

const App = () => {
  const [itSum, setItSum] = useState('');
  const [itShare, setItShare] = useState('');
  const [happySum, setHappySum] = useState('');
  const [happyShare, setHappyShare] = useState('');
  const [smartphones, setSmartphones] = useState('');
  const [laptops, setLaptops] = useState('');
  const [tvs, setTvs] = useState('');

  const handleSubmit = () => {
    const currentDay = getCurrentDay();
    const itFact = parseInt(itSum, 10);
    const itPlan = itPlanData[currentDay - 1].plan;
    const itDeviation = ((itFact - itPlan) / itPlan) * 100;
    const happyFact = parseInt(happySum, 10);
    const happyPlan = hsPlanData[currentDay - 1].plan;
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
    const message = `Житомир
      ІТ ${itPlan}/${itFact} (${itDeviation.toFixed(1)}%)
      Часта: ${itShare}%
      ХС ${happyPlan}/${happyFact} (${happyDeviation.toFixed(1)}%)
      Частка: ${happyShare}%${devicesMessage}`;
    alert(message);
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder=" "
          value={itSum}
          onChange={e => setItSum(e.target.value)}
        />
        <label className="input-label">Сума за ІТ</label>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder=" "
          value={itShare}
          onChange={e => setItShare(e.target.value)}
        />
        <label className="input-label">Доля за ІТ (%)</label>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder=" "
          value={happySum}
          onChange={e => setHappySum(e.target.value)}
        />
        <label className="input-label">Сума за Хеппі</label>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder=" "
          value={happyShare}
          onChange={e => setHappyShare(e.target.value)}
        />
        <label className="input-label">Доля за Хеппі (%)</label>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder=" "
          value={smartphones}
          onChange={e => setSmartphones(e.target.value)}
        />
        <label className="input-label">Кількість смартфонів</label>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder=" "
          value={laptops}
          onChange={e => setLaptops(e.target.value)}
        />
        <label className="input-label">Кількість ноутбуків</label>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder=" "
          value={tvs}
          onChange={e => setTvs(e.target.value)}
        />
        <label className="input-label">Кількість Телевізорів</label>
      </div>

      <button className="button" onClick={handleSubmit}>
        Відправити
      </button>
    </div>
  );
};

export default App;

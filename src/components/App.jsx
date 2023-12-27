import React, { useState, useEffect } from 'react';
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
  const [itSalaries, setItSalaries] = useState(Array(4).fill(0));

  useEffect(() => {
    const itSumValue = parseFloat(itSum);
    if (!isNaN(itSumValue)) {
      const itSalariesCalculation = Array(4)
        .fill(0)
        .map((_, index) => {
          return (itSumValue * (6.2 / 100)) / (index + 1);
        });
      setItSalaries(itSalariesCalculation);
    }
  }, [itSum]);

  const generateMessage = () => {
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

    const itSalariesMessage = itSalaries
      .map(
        (salary, index) => `${index + 1}-ІТ Зарплата: ${salary.toFixed()} грн.`
      )
      .join('\n');

    return `Житомир
      ІТ ${itPlan}/${itFact} (${itDeviation.toFixed(1)}%)
      Часта: ${itShare}%
      ХС ${happyPlan}/${happyFact} (${happyDeviation.toFixed(1)}%)
      Частка: ${happyShare}%${devicesMessage}\n${itSalariesMessage}`;
  };

  const handleSubmit = () => {
    const message = generateMessage();
    alert(message);
  };

  return (
    <div className="app-container">
      <div className="logo">Заробітна плата</div>
      <div className="salary-windows">
        {itSalaries.map((salary, index) => (
          <div key={index} className="salary-window">
            <h3 className="salary-name">{`${index + 1}-Іт`}</h3>
            <p className="salary-coin">{`${salary.toFixed()} грн.`}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="tel"
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
          type="tel"
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
          type="tel"
          className="input-field"
          placeholder=" "
          value={smartphones}
          onChange={e => setSmartphones(e.target.value)}
        />
        <label className="input-label">Кількість смартфонів</label>
      </div>

      <div className="input-container">
        <input
          type="tel"
          className="input-field"
          placeholder=" "
          value={laptops}
          onChange={e => setLaptops(e.target.value)}
        />
        <label className="input-label">Кількість ноутбуків</label>
      </div>

      <div className="input-container">
        <input
          type="tel"
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

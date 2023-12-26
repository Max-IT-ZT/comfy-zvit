// src/components/App.jsx
import React, { useState } from 'react';
import itPlanData from './ItPlanData'; // змінили шлях
import hsPlanData from './HsPlanData'; // змінили шлях
import getCurrentDay from './Utils'; // змінили шлях

const App = () => {
  const [itSum, setItSum] = useState('');
  const [itShare, setItShare] = useState('');
  const [happySum, setHappySum] = useState('');
  const [happyShare, setHappyShare] = useState('');

  const handleSubmit = () => {
    const currentDay = getCurrentDay();

    const itFact = parseInt(itSum, 10);
    const itPlan = itPlanData[currentDay - 1].plan;
    const itDeviation = ((itFact - itPlan) / itPlan) * 100;

    const happyFact = parseInt(happySum, 10);
    const happyPlan = hsPlanData[currentDay - 1].plan;
    const happyDeviation = ((happyFact - happyPlan) / happyPlan) * 100;

    const message = `Житомир
      ІТ ${itPlan}/${itFact}(${itDeviation.toFixed(1)}%)
      ${itShare}%
      ХС ${happyPlan}/${happyFact}(${happyDeviation.toFixed(1)}%)
      ${happyShare}%
      Смарт 59
      Ноут 8
      ТВ 13`;

    alert(message);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Сума за ІТ"
        value={itSum}
        onChange={e => setItSum(e.target.value)}
      />
      <input
        type="text"
        placeholder="Доля за ІТ (%)"
        value={itShare}
        onChange={e => setItShare(e.target.value)}
      />
      <input
        type="text"
        placeholder="Сума за Хеппі"
        value={happySum}
        onChange={e => setHappySum(e.target.value)}
      />
      <input
        type="text"
        placeholder="Доля за Хеппі (%)"
        value={happyShare}
        onChange={e => setHappyShare(e.target.value)}
      />
      <button onClick={handleSubmit}>Відправити</button>
    </div>
  );
};

export default App;

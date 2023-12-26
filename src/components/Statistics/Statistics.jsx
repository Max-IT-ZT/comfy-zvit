import css from './Statistics.module.css';

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256); // від 0 до 255
  const g = Math.floor(Math.random() * 256); // від 0 до 255
  const b = Math.floor(Math.random() * 256); // від 0 до 255
  return `rgb(${r},${g},${b})`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{ backgroundColor: generateRandomColor(stat.percentage) }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

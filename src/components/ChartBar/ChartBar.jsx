import './ChartBar.scss';

export default function ChartBar({ amount, day, max }) {
  const height = (amount / max) * 200; // 200px es la altura máxima

  const isMax = amount === max;

  return (
    <div 
      className={`chart__bar ${isMax ? 'chart__bar--max' : ''}`} 
      style={{ height: `${height}px` }}
    >
      <div className="chart__bar--label">${amount}</div>
      <div className="chart__bar--day">{day}</div>
    </div>
  );
}

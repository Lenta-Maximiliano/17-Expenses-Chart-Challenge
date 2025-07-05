import { useState, useEffect } from 'react';
import data from '../../data/data.json'; 
import ChartBar from '../ChartBar/ChartBar';
import ChartAnalytics from '../ChartAnalytics/ChartAnalytics';
import './Chart.scss';

export default function Chart() {
  const [maxAmount, setMaxAmount] = useState(0);

  useEffect(() => {
    const max = Math.max(...data.map(item => item.amount));
    setMaxAmount(max);
  }, []);

  return (
    <section className="chart">
      <h2 className="chart__title">Spending - Last 7 days</h2>
      <div className="chart__bars-container">
        {data.map((item) => (
          <ChartBar 
            key={item.day} 
            day={item.day} 
            amount={item.amount} 
            max={maxAmount} 
          />
        ))}
      </div>
      <ChartAnalytics />
    </section>
  );
}

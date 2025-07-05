
import './ChartAnalytics.scss';

export default function ChartAnalytics() {

  return (
    <div className="chart-analytics">
      <div className="chart-analytics__left">
        <p className="chart-analytics__label">Total this month</p>
        <p className="chart-analytics__value">$478.33</p>
      </div>
      <div className="chart-analytics__right">
        <p className="chart-analytics__percentage">+2.4%</p>
        <p className="chart-analytics__period">from last month</p>
      </div>
    </div>
  );
}

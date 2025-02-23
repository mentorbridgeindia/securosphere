import React from "react";
import "./ActivityLineChart.scss";

interface ActivityLineChartProps {
  hours: string[];
  values: number[];
}

const ActivityLineChart = ({ hours, values }: ActivityLineChartProps) => {
  const maxValue = Math.max(...values);
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = 100 - (value / maxValue) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="activity-chart">
      <div className="chart-labels y-labels">
        {[maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, 0].map(
          (label) => (
            <span key={label.toString()}>{Math.round(label)}</span>
          )
        )}
      </div>
      <div className="chart-container">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4318FF" />
              <stop offset="100%" stopColor="#9F7AEA" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4318FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4318FF" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <path
            d={`M0,100 L${points} L100,100 Z`}
            fill="url(#areaGradient)"
            className="area-path"
          />

          <polyline
            points={points}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.8"
            className="main-line"
          />
        </svg>
        <div className="x-labels">
          {hours.map((hour) => (
            <span key={hour}>{hour}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLineChart;

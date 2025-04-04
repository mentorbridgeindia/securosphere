import React from "react";
import "./DonutChart.scss";

interface DonutChartProps {
  data: Array<{ name: string; value: number; color: string }>;
}
const DonutChart = ({ data }: DonutChartProps) => {
  console.log(data); // Check the data here
  console.log(Array.isArray(data)); // Check if data is an array
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let rotateOffset = 0;

  return (
    <div className="donut-chart-container">
      <div className="donut-chart">
        {data.map((item, index) => {
          const degrees = (item.value / total) * 360;
          const style = {
            "--offset": `${rotateOffset}deg`,
            "--value": `${degrees}deg`,
            "--bg-color": item.color,
          } as React.CSSProperties;
          rotateOffset += degrees;
          return (
            <div key={item.name} className="donut-segment" style={style} />
          );
        })}
      </div>
      <div className="donut-legend">
        {data.map((item) => (
          <div key={item.name} className="legend-item">
            <span
              className="legend-dot"
              style={{ backgroundColor: item.color }}
            />
            <span className="legend-label">{item.name}</span>
            <span className="legend-value">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((element) => {
    return element.value;
  });
  const maximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {props.dataPoints.map((element) => {
        return (
          <ChartBar
            key={element.label}
            value={element.value}
            maxValue={maximum}
            label={element.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;

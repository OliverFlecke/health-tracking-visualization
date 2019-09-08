import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Exercise from '../../models/Exercise';

const baseOptions: Highcharts.Options = {
  title: {
    text: 'Exercises'
  },
  xAxis: {
    type: 'datetime'
  }
};

interface ExerciseChartProps {
  exercises: Exercise[];
}

const ExerciseChart = (props: HighchartsReact.Props & ExerciseChartProps) => {
  const options: Highcharts.Options = baseOptions;
  options.series = [
    {
      type: 'column',
      data: props.exercises.map(ex => ({
        x: ex.start_time.getTime(),
        y: ex.duration
      })),
      turboThreshold: 0
    }
  ];

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} {...props} />
    </div>
  );
};

export default ExerciseChart;

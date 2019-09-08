import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ExerciseState } from './reducer/ExerciseReducer';

const baseOptions: Highcharts.Options = {
  title: {
    text: 'Exercises',
  },
  xAxis: {
    type: 'datetime',
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
};

const ExerciseChart = (
  props: HighchartsReact.Props & { state: ExerciseState },
) => {
  const options: Highcharts.Options = baseOptions;
  options.series = [
    {
      type: 'column',
      data: props.state.exercises.map(ex => ({
        x: ex.start_time.getTime(),
        y: ex.duration,
      })),
      turboThreshold: 0,
    },
  ];

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} {...props} />
    </div>
  );
};

export default ExerciseChart;

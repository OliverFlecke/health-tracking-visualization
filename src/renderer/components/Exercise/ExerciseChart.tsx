import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ExerciseState } from './ExerciseReducer';

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
  options.yAxis = {
    title: {
      text: 'Duration',
    },
  };

  const exerciseData = props.state.exercises.map(ex => ({
    x: ex.startTime.getTime(),
    y: Math.round(ex.duration / 1000),
    pointWidth: 10,
  }));

  options.series = [
    {
      type: 'column',
      name: 'data',
      data: exerciseData,
      turboThreshold: 0,
      color: 'red',
    },
  ];

  return (
    <HighchartsReact highcharts={Highcharts} options={options} {...props} />
  );
};

export default ExerciseChart;

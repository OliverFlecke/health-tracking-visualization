import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import { SleepState } from './SleepReducer';
import { startOfDay } from 'date-fns';
import SleepData from '../../models/SleepData';

HighchartsMore(Highcharts);

function sleepToPoint(sleep: SleepData) {
  const start = startOfDay(sleep.startTime);

  return {
    x: start.getTime(),
    low: sleep.startTime.getTime() - start.getTime(),
    high: sleep.updateTime.getTime() - start.getTime(),
    pointWidth: 10,
  };
}

const baseOptions: Highcharts.Options = {
  title: {
    text: 'Sleeps',
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

const SleepOverviewChart = (
  props: HighchartsReact.Props & { state: SleepState },
) => {
  const options: Highcharts.Options = baseOptions;
  options.yAxis = {
    title: {
      text: 'Time',
    },
    type: 'datetime',
  };

  const data = props.state.sleeps.map(sleepToPoint);

  options.series = [
    {
      type: 'columnrange',
      name: 'data',
      data: data,
      turboThreshold: 0,
      color: 'blue',
    },
  ];

  return (
    <HighchartsReact highcharts={Highcharts} options={options} {...props} />
  );
};

export default SleepOverviewChart;

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export enum DataOption {
  Distance,
  Cadence,
  Speed,
  HeartRate,
}

const baseOptions: Highcharts.Options = {
  title: {
    text: '',
  },
  yAxis: [
    {
      title: {
        text: 'Speed',
        style: {
          color: 'blue',
        },
      },
      opposite: true,
    },
    {
      title: {
        text: 'Cadence and heart rate',
        style: {
          color: 'green',
        },
      },
    },
  ],
  xAxis: {
    type: 'datetime',
    crosshair: true,
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
};

const LiveDataChart = (
  props: HighchartsReact.Props & { data: any[]; dataToDisplay: DataOption },
) => {
  const options: Highcharts.Options = baseOptions;

  options.series = [
    {
      type: 'spline',
      name: 'speed',
      data: formatData(props.data, DataOption.Speed),
      color: 'blue',
      yAxis: 0,
      tooltip: {
        valueSuffix: ' km/h',
      },
    },
    {
      type: 'spline',
      name: 'cadence',
      data: formatData(props.data, DataOption.Cadence),
      color: 'green',
      yAxis: 1,
      tooltip: {
        valueSuffix: ' spm',
      },
    },
    {
      type: 'spline',
      name: 'heart rate',
      data: formatData(props.data, DataOption.HeartRate),
      color: 'red',
      yAxis: 1,
      tooltip: {
        valueSuffix: ' bpm',
      },
    },
  ];

  return (
    <HighchartsReact highcharts={Highcharts} options={options} {...props} />
  );
};

export default LiveDataChart;

function formatData(
  data: any[],
  dataToDisplay: DataOption,
): { x: number; y: number }[] {
  return data
    .map(point => ({
      x: point.start_time,
      y: selectData(point, dataToDisplay),
    }))
    .filter(point => point.y !== undefined);
}

function selectData(point: any, dataToDisplay: DataOption): number {
  switch (dataToDisplay) {
    case DataOption.Cadence:
      return point.cadence;
    case DataOption.Distance:
      return point.distance;
    case DataOption.HeartRate:
      return point.heart_rate;
    case DataOption.Speed:
      return point.speed !== undefined ? point.speed * 3.6 : point.speed;

    default:
      throw new Error('Unknown data option');
  }
}

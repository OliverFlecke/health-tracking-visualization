import React from 'react';
import ExerciseType from '../../models/ExerciseType';
import ExerciseData from '../../models/ExerciseData';
import RowProps from '../List/Row';

const ExerciseRow: React.FunctionComponent<RowProps> = (props: {
  data?: ExerciseData;
}) => {
  if (!props.data) return null;
  const { data } = props;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        width: '100%',
      }}
    >
      <div>{data.startTime.toLocaleString()}</div>
      <div style={{ textAlign: 'right', marginRight: 10 }}>
        {data.distance.toFixed(0)} m
      </div>
      <div
        style={{
          textAlign: 'right',
          marginRight: 10,
        }}
      >
        {data.getDuration()}
      </div>
      <div>
        {data.type == ExerciseType.Unknown ? data.exerciseType : data.type}
      </div>
    </div>
  );
};

export default ExerciseRow;

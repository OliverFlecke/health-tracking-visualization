import React from 'react';
import SleepData from '../../models/SleepData';
import RowProps from '../List/Row';

const SleepRow: React.FunctionComponent<RowProps> = (props: {
  data?: SleepData;
}) => {
  const { data } = props;
  if (!data) return null;

  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      <div>{data.startTime.toLocaleString()}</div>
      <div>{data.updateTime.toLocaleString()}</div>
    </div>
  );
};

export default SleepRow;

import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { SleepContext } from './Sleep';
import { readSleepStatus, SleepStatusEntry } from '../../readers/readSleepData';

interface Props {
  sleepId?: string;
}

const SleepDetails: React.FunctionComponent<
  RouteComponentProps & Props
> = props => {
  const { state } = useContext(SleepContext);

  const sleep = state.sleeps.find(s => props.sleepId === s.datauuid);
  if (!sleep) return null;

  const [data, setData] = useState<SleepStatusEntry[]>([]);
  useEffect(() => {
    readSleepStatus(sleep, setData);
  }, []);

  return (
    <div>
      <h1>{sleep.startTime.toDateString()}</h1>
    </div>
  );
};

export default SleepDetails;

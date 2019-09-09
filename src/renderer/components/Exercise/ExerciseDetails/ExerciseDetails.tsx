import { RouteComponentProps } from '@reach/router';
import React, { useEffect, useState, useContext } from 'react';

import readLiveData from '../../../readers/readLiveData';
import ExerciseDetailsChart, { DataOption } from './LiveDataChart';
import { ExerciseContext } from '../Exercise';

interface Props {
  exerciseId?: string;
}

const ExerciseDetails: React.SFC<Props & RouteComponentProps> = props => {
  if (!props.exerciseId) return null;

  const { state } = useContext(ExerciseContext);
  const exercise = state.allExercises.find(
    ex => props.exerciseId === ex.datauuid,
  );
  if (!exercise) return null;
  console.log(exercise);

  const [data, setData] = useState([]);
  useEffect(() => readLiveData(exercise.liveData, setData), []);

  return (
    <>
      <div>{exercise.type}</div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <div>Start time: {exercise.startTime.toLocaleString()}</div>
        <div>End time: {exercise.endTime.toLocaleString()}</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <div>Distance: {exercise.distance.toFixed(0)} m</div>
        <div>Duration: {exercise.getDuration()}</div>
      </div>
      <div>
        Speed: {exercise.meanSpeed} m/s - {exercise.meanSpeedKmps()} km/h
      </div>
      <ExerciseDetailsChart data={data} dataToDisplay={DataOption.Speed} />
    </>
  );
};

export default ExerciseDetails;

import { RouteComponentProps } from '@reach/router';
import React, { useEffect, useState } from 'react';

import readLiveData from '../../../readers/readLiveData';
import { ExerciseState } from '../reducer/ExerciseReducer';
import ExerciseDetailsChart, { DataOption } from './LiveDataChart';

interface Props {
  exerciseId?: string;
  state: ExerciseState;
}

const ExerciseDetails: React.SFC<Props & RouteComponentProps> = props => {
  const exercise = props.state.allExercises.find(
    ex => props.exerciseId === ex.datauuid,
  );
  if (!exercise) return null;
  console.log(exercise);

  const [data, setData] = useState([]);
  useEffect(() => readLiveData(exercise.live_data, setData), []);

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
        <div>Start time: {exercise.start_time.toLocaleString()}</div>
        <div>End time: {exercise.end_time.toLocaleString()}</div>
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
        Speed: {exercise.mean_speed} m/s - {exercise.meanSpeedKmps()} km/h
      </div>
      <ExerciseDetailsChart data={data} dataToDisplay={DataOption.Speed} />
    </>
  );
};

ExerciseDetails.defaultProps = {
  exerciseId: '',
};

export default ExerciseDetails;

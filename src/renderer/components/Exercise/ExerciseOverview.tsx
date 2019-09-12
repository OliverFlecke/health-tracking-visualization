import React, { useContext } from 'react';
import ExerciseChart from './ExerciseChart';
import ExercisesFilter from './Filter/ExerciseFilter';
import ExercisesList from './ExercisesList';
import { ExerciseContext } from './Exercise';
import { RouteComponentProps } from '@reach/router';

const ExerciseOverview: React.SFC<RouteComponentProps> = () => {
  const { state } = useContext(ExerciseContext);

  return (
    <>
      <ExercisesFilter />
      <ExerciseChart state={state} />
      <ExercisesList />
    </>
  );
};

export default ExerciseOverview;

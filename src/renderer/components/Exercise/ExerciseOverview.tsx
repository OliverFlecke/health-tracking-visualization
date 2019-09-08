import React, { useEffect, useReducer, useContext } from 'react';
import ExerciseChart from './ExerciseChart';
import ExercisesFilter from './Filter/ExerciseFilter';
import ExercisesList from './ExercisesList';
import { RouteComponentProps } from '@reach/router';
import { ExerciseContext } from './Exercise';

const ExerciseOverview = (props: RouteComponentProps) => {
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

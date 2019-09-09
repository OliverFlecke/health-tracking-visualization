import React, { useContext } from 'react';
import ExerciseChart from './ExerciseChart';
import ExercisesFilter from './Filter/ExerciseFilter';
import ExercisesList from './ExercisesList';
import { ExerciseContext } from './Exercise';

const ExerciseOverview = () => {
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

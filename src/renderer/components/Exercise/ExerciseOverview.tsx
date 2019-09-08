import React, { useEffect, useReducer } from 'react';
import ExerciseChart from './ExerciseChart';
import ExercisesFilter from './Filter/ExerciseFilter';
import ExercisesList from './ExercisesList';
import { RouteComponentProps } from '@reach/router';
import { ExerciseReducerProps } from './reducer/ExerciseReducer';

const ExerciseOverview = (
  props: RouteComponentProps & ExerciseReducerProps,
) => {
  const { state, dispatch } = props;

  return (
    <>
      <ExercisesFilter state={state} dispatch={dispatch} />
      <ExerciseChart state={state} />
      <ExercisesList exercises={state.exercises} />
    </>
  );
};

export default ExerciseOverview;

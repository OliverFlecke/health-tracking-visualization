import { Link, RouteComponentProps, Router } from '@reach/router';
import React, { useEffect, useReducer } from 'react';

import ExerciseData from '../../models/ExerciseData';
import readExerciseData from '../../readers/readExerciseData';
import ExerciseDetails from './ExerciseDetails/ExerciseDetails';
import ExerciseOverview from './ExerciseOverview';
import {
  ExerciseAction,
  ExerciseActionType,
  ExerciseState,
  initialState,
  reducer,
} from './ExerciseReducer';

export const ExerciseContext = React.createContext<{
  state: ExerciseState;
  dispatch: React.Dispatch<ExerciseAction>;
}>({ state: initialState, dispatch: () => {} });

const Exercise: React.SFC<RouteComponentProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    readExerciseData((exercises: ExerciseData[]) =>
      dispatch({ type: ExerciseActionType.SetExercises, payload: exercises }),
    );
  }, []);

  return (
    <>
      <Link to="exercise">
        <h1 style={{ color: 'black', textDecoration: 'none' }}>Exercises</h1>
      </Link>
      <ExerciseContext.Provider value={{ state, dispatch }}>
        <Router>
          <ExerciseOverview path="/" />
          <ExerciseDetails path=":exerciseId" />
        </Router>
      </ExerciseContext.Provider>
    </>
  );
};

export default Exercise;

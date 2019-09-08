import React, { useReducer, useEffect } from 'react';
import { Link, Router } from '@reach/router';
import ExerciseOverview from './ExerciseOverview';
import ExerciseDetails from './ExerciseDetails/ExerciseDetails';
import {
  reducer,
  initialState,
  ExerciseActionType,
  ExerciseState,
  ExerciseAction,
} from './reducer/ExerciseReducer';
import readExerciseData from '../../readers/readExerciseData';
import ExerciseData from '../../models/ExerciseData';

export const ExerciseContext = React.createContext<{
  state: ExerciseState;
  dispatch: React.Dispatch<ExerciseAction>;
}>({ state: initialState, dispatch: () => {} });

const Exercise = () => {
  console.log('Render');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    readExerciseData((exercises: ExerciseData[]) =>
      dispatch({ type: ExerciseActionType.SetExercises, payload: exercises }),
    );
  }, []);

  return (
    <>
      <Link to="./">
        <h1 style={{ color: 'black', textDecoration: 'none' }}>Exercises</h1>
      </Link>
      <ExerciseContext.Provider value={{ state, dispatch }}>
        <Router>
          <ExerciseOverview path="/" />
          <ExerciseDetails path="/:exerciseId" state={state} />
        </Router>
      </ExerciseContext.Provider>
    </>
  );
};

export default Exercise;

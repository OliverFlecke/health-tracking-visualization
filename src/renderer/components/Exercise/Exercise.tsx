import React, { useReducer, useEffect } from 'react';
import { Link, Router } from '@reach/router';
import ExerciseOverview from './ExerciseOverview';
import ExerciseDetails from './ExerciseDetails/ExerciseDetails';
import {
  reducer,
  initialState,
  ExerciseActionType,
} from './reducer/ExerciseReducer';
import readExerciseData from '../../readers/readExerciseData';
import ExerciseData from '../../models/ExerciseData';

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
      <Router>
        <ExerciseOverview path="/" state={state} dispatch={dispatch} />
        <ExerciseDetails path="/:exerciseId" state={state} />
      </Router>
    </>
  );
};

export default Exercise;

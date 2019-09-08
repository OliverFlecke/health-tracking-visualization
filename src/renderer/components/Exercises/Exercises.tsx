import React, { useState, useEffect, useReducer } from 'react';
import Exercise from '../../models/Exercise';
import ExerciseChart from './ExerciseChart';
import ExercisesFilter from './ExerciseFilter';
import readExerciseData from '../../readers/readExerciseData';
import ExercisesList from './ExercisesList';
import {
  reducer,
  initialState,
  ExerciseActionType,
} from './reducer/ExerciseReducer';

const type = 'com.samsung.health.exercise.201909081317';

const Exercises = () => {
  console.log('Render');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const filename = `data/${type}.csv`;
    readExerciseData(filename, (exercises: Exercise[]) =>
      dispatch({ type: ExerciseActionType.SetExercises, payload: exercises }),
    );
  }, []);

  return (
    <div>
      <h1>Exercises</h1>
      <ExercisesFilter state={state} dispatch={dispatch} />
      <ExerciseChart state={state} />
      <ExercisesList
        exercises={state.exercises}
        exerciseType={state.filter}
        startDate={state.startDate}
        endDate={state.endDate}
      />
    </div>
  );
};

export default Exercises;

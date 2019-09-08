import React, { useContext } from 'react';
import ExerciseRow from './ExerciseRow';
import { Link } from '@reach/router';
import { ExerciseContext } from './Exercise';

const ExercisesList = () => {
  const { state } = useContext(ExerciseContext);

  return (
    <>
      {state.exercises
        .map((exercise, index) => (
          <Link key={index} to={exercise.datauuid}>
            <ExerciseRow exercise={exercise} />
          </Link>
        ))
        .reverse()}
    </>
  );
};

export default ExercisesList;

import React from 'react';
import ExerciseRow from './ExerciseRow';
import ExerciseData from '../../models/ExerciseData';
import { Link } from '@reach/router';

const ExercisesList = (props: { exercises: ExerciseData[] }) => {
  return (
    <>
      {props.exercises
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

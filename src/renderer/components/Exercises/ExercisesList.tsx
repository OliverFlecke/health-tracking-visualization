import React from 'react';
import ExerciseOverview from './ExerciseOverview';
import Exercise from '../../models/Exercise';
import ExerciseType from '../../models/ExerciseType';

const ExercisesList = (props: {
  exercises: Exercise[];
  exerciseType: ExerciseType | undefined;
  startDate?: Date;
  endDate: Date;
}) => {
  const { exercises, exerciseType, startDate, endDate } = props;

  return (
    <>
      {exercises.reverse().map((exercise, index) => (
        <ExerciseOverview key={index} exercise={exercise} />
      ))}
    </>
  );
};

export default ExercisesList;

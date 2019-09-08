import React, { useState, useEffect } from 'react';
import Exercise from '../../models/Exercise';
import ExerciseType, { fromString } from '../../models/ExerciseType';
import ExerciseChart from './ExerciseChart';
import ExercisesFilter from './ExercisesFilter';
import ExerciseOverview from './ExerciseOverview';
import readExerciseData from '../../readers/readExerciseData';

const type = 'com.samsung.health.exercise.201909081317';

const Exercises = () => {
  console.log('Render');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [filter, setFilter] = useState<ExerciseType>();

  useEffect(() => {
    const filename = `data/${type}.csv`;
    readExerciseData(filename, setExercises);
  }, []);

  return (
    <div>
      <h1>Exercises</h1>
      <ExerciseChart exercises={exercises} />
      <ExercisesFilter setFilter={setFilter} />
      <ExercisesList exercises={exercises} filter={filter} />
    </div>
  );
};

export default Exercises;

const ExercisesList = (props: {
  exercises: Exercise[];
  filter: ExerciseType | undefined;
}) => {
  const { exercises, filter } = props;

  return (
    <>
      {exercises
        .filter(e => !filter || e.type == filter)
        .reverse()
        .map((exercise, index) => (
          <ExerciseOverview key={index} exercise={exercise} />
        ))}
    </>
  );
};

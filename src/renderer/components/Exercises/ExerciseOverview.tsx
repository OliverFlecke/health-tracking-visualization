import React from "react";
import ExerciseType from "../../models/ExerciseType";
import Exercise from "../../models/Exercise";

const ExerciseOverview = (props: { exercise: Exercise }) => {
  const { exercise } = props;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        width: '100%'
      }}
    >
      <div>{exercise.start_time.toDateString()}</div>
      <div style={{ textAlign: 'right', marginRight: 10 }}>
        {exercise.distance.toFixed(0)} m
      </div>
      <div
        style={{
          textAlign: 'right',
          marginRight: 10
        }}
      >
        {exercise.getDuration()}
      </div>
      <div>
        {exercise.type == ExerciseType.Unknown
          ? exercise.exercise_type
          : exercise.type}
      </div>
    </div>
  );
};

export default ExerciseOverview;
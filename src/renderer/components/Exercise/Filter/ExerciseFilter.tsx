import React from 'react';
import {
  ExerciseReducerProps,
  ExerciseActionType,
} from '../reducer/ExerciseReducer';
import ExerciseDatePicker from './ExerciseDatePicker';
import ExerciseTypeDropdown from './ExerciseTypeDropdown';

const ExerciseFilter = (props: ExerciseReducerProps) => {
  const { allExercises, startDate, endDate } = props.state;

  const minDate = allExercises.length > 0 ? allExercises[0].start_time : new Date();
  const maxDate =
    allExercises.length > 0
      ? allExercises[allExercises.length - 1].start_time
      : new Date();

  return (
    <div>
      <ExerciseTypeDropdown {...props} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <span>
          <span>Start date</span>
          <ExerciseDatePicker
            minDate={minDate}
            maxDate={maxDate}
            selectedDate={startDate}
            setDate={(date: Date) =>
              props.dispatch({
                type: ExerciseActionType.SetStartDate,
                payload: date,
              })
            }
          />
        </span>
        <span>
          <span>End date</span>
          <ExerciseDatePicker
            minDate={minDate}
            maxDate={maxDate}
            selectedDate={endDate}
            setDate={(date: Date) =>
              props.dispatch({
                type: ExerciseActionType.SetEndDate,
                payload: date,
              })
            }
          />
        </span>
      </div>
    </div>
  );
};

export default ExerciseFilter;

import React, { useContext } from 'react';
import { ExerciseActionType } from '../reducer/ExerciseReducer';
import ExerciseDatePicker from './ExerciseDatePicker';
import ExerciseTypeDropdown from './ExerciseTypeDropdown';
import { ExerciseContext } from '../Exercise';

const ExerciseFilter = () => {
  const { state, dispatch } = useContext(ExerciseContext);
  const { allExercises, startDate, endDate } = state;

  const minDate =
    allExercises.length > 0 ? allExercises[0].start_time : new Date();
  const maxDate =
    allExercises.length > 0
      ? allExercises[allExercises.length - 1].start_time
      : new Date();

  return (
    <div>
      <ExerciseTypeDropdown />

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
              dispatch({
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
              dispatch({
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

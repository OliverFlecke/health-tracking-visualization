import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  ExerciseReducerProps,
  ExerciseActionType,
} from './reducer/ExerciseReducer';

const ExerciseDatePicker = (props: {
  minDate: Date;
  maxDate: Date;
  selectedDate?: Date;
  setDate: (date: Date) => void;
}) => {
  const { minDate, maxDate, selectedDate, setDate } = props;

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date: Date) => setDate(date)}
      minDate={minDate}
      maxDate={maxDate}
    />
  );
};

export default ExerciseDatePicker;

import Exercise from '../../../models/Exercise';
import ExerciseType from '../../../models/ExerciseType';

export interface ExerciseReducerProps {
  state: ExerciseState;
  dispatch: React.Dispatch<ExerciseAction>;
}

export interface ExerciseState {
  startDate?: Date;
  endDate: Date;
  filter?: ExerciseType;
  exercises: Exercise[];
  allExercises: Exercise[];
}

export interface ExerciseAction {
  type: ExerciseActionType;
  payload?: any;
}

export enum ExerciseActionType {
  SetStartDate,
  SetEndDate,
  SetFilter,
  RemoveFilter,
  SetExercises,
}

export const initialState: ExerciseState = {
  startDate: undefined,
  endDate: new Date(),
  filter: undefined,
  exercises: [],
  allExercises: [],
};

export function reducer(state: ExerciseState, action: ExerciseAction) {
  switch (action.type) {
    case ExerciseActionType.SetStartDate:
      return filter({ ...state, startDate: action.payload as Date });
    case ExerciseActionType.SetEndDate:
      return filter({ ...state, endDate: action.payload as Date });
    case ExerciseActionType.SetFilter:
      return filter({ ...state, filter: action.payload as ExerciseType });
    case ExerciseActionType.RemoveFilter:
      return filter({ ...state, filter: undefined });
    case ExerciseActionType.SetExercises:
      return filter({ ...state, allExercises: action.payload as Exercise[] });

    default:
      return state;
  }
}

function filter(state: ExerciseState): ExerciseState {
  const { filter, startDate, endDate } = state;

  return {
    ...state,
    exercises: state.allExercises.filter(
      e =>
        (!filter || e.type == filter) &&
        (!startDate || e.start_time > startDate) &&
        e.start_time < endDate,
    ),
  };
}

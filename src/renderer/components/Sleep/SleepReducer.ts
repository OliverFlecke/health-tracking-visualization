import SleepData from '../../models/SleepData';

export enum SleepActionType {
  SetSleeps,
}

export interface SleepState {
  sleeps: SleepData[];
}

export interface SleepAction {
  type: SleepActionType;
  payload?: any;
}

export function reducer(state: SleepState, action: SleepAction): SleepState {
  switch (action.type) {
    case SleepActionType.SetSleeps:
      return {
        ...state,
        sleeps: (action.payload as SleepData[]).reverse().slice(0, 10),
      };
    default:
      return state;
  }
}

export const initialState: SleepState = {
  sleeps: [],
};

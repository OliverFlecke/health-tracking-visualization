import { RouteComponentProps, Router } from '@reach/router';
import React, { useReducer, useEffect, useContext } from 'react';
import {
  reducer,
  initialState,
  SleepState,
  SleepAction,
  SleepActionType,
} from './SleepReducer';
import readSleepData from '../../readers/readSleepData';
import SleepData from '../../models/SleepData';
import List from '../List/List';
import SleepRow from './SleepRow';
import SleepOverviewChart from './SleepOverviewChart';
import SleepDetails from './SleepDetails';

export const SleepContext = React.createContext<{
  state: SleepState;
  dispatch: React.Dispatch<SleepAction>;
}>({ state: initialState, dispatch: () => {} });

const Sleep: React.SFC<RouteComponentProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    readSleepData((sleeps: SleepData[]) =>
      dispatch({ type: SleepActionType.SetSleeps, payload: sleeps }),
    );
  }, []);

  return (
    <>
      <SleepContext.Provider value={{ state, dispatch }}>
        <Router>
          <SleepOverview path="/" />
          <SleepDetails path="/:sleepId" />
        </Router>
      </SleepContext.Provider>
    </>
  );
};

export default Sleep;

const SleepOverview: React.FunctionComponent<RouteComponentProps> = () => {
  const { state } = useContext(SleepContext);

  return (
    <>
      <h1>Sleep</h1>
      <SleepOverviewChart state={state} />
      <List data={state.sleeps}>
        {(sleep: SleepData) => <SleepRow data={sleep} />}
      </List>
    </>
  );
};

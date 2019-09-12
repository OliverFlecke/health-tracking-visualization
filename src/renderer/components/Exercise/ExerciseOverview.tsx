import React, { useContext } from 'react';
import ExerciseChart from './ExerciseChart';
import ExercisesFilter from './Filter/ExerciseFilter';
import List from '../List/List';
import { ExerciseContext } from './Exercise';
import { RouteComponentProps } from '@reach/router';
import ExerciseRow from './ExerciseRow';

const ExerciseOverview: React.SFC<RouteComponentProps> = () => {
  const { state } = useContext(ExerciseContext);

  return (
    <>
      <ExercisesFilter />
      <ExerciseChart state={state} />
      <List data={state.exercises}>
        {(data: any) => <ExerciseRow data={data} />}
      </List>
    </>
  );
};

export default ExerciseOverview;

import { hot } from 'react-hot-loader/root';
import React from 'react';
import Exercise from './Exercise/Exercise';
import { Router } from '@reach/router';
import Sleep from './Sleep/Sleep';

const Application = () => {
  return (
    <Router>
      <Exercise path="/exercise" />
      <Sleep path="/" />
    </Router>
  );
};

export default hot(Application);

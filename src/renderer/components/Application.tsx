import { hot } from 'react-hot-loader/root';
import React from 'react';
import Exercise from './Exercise/Exercise';
import { Router, Link } from '@reach/router';
import Sleep from './Sleep/Sleep';

const Application = () => {
  return (
    <>
      <nav>
        <Link to="/exercise">Exercise</Link>
        <Link to="/sleep">Sleep</Link>
      </nav>
      <Router>
        <Exercise path="/exercise/*" />
        <Sleep path="/sleep/*" />
      </Router>
    </>
  );
};

export default hot(Application);

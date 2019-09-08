import React from 'react';
import { Dropdown } from 'react-bootstrap';
import ExerciseType, { fromString } from '../../../models/ExerciseType';
import {
  ExerciseReducerProps,
  ExerciseActionType,
} from '../reducer/ExerciseReducer';

const ExerciseTypeDropdown = (props: ExerciseReducerProps) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="exercise-filter">Filter exercises</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onSelect={() =>
            props.dispatch({
              type: ExerciseActionType.RemoveFilter,
            })
          }
        >
          All
        </Dropdown.Item>
        {Object.keys(ExerciseType).map((type: string, i) => (
          <Dropdown.Item
            key={type}
            onSelect={() =>
              props.dispatch({
                type: ExerciseActionType.SetFilter,
                payload: fromString(type),
              })
            }
          >
            {type}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ExerciseTypeDropdown;

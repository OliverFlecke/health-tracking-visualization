import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import ExerciseType, { fromString } from '../../../models/ExerciseType';
import { ExerciseActionType } from '../reducer/ExerciseReducer';
import { ExerciseContext } from '../Exercise';

const ExerciseTypeDropdown = () => {
  const { state, dispatch } = useContext(ExerciseContext);

  return (
    <Dropdown>
      <Dropdown.Toggle id="exercise-filter">
        {state.filter ? `Show ${state.filter}` : 'Show all'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onSelect={() =>
            dispatch({
              type: ExerciseActionType.RemoveFilter,
            })
          }
        >
          All
        </Dropdown.Item>
        {Object.keys(ExerciseType).map((type: string) => (
          <Dropdown.Item
            key={type}
            onSelect={() =>
              dispatch({
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

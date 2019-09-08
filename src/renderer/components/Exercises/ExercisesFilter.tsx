import React from 'react';
import { Dropdown } from 'react-bootstrap';
import ExerciseType, { fromString } from '../../models/ExerciseType';

const ExercisesFilter = (props: { setFilter: (type: ExerciseType | undefined) => void }) => {
    const { setFilter } = props;

    return (
        <Dropdown>
            <Dropdown.Toggle id="exercise-filter">Filter exercises</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onSelect={() => setFilter(undefined)}>All</Dropdown.Item>
                {Object.keys(ExerciseType).map((type: string, i) => (
                    <Dropdown.Item
                        key={type}
                        onSelect={() => {
                            setFilter(fromString(type));
                        }}
                    >
                        {type}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ExercisesFilter;

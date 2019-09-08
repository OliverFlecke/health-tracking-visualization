import React, { useState, useEffect } from 'react';
import fs from 'fs';
import { parseString } from 'fast-csv';
import Exercise from '../models/Exercise';
import ExerciseType, { fromString } from '../models/ExerciseType';
import { Dropdown } from 'react-bootstrap';

const type = 'com.samsung.health.exercise.201909081317';

const Exercises = () => {
    console.log('Render');
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [filter, setFilter] = useState<ExerciseType>();

    useEffect(() => {
        const filename = `data/${type}.csv`;
        readExerciseData(filename, setExercises);
    }, []);

    return (
        <div>
            <h1>Exercises</h1>
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
            {exercises
                .filter(e => !filter || e.type == filter)
                .map((exercise, index) => (
                    <ExerciseOverview key={index} exercise={exercise} />
                ))}
        </div>
    );
};

export default Exercises;

const ExerciseOverview = (props: { exercise: Exercise }) => {
    const { exercise } = props;

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                width: '100%'
            }}
        >
            <div>{exercise.start_time.toDateString()}</div>
            <div style={{ textAlign: 'right', marginRight: 10 }}>
                {exercise.distance.toFixed(0)} m
            </div>
            <div>
                {exercise.type == ExerciseType.Unknown ? exercise.exercise_type : exercise.type}
            </div>
        </div>
    );
};

function readExerciseData(filename: string, setExercises: (exercises: Exercise[]) => void) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        let readExercises: Exercise[] = [];
        const text = data
            .split('\n')
            .splice(1)
            .join('\n');
        parseString(text, {
            headers: true
        })
            .on('data', (row: any) => readExercises.push(new Exercise(row)))
            .on('end', () => setExercises(readExercises.reverse()));
    });
}

import ExerciseData from '../models/ExerciseData';
import { parseString } from 'fast-csv/build/src/parser';
import fs from 'fs';
import { files } from './readingUtils';

export default function readExerciseData(
  setExercises: (exercises: ExerciseData[]) => void,
) {
  const filename = files().find(x => x.match('exercise'));
  if (!filename) return;

  fs.readFile(`data/${filename}`, 'utf-8', (err, data) => {
    const readExercises: ExerciseData[] = [];
    const text = data
      .split('\n')
      .splice(1)
      .join('\n');
    parseString(text, {
      headers: true,
    })
      .on('data', (row: any) => readExercises.push(new ExerciseData(row)))
      .on('end', () =>
        setExercises(
          readExercises.sort(
            (a, b) => a.startTime.getTime() - b.startTime.getTime(),
          ),
        ),
      );
  });
}

import ExerciseData from '../models/ExerciseData';
import { parseString } from 'fast-csv/build/src/parser';
import fs from 'fs';

export default function readExerciseData(
  filename: string,
  setExercises: (exercises: ExerciseData[]) => void
) {
  fs.readFile(filename, 'utf-8', (err, data) => {
    let readExercises: ExerciseData[] = [];
    const text = data
      .split('\n')
      .splice(1)
      .join('\n');
    parseString(text, {
      headers: true
    })
      .on('data', (row: any) => readExercises.push(new ExerciseData(row)))
      .on('end', () =>
        setExercises(
          readExercises.sort(
            (a, b) => a.start_time.getTime() - b.start_time.getTime()
          )
        )
      );
  });
}

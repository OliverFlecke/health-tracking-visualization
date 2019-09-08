import Exercise from '../models/Exercise';
import { parseString } from 'fast-csv/build/src/parser';
import fs from 'fs';

export default function readExerciseData(
  filename: string,
  setExercises: (exercises: Exercise[]) => void
) {
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
      .on('end', () =>
        setExercises(
          readExercises.sort(
            (a, b) => a.start_time.getTime() - b.start_time.getTime()
          )
        )
      );
  });
}

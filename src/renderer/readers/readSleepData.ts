import { files } from './readingUtils';
import ExerciseData from '../models/ExerciseData';
import { parseString } from 'fast-csv/build/src/parser';
import fs from 'fs';

export default function readSleepData(setSleepData: (sleeps: any[]) => void) {
  const filename = files().find(x => x.match('sleep.'));
  if (!filename) return;

  fs.readFile(`data/${filename}`, 'utf-8', (err, data) => {
    const sleepData: ExerciseData[] = [];
    const text = data
      .split('\n')
      .splice(1)
      .join('\n');
    parseString(text, {
      headers: true,
    })
      .on('data', (row: any) => sleepData.push(new ExerciseData(row)))
      .on('end', () =>
        setSleepData(
          sleepData.sort(
            (a, b) => a.startTime.getTime() - b.startTime.getTime(),
          ),
        ),
      );
  });
}

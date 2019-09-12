import { files } from './readingUtils';
import SleepData from '../models/SleepData';
import { parseString } from 'fast-csv/build/src/parser';
import fs from 'fs';

export default function readSleepData(setSleepData: (sleeps: any[]) => void) {
  const filename = files().find(x => x.match('sleep_data'));
  if (!filename) return;

  fs.readFile(`data/${filename}`, 'utf-8', (err, data) => {
    const sleepData: SleepData[] = [];
    const text = data
      .split('\n')
      .splice(1)
      .join('\n');
    parseString(text, {
      headers: true,
    })
      .on('data', (row: any) => sleepData.push(new SleepData(row)))
      .on('end', () =>
        setSleepData(
          sleepData.sort(
            (a, b) => a.startTime.getTime() - b.startTime.getTime(),
          ),
        ),
      );
  });
}

export function readSleepStatus(
  sleep: SleepData,
  setSleepData: (data: SleepStatusEntry[]) => void,
) {
  fs.readFile(
    `data/jsons/com.samsung.shealth.sleep_data/${sleep.sleepStatus}`,
    'utf-8',
    (err, data) => {
      setSleepData(JSON.parse(data).map(x => new SleepStatusEntry(x)));
    },
  );
}

export class SleepStatusEntry {
  public status: number;
  public startTime: Date;
  public binningPeriod: number;

  constructor(data: any) {
    this.startTime = new Date(data['start_time']);
    this.status = data['status'];
    this.binningPeriod = data['binning_period'];
  }
}

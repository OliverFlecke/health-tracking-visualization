import fs from 'fs';

export default function readLiveData(
  filename: string,
  setData: (data: any) => void,
) {
  fs.readFile(
    `data/jsons/com.samsung.health.exercise/${filename}`,
    'utf-8',
    (err, data) => {
      setData(JSON.parse(data));
    },
  );
}

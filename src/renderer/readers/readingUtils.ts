import fs from 'fs';

export function files(): string[] {
  return fs.readdirSync('data');
}

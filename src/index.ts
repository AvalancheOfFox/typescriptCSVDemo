import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
// we add the encoding flag to return us a formatted string of the contents of the csv
const reader = new CsvFileReader('football.csv');
reader.read();

let manUWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUWins++;
  }
}

console.log(`Man United won ${manUWins} games`);

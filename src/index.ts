import { CsvFileReader } from './CsvFileReader';
// we add the encoding flag to return us a formatted string of the contents of the csv
const reader = new CsvFileReader('football.csv');
reader.read();

let manUWins = 0;
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUWins++;
  }
}

console.log(`Man United won ${manUWins} games`);

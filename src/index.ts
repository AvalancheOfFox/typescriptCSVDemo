import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
// Create am object that satisfies the 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

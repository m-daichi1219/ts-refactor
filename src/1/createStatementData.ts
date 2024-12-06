import {
  Invoice,
  Plays,
  InvoiceAndPlay,
  PerformanceWithPlay,
  Play,
  Performance,
} from './types';

class PerformanceCalculator {
  performance: Performance;
  constructor(aPerformance: Performance) {
    this.performance = aPerformance;
  }
}

const totalVolumeCredits = (invoice: InvoiceAndPlay): number => {
  return invoice.performances.reduce((total, p) => total + p.volumeCredits, 0);
};

const totalAmount = (invoice: InvoiceAndPlay) => {
  return invoice.performances.reduce((total, p) => total + p.amount, 0);
};

const playFor = (performance: Performance, plays: Plays): Play => {
  return plays[performance.playID];
};

const amountFor = (performance: PerformanceWithPlay): number => {
  let result = 0;
  switch (performance.play.type) {
    case 'tragedy':
      result = 40000;
      if (performance.audience > 30) {
        result += 1000 * (performance.audience - 30);
      }
      break;
    case 'comedy':
      result = 30000;
      if (performance.audience > 20) {
        result += 10000 + 500 * (performance.audience - 20);
      }
      result += 300 * performance.audience;
      break;
    default:
      throw new Error(`unknown type: ${performance.play.type}`);
  }
  return result;
};

const volumeCreditsFor = (performance: PerformanceWithPlay): number => {
  let result = 0;
  result += Math.max(performance.audience - 30, 0);
  if ('comedy' === performance.play.type)
    result += Math.floor(performance.audience / 5);
  return result;
};

const enrichPerformance = (
  aPerformance: Performance,
  plays: Plays,
): PerformanceWithPlay => {
  const calculator = new PerformanceCalculator(aPerformance);
  const result: any = Object.assign({}, aPerformance);
  result.play = playFor(aPerformance, plays);
  result.amount = amountFor(result);
  result.volumeCredits = volumeCreditsFor(result);
  return result;
};

export const createStatementData = (
  invoice: Invoice,
  plays: Plays,
): InvoiceAndPlay => {
  const statementData: InvoiceAndPlay = {
    customer: invoice.customer,
    performances: invoice.performances.map((perf) =>
      enrichPerformance(perf, plays),
    ),
    totalVolumeCredits: 0,
    totalAmount: 0,
  };
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  statementData.totalAmount = totalAmount(statementData);

  return statementData;
};

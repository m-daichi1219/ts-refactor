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
  play: Play;
  constructor(aPerformance: Performance, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount(): number {
    let result = 0;
    switch (this.play.type) {
      case 'tragedy':
        result = 40000;
        if (this.performance.audience > 30) {
          result += 1000 * (this.performance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (this.performance.audience > 20) {
          result += 10000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        break;
      default:
        throw new Error(`unknown type: ${this.play.type}`);
    }
    return result;
  }

  get volumeCredits(): number {
    let result = 0;
    result += Math.max(this.performance.audience - 30, 0);
    if ('comedy' === this.play.type)
      result += Math.floor(this.performance.audience / 5);
    return result;
  }
}

class TragedyCalculator extends PerformanceCalculator {}

class ComedyCalculator extends PerformanceCalculator {}

const createPerformanceCalculator = (
  aPerformance: Performance,
  aPlay: Play,
) => {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`未知の演劇の種類: ${aPlay.type}`);
  }
};

const totalVolumeCredits = (invoice: InvoiceAndPlay): number => {
  return invoice.performances.reduce((total, p) => total + p.volumeCredits, 0);
};

const totalAmount = (invoice: InvoiceAndPlay) => {
  return invoice.performances.reduce((total, p) => total + p.amount, 0);
};

const playFor = (performance: Performance, plays: Plays): Play => {
  return plays[performance.playID];
};

const enrichPerformance = (
  aPerformance: Performance,
  plays: Plays,
): PerformanceWithPlay => {
  const calculator = createPerformanceCalculator(
    aPerformance,
    playFor(aPerformance, plays),
  );
  const result: any = Object.assign({}, aPerformance);
  result.play = calculator.play;
  result.amount = calculator.amount;
  result.volumeCredits = calculator.volumeCredits;
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

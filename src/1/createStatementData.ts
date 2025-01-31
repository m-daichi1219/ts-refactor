import {
  Invoice,
  Plays,
  StatementData,
  EnrichedPerformance,
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
    throw new Error('サブクラスの責務');
  }

  get volumeCredits(): number {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 0;
    result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 0;
    result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;

    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}

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

const totalVolumeCredits = (invoice: StatementData): number => {
  return invoice.performances.reduce((total, p) => total + p.volumeCredits, 0);
};

const totalAmount = (invoice: StatementData) => {
  return invoice.performances.reduce((total, p) => total + p.amount, 0);
};

const playFor = (performance: Performance, plays: Plays): Play => {
  return plays[performance.playID];
};

const enrichPerformance = (
  aPerformance: Performance,
  plays: Plays,
): EnrichedPerformance => {
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
): StatementData => {
  const statementData: StatementData = {
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

import * as fs from 'fs';

interface Invoice {
  customer: string;
  performances: Performance[];
}

interface Performance {
  playID: string;
  audience: number;
}

interface Plays {
  [key: string]: Play;
}

type PlayType = 'tragedy' | 'comedy';

interface Play {
  name: string;
  type: PlayType;
}

// todo: 一時的に型解決のために追加
interface PerformanceWithPlay extends Performance {
  play: Play;
  amount: number;
  valueCredits: number;
}
interface InvoiceAndPlay {
  customer: string;
  performances: PerformanceWithPlay[];
}

const usd = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount / 100);
};

const playFor = (performance: Performance, plays: Plays): Play => {
  return plays[performance.playID];
};

const amountFor = (performance: PerformanceWithPlay, plays: Plays): number => {
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

const totalVolumeCredits = (invoice: InvoiceAndPlay): number => {
  let result = 0;
  for (let perf of invoice.performances) {
    // ボリューム特定のポイントを加算
    result += perf.valueCredits;
  }
  return result;
};

const appleSauce = (invoice: InvoiceAndPlay, plays: Plays) => {
  let result = 0;
  for (let perf of invoice.performances) {
    result += perf.amount;
  }
  return result;
};

const renderPlainText = (data: InvoiceAndPlay, plays: Plays) => {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)}(${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(appleSauce(data, plays))}\n`;
  result += `You earned ${totalVolumeCredits(data)} credits\n`;

  return result;
};

const enrichPerformance = (
  aPerformance: Performance,
  plays: Plays,
): PerformanceWithPlay => {
  const result: any = Object.assign({}, aPerformance);
  result.play = playFor(aPerformance, plays);
  result.amount = amountFor(result, plays);
  result.volumeCredits = volumeCreditsFor(result);
  return result;
};

const statement = (invoice: Invoice, plays: Plays) => {
  const statementData: InvoiceAndPlay = {
    customer: invoice.customer,
    performances: invoice.performances.map((perf) =>
      enrichPerformance(perf, plays),
    ),
  };
  return renderPlainText(statementData, plays);
};

// JSONファイルの読み込み
const invoice = JSON.parse(fs.readFileSync('./src/1/invoices.json', 'utf8'));
const plays = JSON.parse(fs.readFileSync('./src/1/plays.json', 'utf8'));

// statement関数の実行
const result = statement(invoice[0], plays);
console.log(result);

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

const amountFor = (performance: Performance, plays: Plays): number => {
  let result = 0;
  switch (playFor(performance, plays).type) {
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
      throw new Error(`unknown type: ${playFor(performance, plays).type}`);
  }
  return result;
};

const volumeCreditsFor = (performance: Performance, plays: Plays): number => {
  let result = 0;
  result += Math.max(performance.audience - 30, 0);
  if ('comedy' === playFor(performance, plays).type)
    result += Math.floor(performance.audience / 5);
  return result;
};

const totalVolumeCredits = (invoice: Invoice, plays: Plays): number => {
  let result = 0;
  for (let perf of invoice.performances) {
    // ボリューム特定のポイントを加算
    result += volumeCreditsFor(perf, plays);
  }
  return result;
};

const appleSauce = (invoice: Invoice, plays: Plays) => {
  let result = 0;
  for (let perf of invoice.performances) {
    result += amountFor(perf, plays);
  }
  return result;
};

const renderPlainText = (data: any, plays: Plays) => {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    result += `${playFor(perf, plays).name}: ${usd(amountFor(perf, plays))}(${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(appleSauce(data, plays))}\n`;
  result += `You earned ${totalVolumeCredits(data, plays)} credits\n`;

  return result;
};
const statement = (invoice: Invoice, plays: Plays) => {
  const statementData = {
    customer: invoice.customer,
    performances: invoice.performances,
  };
  return renderPlainText(statementData, plays);
};

// JSONファイルの読み込み
const invoice = JSON.parse(fs.readFileSync('./src/1/invoices.json', 'utf8'));
const plays = JSON.parse(fs.readFileSync('./src/1/plays.json', 'utf8'));

// statement関数の実行
const result = statement(invoice[0], plays);
console.log(result);

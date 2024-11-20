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

const amountFor = (performance: Performance, play: Play): number => {
  let result = 0;
  switch (play.type) {
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
      throw new Error(`unknown type: ${play.type}`);
  }
  return result;
};

const statement = (invoice: Invoice, plays: Plays) => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = amountFor(perf, play);

    // ボリューム特定のポイントを加算
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 喜劇のときは10人につき、さらにポイントを加算
    if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);
    // 注文の内訳を出力
    result += `${play.name}: ${format(thisAmount / 100)}(${perf.audience} seats)\n`;
    totalAmount += thisAmount;
  }

  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;

  return result;
};

// JSONファイルの読み込み
const invoice = JSON.parse(fs.readFileSync('./src/1/invoices.json', 'utf8'));
const plays = JSON.parse(fs.readFileSync('./src/1/plays.json', 'utf8'));

// statement関数の実行
const result = statement(invoice[0], plays);
console.log(result);

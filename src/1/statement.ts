import { createStatementData } from './createStatementData';
import { Invoice, StatementData, Plays } from './types';

const usd = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount / 100);
};

const renderPlainText = (data: StatementData) => {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)}(${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;

  return result;
};

const statement = (invoice: Invoice, plays: Plays) => {
  return renderPlainText(createStatementData(invoice, plays));
};

const renderHtml = (data: StatementData) => {
  let result = `<h1>Statement for ${data.customer}</h1>\n`;
  result += '<table>\n';
  result += '<tr><th>play</th><th>seats</th><th>cost</th></tr>';
  for (let perf of data.performances) {
    result += `<tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount)}</td><tr>\n`;
  }
  result += '</table>\n';
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>You earned<em>${data.totalVolumeCredits}</em>credits</p>\n`;

  return result;
};

const htmlStatement = (invoice: Invoice, plays: Plays) => {
  return renderHtml(createStatementData(invoice, plays));
};

import * as fs from 'fs';

// JSONファイルの読み込み
const invoice = JSON.parse(fs.readFileSync('./src/1/invoices.json', 'utf8'));
const plays = JSON.parse(fs.readFileSync('./src/1/plays.json', 'utf8'));

// renderPlainText
console.log(statement(invoice[0], plays));

// renderHtml
console.log(htmlStatement(invoice[0], plays));

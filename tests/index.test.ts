import { describe, it, expect } from 'vitest';
import { statement } from '../src/index';
import { Invoice } from '@/types';

describe('statement', () => {
  it('should return correct statement for given invoice and plays', () => {
    const invoice: Invoice = {
      customer: 'BigCo',
      performances: [
        {
          playID: 'hamlet',
          audience: 55,
        },
        {
          playID: 'as-like',
          audience: 35,
        },
        {
          playID: 'othello',
          audience: 40,
        },
      ],
    };

    const plays = {
      hamlet: {
        name: 'Hamlet',
        type: 'tragedy',
      },
      'as-like': {
        name: 'As You Like It',
        type: 'comedy',
      },
      othello: {
        name: 'Othello',
        type: 'tragedy',
      },
    };
    const expected = `Statement for BigCo
Hamlet: $650.00(55 seats)
As You Like It: $580.00(35 seats)
Othello: $500.00(40 seats)
Amount owed is $1,730.00
You earned 47 credits\n`;

    const result = statement(invoice, plays);
    expect(result).toBe(expected);
  });
});

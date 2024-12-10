type PlayID = 'hamlet' | 'as-like' | 'othello';

export interface Performance {
  playID: PlayID;
  audience: number;
}

export interface Invoice {
  customer: string;
  performances: Performance[];
}

export interface Theater {
  name: string;
  type: string;
}

export interface Plays {
  hamlet: Theater;
  'as-like': Theater;
  othello: Theater;
}

export interface Invoice {
  customer: string;
  performances: Performance[];
}

export interface Performance {
  playID: string;
  audience: number;
}

export interface Plays {
  [key: string]: Play;
}

type PlayType = 'tragedy' | 'comedy';

export interface Play {
  name: string;
  type: PlayType;
}

export interface EnrichedPerformance extends Performance {
  play: Play;
  amount: number;
  volumeCredits: number;
}
export interface StatementData {
  customer: string;
  performances: EnrichedPerformance[];
  totalVolumeCredits: number;
  totalAmount: number;
}

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

// todo: 一時的に型解決のために追加
export interface PerformanceWithPlay extends Performance {
  play: Play;
  amount: number;
  volumeCredits: number;
}
export interface InvoiceAndPlay {
  customer: string;
  performances: PerformanceWithPlay[];
  totalVolumeCredits: number;
  totalAmount: number;
}

const sampleProvinceData = () => {
  return {
    name: 'Asia',
    producers: [
      { name: 'Byzantium', cost: 10, production: 9 },
      { name: 'Attalia', cost: 12, production: 10 },
      { name: 'Sinope', cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20,
  };
};

class Producer {
  private _province: any;
  private _cost: number;
  private _name: string;
  private _production: number;

  constructor(aProvince: any, data: any) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }

  get production() {
    return this._production;
  }

  set production(amountStr: string) {
    const amount = parseInt(amountStr);
    const newProduction = amount;
    this._province.totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}

class Producer {
  private _name: string;
  private _producers: Producer[];
  private _totalProduction: number;
  private _demand: number;
  private _price: number;

  get name() {
    return this._name;
  }
  get producers() {
    return this._producers.slice();
  }
  get totalProduction() {
    return this._totalProduction;
  }
  set totalProduction(arg) {
    this._totalProduction = arg;
  }
  get demand() {
    this._demand;
  }
  set demand(arg) {
    this._demand = parseInt(arg);
  }
  get price() {
    return this._price;
  }
  set price(arg) {
    this._price = parseInt(arg);
  }
}

class Province {
  private _name: string;
  private _producers: Producer[];
  private _totalProduction: number;
  private __demand: number;
  private _price: number;

  constructor(doc: any) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this.__demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach((d) => this.addProducer(new Producer(this, d)));
  }

  private addProducer(arg: Producer) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  get shortfall() {
    return this._demand - this.totalProduction;
  }

  get profit() {
    return this.demandValue - this.demandCost;
  }

  get demandCost() {
    let remainingDemand = this;
    let result = 0;
    this._producers.sort((a,b) => a.cost - b.cost))
    .forEach((p) => {
      const contribution = Math.min(remainingDemand, p.production);
      remainingDemand -= contribution;
      result += contribution * p.cost;
    });

    return result
  }

    get demandValue() {
        return this.satisfiedDemand * this._price;
    }

    get satisfiedDemand() {
        return Math.min(this._demand, this.totalProduction);
    }
}

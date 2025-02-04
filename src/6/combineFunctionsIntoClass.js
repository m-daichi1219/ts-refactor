reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };
// client 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
// client 2
const aReading2 = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
// client 3
const aReading3 = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading3);
const calculateBaseCharge = (aReading) => {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
};

/** --- */
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

const rawReading = acquireReading();
const aReading4 = new Reading(rawReading);
const basicChargeAmount2 = aReading4.baseCharge;

// client 1
const rawReading2 = acquireReading();
const aReading5 = new Reading(rawReading2);
const baseCharge2 = aReading5.baseCharge;
// client 2
const rawReading3 = acquireReading();
const aReading6 = new Reading(rawReading3);
// const taxableCharge2 = Math.max(
//   0,
//   aReading6.baseCharge - taxThreshold(aReading6.year),
// );
// const taxableCharge2 = taxableChargeFn(aReading6);
const taxableCharge2 = aReading6.taxableCharge;

const taxableChargeFn = (aReading) => {
  return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
};

const example = () => {
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
};

class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }

  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}

/** ---- */

const example2 = () => {
  //   let basePrice = anOrder.basePrice;
  //   return basePrice > 1000;
  return anOrder.basePrice > 1000;
};

/** ---- */

class Book {
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

/** --- */
// aCustomerを引数に取り、その顧客がニューイングランドに住んでいるかどうかを返しているが、
// リファクタリング後は、aCustomer.address.stateを引数に取り、その顧客がニューイングランドに住んでいるかどうかを返している
// 引数が"顧客"から"州(code)"に依存関係を変更している
const inNewEngland = (aCustomer) => {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
};

const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

// const refInNewEngland = (aCustomer) => {
//   return xxNEWinNewEngland(aCustomer.address.state);
// };

const xxNEWinNewEngland = (stateCode) => {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
};

const refNewEnglanders = someCustomers.filter((c) =>
  xxNEWinNewEngland(c.address.state),
);

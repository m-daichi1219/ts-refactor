const organization = { name: 'Acme Gooseberries', country: 'GB' };

const getRawDataOfOrganization = () => {
  return organization;
};

// result += `<h1>${organization.name}</h1>`;
result += `<h1>${getRawDataOfOrganization().name}</h1>`;
// organization.name = newName;
getRawDataOfOrganization().name = newName;

/** ----- */

class Organization {
  constructor(data) {
    // this._data = data;
    this._name = data.name;
    this._country = data.country;
  }

  set name(aString) {
    this._name = aString;
  }

  get name() {
    return this._data.name;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
  }

  get country() {
    return this._country;
  }
}

const organization2 = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB',
});

// const getRawDataOfOrganization2 = () => {
//   return organization2._data;
// };

const getOrganization = () => {
  return organization2;
};

result += `<h1>${getOrganization().name}</h1>`;

/** ---- */

customerData[customerID].usage[year][month] = amount;

const compareUsage = (customerID, laterYear, month) => {
  const later = customerData[customerID].usage[laterYear][month];
  const earlier = customerData[customerID].usage[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
};

const getRawDataOfCustomers = () => {
  return customerData;
};

const setRawDataOfCustomers = (input) => {
  customerData = input;
};

getRawDataOfCustomers()[customerID].usage[year][month] = amount;

const compareUsage2 = (customerID, laterYear, month) => {
  const later = getRawDataOfCustomers()[customerID].usage[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerID].usage[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
};

/** ---- */

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usage[year][month] = amount;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  usage(customerID, year, month) {
    return this._data[customerID].usage[year][month];
  }
}

const getCustomerData = () => {
  return customerData;
};

const getRawDataOfCustomers2 = () => {
  return customerData._data;
};

const setRawDataOfCustomers2 = (input) => {
  customerData = new CustomerData(input);
};

const setUsage = (customerID, year, month, amount) => {
  getRawDataOfCustomers2()[customerID].usage[year][month] = amount;
};

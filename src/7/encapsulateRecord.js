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

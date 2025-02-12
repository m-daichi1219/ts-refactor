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
    this._data = data;
  }

  set name(aString) {
    this._data.name = aString;
  }

  get name() {
    return this._data.name;
  }
}

const organization2 = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB',
});

const getRawDataOfOrganization2 = () => {
  return organization2._data;
};

const getOrganization = () => {
  return organization2;
};

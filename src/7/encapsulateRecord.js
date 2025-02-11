const organization = { name: 'Acme Gooseberries', country: 'GB' };

const getRawDataOfOrganization = () => {
  return organization;
};

// result += `<h1>${organization.name}</h1>`;
result += `<h1>${getRawDataOfOrganization().name}</h1>`;
// organization.name = newName;
getRawDataOfOrganization().name = newName;

const getRating = (driver) => {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
};

const moreThanFiveLateDeliveries = (driver) =>
  driver.numberOfLateDeliveries > 5;

const refGetRating = (driver) => {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
};

const reportLines = (aCustomer) => {
  const lines = [];

  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);

  // gatherCustomerData(lines, aCustomer);

  return lines;
};

const gatherCustomerDate = (out, aCustomer) => {
  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);
};

const getRating = (driver) => {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
};

const moreThanFiveLateDeliveries = (driver) => {
  return driver.numberOfLateDeliveries > 5;
};

const refGetRating = (driver) => {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
};

/** ------ */

const reportLines = (aCustomer) => {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
};

const gatherCustomerData = (out, aCustomer) => {
  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);
};

const refReportLines = (aCustomer) => {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
  return lines;
};

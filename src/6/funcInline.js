const getRating = (driver) => {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
};

const moreThanFiveLateDeliveries = (driver) => {
  return driver.numberOfLateDeliveries > 5;
};

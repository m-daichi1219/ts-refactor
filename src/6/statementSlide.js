const printOwing = (invoice) => {
  printBanner();

  // calculate outstanding
  const outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
};

const calculateOutstanding = (invoice) => {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }

  return result;
};

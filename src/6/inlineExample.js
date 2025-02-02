const printOwing = (invoice) => {
  printBanner();

  // calculate outstanding
  const outstanding = calculateOutstanding(invoice);

  // record due date
  recordDueDate(invoice);

  // print details
  printDetails(invoice, outstanding);
};

const printBanner = () => {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
};

const calculateOutstanding = (invoice) => {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding;
};

const recordDueDate = (invoice) => {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );
};

const printDetails = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};

const printOwing = (invoice) => {
  printBanner();
  let outstanding = calculateOutstanding();
  // 明細の印字（print details）
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
};

const refPrintOwing = (invoice) => {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(invoice, outstanding);
};

const printDetails = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
};

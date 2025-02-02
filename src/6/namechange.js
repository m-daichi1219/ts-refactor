// let a = height * width;
let area = height * width;

let tpHd = 'untitled';
result += `<h1>${tpHd}</h1>`;
tpHd = obj['articleTitle'];

/** ----- */
let _title = 'untitled';
result += `<h1>${title()}</h1>`;
setTitle(obj['articleTitle']);

const title = () => {
  return _title;
};

const setTitle = (arg) => {
  _title = arg;
};

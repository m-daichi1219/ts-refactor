// カプセル化
// let defaultOwner = { firstName: 'Martin', lastName: 'Fowler' };
let defaultOwnerData = { firstName: 'Martin', lastName: 'Fowler' };
export const defaultOwner = () => defaultOwnerData;
export const setDefaultOwner = (arg) => {
  defaultOwnerData = arg;
};

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  //   get department() {
  //     return this._department;
  //   }
  set department(arg) {
    this._department = arg;
  }
  get manager() {
    return this._department.manager;
  }
}

class Department {
  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

// client code
// manager = aPerson.department.manager;
manager = aPerson.manager;

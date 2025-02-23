// client code
// manager = aPerson.manager;
manager = aPerson.department.manager;

class Person {
  get manager() {
    return this._department.manager;
  }

  get department() {
    return this._department;
  }
}

class Department {
  get manager() {
    return this._manager;
  }
}

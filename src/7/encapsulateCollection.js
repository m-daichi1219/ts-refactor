class Parson {
  constructor(name) {
    this._courses = [];
    this._name = name;
  }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    },
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }

  get name() {
    return this._name;
  }
  get courses() {
    // return this._courses;
    return this._courses.slice();
  }
  set courses(aList) {
    // this._courses = aList;
    this._courses = aList.slice();
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

const aParson = new Parson('John');
const numAdvancedCourses = aParson.courses.filter((c) => c.isAdvanced).length;

const basicCourseNames = readBasicCourseNames(filename);
aParson.courses = basicCourseNames.map((name) => new Course(name, false));

for (const name of readBasicCourseNames(filename)) {
  //   aParson.courses.push(new Course(name, false));
  aParson.addCourse(new Course(name, false));
}

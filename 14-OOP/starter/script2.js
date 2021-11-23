'use strict';

//inheritance
const PersonInh = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
PersonInh.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
}


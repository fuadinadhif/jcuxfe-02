let fullName = "John Doe";
let age = 70;
const address = "St. Wall Street";
const gender = "Male";

console.log(fullName);
console.log(age);
console.log(address);
console.log(gender);

/*
{
  key1: value1 => property1,
  key2: value2 => property2,
  key3: value3 => property3,
}
*/

const peopleData = {
  fullName: null, // property
  age: 25, // property
  address: "St. Tahoe", // property
  gender: false, // property
  sayHi: function () {
    return "Hai hai";
  }, // method (fungis di dalam sebuah object)
};

console.log(peopleData);
console.log(peopleData.fullName);
console.log(peopleData.age);
console.log(peopleData.address);
console.log(peopleData.gender);
console.log(peopleData.sayHi());

/* ----------------------- Built In Object and Method ----------------------- */
console.log(Math);
console.log(Math.PI);
console.log(Math.ceil(10.1));
console.log(Math.floor(10.9));
console.log(Math.round(10.4));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.random() * 3);
console.log(Math.random() * 3);
console.log(Math.ceil(Math.random() * 3));
console.log(Math.ceil(Math.random() * 3));
console.log(Math.ceil(Math.random() * 3));
console.log(Math.ceil(Math.random() * 3));

// Reguler function
function someFunction() {
  return "Something";
}
someFunction();

// Method
let someObj = {
  someMethod: function () {
    return "Something";
  },
};
someObj.someMethod();

const userData = {
  firstName: "John",
  lastName: "Doe",
  sayFullName: function () {
    return userData.firstName + " " + userData.lastName;
  },
};

console.log(userData.sayFullName());

/* -------------------------------------------------------------------------- */
/*                              Built In Methods                              */
/* -------------------------------------------------------------------------- */
/* --------------------------------- String --------------------------------- */
const message = "hElLO EverYBODY";
console.log(message.toLowerCase());
console.log(message.toUpperCase());

console.log("My Name is Joni".toLowerCase());
console.log("My Name is Joni".toUpperCase());

/* --------------------------------- Number --------------------------------- */
console.log(Number.parseInt("12"));
console.log(Number.parseInt(false));
console.log(Number.parseInt(undefined));

console.log(Number.parseFloat("12.567"));
console.log(Number.parseInt("12.567"));

/* ---------------------------------- Date ---------------------------------- */
// Get
const today = new Date();
console.log(today);

console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMilliseconds());
console.log(today.getTime());

// Set
today.setFullYear(2020);
console.log(today);

/* --------------------------------- Boolean -------------------------------- */

/* ---------------------------------- Array --------------------------------- */

/* --------------------------------- Object --------------------------------- */
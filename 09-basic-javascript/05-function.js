/* ------------------------------------ 1 ----------------------------------- */
function sayHello() {
  console.log("Hellooooooo!");
}

// sayHello();

/* ------------------------------------ 2 ----------------------------------- */
function add(num1, num2) {
  console.log(num1 + num2);
}

// add(10, 20);
// add(5, 1);
// add(1, -10);
// add(100, -10);

/* ------------------------------------ 3 ----------------------------------- */
function multiplyBy5(num) {
  num * 5;
}

function multiplyBy10(num) {
  return num * 10;
}

const result1 = multiplyBy5(5); // undefined
const result2 = multiplyBy5(50); // undefined
const result3 = multiplyBy5(500); // undefined
const result4 = multiplyBy5(500_000); // undefined
const result5 = multiplyBy10(2);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

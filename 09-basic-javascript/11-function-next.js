// Membuat fungsi
function sayHello() {
  return "Hi";

  1 + 1;
  5 ** 5;

  return "Helloooo";
  return "Alo";
}

// Memanggil fungsi
sayHello();
console.log(sayHello());

/* -------------------------------- Example 1 ------------------------------- */
/* ------------------- Inefficient code (without function) ------------------ */
const itemPrice1 = 1_000_000;
const discountRate1 = 50 / 100;
const discountPrice1 = itemPrice1 * discountRate1;
const finalPrice1 = itemPrice1 - discountPrice1;
console.log(finalPrice1);

const itemPrice2 = 10_000_000;
const discountRate2 = 10 / 100;
const discountPrice2 = itemPrice2 * discountRate2;
const finalPrice2 = itemPrice2 - discountPrice2;
console.log(finalPrice2);

/* --------------------- Efficient code (with function) --------------------- */
function calculateFinalPrice(itemPrice, discountRate) {
  const discountPrice = itemPrice * discountRate;
  const finalPrice = itemPrice - discountPrice;

  return finalPrice;
}

const finalPrice3 = calculateFinalPrice(500, 90 / 100);
const finalPrice4 = calculateFinalPrice(1_000_000_000, 15 / 100);
const finalPrice5 = calculateFinalPrice(1000, 0.25);

console.log(finalPrice3);
console.log(finalPrice4);
console.log(finalPrice5);

/* -------------------------- Parameter & Argument -------------------------- */
// Parameter => Pintu masuk agar value dari luar fungsi bisa masuk kedalam
// Argument => Value yang dimasukkan ke dalam parameter

// Static function (Fungsi tanpa parameter)
function greet() {
  return "Hi, Ahmad!";
}

console.log(greet());
console.log(greet());
console.log(greet());

// Dynamic function
function greetWithName(name) {
  return "Hi" + " " + name;
}

console.log(greetWithName("Joko"));
console.log(greetWithName("Anwar"));
console.log(greetWithName("Widodo"));

/* --------------- function declaration vs function expression -------------- */
// 1. Declaration => dengan memanggil keyword 'function' secara langsung
function someFunction() {}

console.log(addWith10(0));
function addWith10(num) {
  return num + 10;
}
console.log(addWith10(5));
console.log(addWith10(50));

// 2. Expression => dengan membuat sebuah variable yang berisi sebuah fungsi
const anotherFunction = function () {};
let otherFunction = function () {};
var elseFunction = function () {};

// console.log(multiplyWith10(0));
const multiplyWith10 = function (num) {
  return num * 10;
};
console.log(multiplyWith10(5));
console.log(multiplyWith10(50));

/* ----------------------------- arrow function ----------------------------- */
// variasi dari function expression (=>)

// 1.
const add1 = function (num1, num2) {
  const result = num1 + num2;
  return result;
};
console.log(add1(5, 2));

// 2.
const add2 = (num1, num2) => {
  const result = num1 + num2;
  return result;
};
console.log(add2(5, 2));

// 3.
const add3 = (num1, num2) => num1 + num2;
console.log(add3(5, 2));

/* ----------------------- higher order function (hof) ---------------------- */
/*
HOF adalah sebuah fungsi yang:
1. Menerima sebuah fungsi lain sebagai argument-nya
2. Me-return fungsi lain sebagai hasil fungsinya
3. Both
*/

function doTwice(action) {
  action();
  action();
}

function saySalam() {
  console.log("Salaam");
}

doTwice(saySalam);

saySalam();
saySalam();

/*
doTwice(saySalam);

function doTwice(saySalam) {
  saySalam();
  saySalam();
}
*/

/* --------------------------------- Example -------------------------------- */
/* ---------------------------- Inefficient code ---------------------------- */
function addWith1(num) {
  return num + 1;
}
console.log(addWith1(10));

function addWith2(num) {
  return num + 2;
}
console.log(addWith2(10));

function addWith3(num) {
  return num + 3;
}
console.log(addWith3(10));

/* ------------------------ Efficient code (with HOF) ----------------------- */
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const addWith4 = makeAdder(4);
const addWith5 = makeAdder(5);
const addWith6 = makeAdder(6);

console.log(addWith4(10));
console.log(addWith5(10));
console.log(addWith6(10));

/*
1.
const addWith4 = makeAdder(4);

2.
const addWith4 = function makeAdder(4) {
  return function (y) {
    return 4 + y;
  };
}

3. 
const addWith4 = function (y) {
  return 4 + y;
};

4.
addWith4(10) = function (10) {
  return 4 + 10;
};

5. addWith4(10) = 14;
*/

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 1. shift + alt + up arrow = copy line code ke atas
// 2. shift + alt + down arrow = copy line code ke bawah
// 3. ctrl + alt + up arrow = new cursor ke atas
// 4. ctrl + alt + down arrow = new cursor ke bawah
// 5. (block code) + ctrl + d = select multiple

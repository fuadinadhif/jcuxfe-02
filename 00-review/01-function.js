/* ------------------------------ Review Intro ------------------------------ */
// function = keyword untuk membuat sebuah fungsi
// someFunction = nama fungsi yang kita pilih
// () = regular bracket. tempat kita meletakkan parameters
// {} = curly bracket. tempat kita meletakkan kode yang akan dijalankan oleh fungsinya
function someFunction() {}
const someFunctionResult = someFunction(); // cara memanggil/mengaktifkan sebuah fungsi
console.log(someFunctionResult);

function addTwoWithTen() {
  const result = 2 + 10;
  return result;
}
const addTwoWithTenResult = addTwoWithTen();
console.log(addTwoWithTenResult);

/* -------------------------------- Contoh 2 -------------------------------- */
function sayHello() {
  return "Hellooooo";
}

// 1. Kita panggil langsung sayHello() dan hasilnya langsung kita tampilkan di layar (console.log())
console.log(sayHello());

// 1. Kita panggil fungsi sayHello() dan hasilnya kita simpan di variable sayHelloResult
// 2. Kita tampilkan isi sayHelloResult di layar (console.log)
const sayHelloResult = sayHello();
console.log(sayHelloResult);

/* ------------------------- Parameter dan Argument ------------------------- */
// static function
function onePlusOne() {
  return 1 + 1;
}
console.log(onePlusOne());
console.log(onePlusOne());
console.log(onePlusOne());

// dynamic function (with parameter & argument)
function nKuadrat(number) {
  return number ** 2;
}
console.log(nKuadrat(10));
/*
function nKuadrat(10) {
  return 10 ** 2;
}
*/

console.log(nKuadrat(4));
/*
function nKuadrat(4) {
  return 4 ** 2;
}
*/

console.log(nKuadrat(5));
console.log(nKuadrat(2));

/* ------------------------------ Neza Question ----------------------------- */
function checkIsLoading() {}

// user minta data yang berat
let isLoading = checkIsLoading(); // true => tampilkan halaman loading

// data sampai ke komputer kita
isLoading = checkIsLoading(); // false => tampilkan data asli

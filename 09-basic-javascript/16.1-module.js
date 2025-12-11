import { addTwoNumber, multiplyTwoNumber } from "./16.2-module.js";
import kurangiDuaAngka from "./16.2-module.js";

const firstNumber = 100;
const secondNumber = 200;

console.log(addTwoNumber(firstNumber, secondNumber));
console.log(multiplyTwoNumber(firstNumber, secondNumber));
console.log(kurangiDuaAngka(firstNumber, secondNumber));

/* -------------------------------------------------------------------------- */
/*                                 Module Type                                */
/* -------------------------------------------------------------------------- */
/* ------------------------------ Named Module ------------------------------ */
// 1. Export bisa dilakukan berkali-kali di dalam satu file yang sama
// 2. Import HARUS menggunakan kurung kurawal
// 3. Import HARUS menggunakan nama yang sama dengan Export-nya

/* ----------------------------- Default Module ----------------------------- */
// 1. Export hanya bisa dilakukan SATU kali saja di dalam satu file yang sama
// 2. Import TIDAK BOLEH menggunakan kurung kurawal
// 3. Import BOLEH menggunakan nama yang berbeda dengan Export-nya

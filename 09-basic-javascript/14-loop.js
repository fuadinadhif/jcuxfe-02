console.log("Hello");
console.log("Hello");
console.log("Hello");

/*
for => keyword untuk membuat sebuah loop
() => 1. variable counter, 2. loop condition, 3. counter increment/decrement
{} => kode yang akan dijalankan selama loop berjalan
*/
for (let counter = 0; counter < 3; counter++) {
  console.log("Hello");
}
/*
Loop pertama
1. counter = 0; 
2. counter < 3; 0 < 3 = true => Loop akan dijalankan
3. console.log("Hello");
4. counter++; counter = counter + 1; counter = 0 + 1; counter = 1;

Loop kedua
1. counter = 1;
2. counter < 3; 1 < 3 = true => Loop akan dijalankan lagi
3. console.log("Hello");
3. counter++; counter = counter + 1; counter = 1 + 1; counter = 2;

Loop ketiga
1. counter = 2;
2. counter < 3; 2 < 3 = true; Loop akan dijalankan lagi
3. console.log("Hello");
4. counter++; counter = 2 + 1; counter = 3;

Loop keempat
1. counter = 3;
2. counter < 3; 3 < 3 = false; Loop dihentikan
 */

/* -------------------------------------------------------------------------- */
/*                                  Tipe Loop                                 */
/* -------------------------------------------------------------------------- */
/* -------------------------------- for loop -------------------------------- */
for (let counter = 0; counter < 3; counter++) {
  console.log("For loop");
}

/* ------------------------------- while loop ------------------------------- */
/* ------------------------------------ 1 ----------------------------------- */
let counter = 0;

while (counter < 3) {
  console.log("While loop");
  counter++;
}

/* ------------------------------------ 2 ----------------------------------- */
// Infinite Loop
// let i = 0;

// while (i < 3) {
//   console.log("Example 2");
// }

/* ------------------------------ do while loop ----------------------------- */
let k = 0;

do {
  console.log("Do while loop");
  k++;
} while (k < 3);

/* ------------------------- do while vs while loop ------------------------- */
let counterWhile = 3;
while (counterWhile < 3) {
  console.log("While");
  counterWhile++;
}

let counterDoWhile = 3;
do {
  console.log("Do while");
  counterDoWhile++;
} while (counterDoWhile < 3);

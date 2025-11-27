/* -------------------------------------------------------------------------- */
/*                             Primitive Data Type                            */
/* -------------------------------------------------------------------------- */
/* -------------------------------- 1. String ------------------------------- */
// Menyimpan value berbentuk teks
"Joko Widodo";
"Pogung Baru Blok F 77";
"Male";

const fullName = "Budiman Sudjatmiko";
const address = "Jakarta Utara";
const zipCode = "55274";
const phoneNumber = "+628989097010";

/* -------------------------------- 2. Number ------------------------------- */
// Menyimpan value berbentuk angka
const age = 70;
const balance = 11_000_000_000;

/* ------------------------------- 3. Boolean ------------------------------- */
// Value yang opsinya hanya dua, true | false
const isAgree = true;

/* --------------------------------- 4. Null -------------------------------- */
// Value yang merepresentasikan kekosongan (void)
let maritalStatus = "single";
maritalStatus = null;
console.log(maritalStatus);

/* ------------------------------ 5. Undefined ------------------------------ */
// Value yang merepresentasikan kekosongan (void)
let position;
console.log(position);

/* -------------------------------------------------------------------------- */
/*                           Non Primitive Data Type                          */
/* -------------------------------------------------------------------------- */
/* -------------------------------- 1. Array -------------------------------- */
// Kumpulan value yang memiliki urutan
const randomArray = ["abc", 1, null, true, undefined];
const playlist = [
  "Penjaga Hati",
  "Indonesia Raya",
  "Jatuh Cinta Lagi",
  "Bergema Sampai Selamanya",
];

console.log(playlist);
console.log(playlist[1]);
console.log(playlist[2]);

/* -------------------------------- 2. Object ------------------------------- */
// Kumpulan data yang saling terikat
const firstName = "Jane";
const lastName = "Doe";

const array = [1, 2, 3];

const country = "United Kingdom";
const postalCode = "56789";
const job = "Tailor";

const userData = {
  job: "Tailor",
  firstName: "Jane",
  lastName: "Doe",
  country: "United Kingdom",
  postalCode: "56789",
};

console.log(userData);
console.log(userData.postalCode);
console.log(userData.job);

userData.firstName = "Angelina";

console.log(userData);

// auto-comment: ctrl + /
/* --------------------- comment divider small: alt + x --------------------- */
/* -------------------------------------------------------------------------- */
/*                    comment divider big: shift + alt + x                    */
/* -------------------------------------------------------------------------- */

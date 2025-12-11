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
// 1. Membuat Array
const corruptorName = [
  "Anies Urbaningrum",
  "Setya Novanto",
  "Batubara",
  "Angelina Sondakh",
];

// 2. Mengakses Array
console.log(corruptorName);
console.log(corruptorName[1]);
console.log(corruptorName[3]);

// 3. Edit Array
console.log(corruptorName[2]);
corruptorName[2] = "Gayus Tambunan";
console.log(corruptorName[2]);

// 3.1 Push Array (edit/tambah element baru di akhir array)
console.log(corruptorName);
corruptorName.push("Harvey Moeis");
console.log(corruptorName);

// 3.2 Pop Array (edit/menghapus element baru di akhir array)
corruptorName.pop();
console.log(corruptorName);

// MAP => Method untuk memanipulasi bentuk elemen di sebuah array
const scores = [50, 75, 90];
const scoresAfterBonus = scores.map((value, index, array) => {
  return value + 10;
});
console.log(scoresAfterBonus);
/*
let arrayResult = []

Loop Pertama
1. value = 50
2. index = 0
3. array = [50, 75, 90]
4. return 50 + 10 => return 60;
5. arrayResult = [60]

Loop Kedua
1. value = 75
2. index = 1
3. array = [50, 75, 90]
4. return 75 + 10 => return 85;
5. arrayResult = [60, 85]

Loop Ketiga
1. value = 90
2. index = 2
3. array = [50, 75, 90]
4. return 90 + 10 => 100
5. arrayResult = [60, 85, 100]
*/

// FILTER => Method untuk memfilter jumlah elemen di sebuah array
const points = [10, 20, 5, 100];
const pointsMoreThan20 = points.filter((value, index, array) => {
  if (value >= 20) {
    return true;
  } else {
    return false;
  }
});
console.log(pointsMoreThan20);
/*
let arrayResult = []

Loop Pertama
1. value = 10
2. 10 >= 20 = false
3. arrayResult = []

Loop Kedua
1. value = 20
2. 20 >= 20 = true
3. arrayResult = [20]

Loop Ketiga
1. value = 5
2. 5 >= 20 = false
3. arrayResult = [20]

Loop Keempat
1. value = 100
2. 100 >= 20 = true
3. arrayResult = [20, 100]
*/

// SORT => Sorting/mengurutkan urutan sebuah array
const ages = [10, 5, 11];
const sortedAges = ages.sort((a, b) => {
  return a - b;
});
console.log(sortedAges);
/*
Loop Pertama
1. a = 10
2. b = 5
3. a - b => 10 - 5 = 5 (positive)
4. [5, 10, 11]

Loop Kedua
1. a = 10
2. b = 11
3. a - b => 10 - 11 = -1 (negative)
4. [5, 10, 11]
*/

/* --------------------------------- Object --------------------------------- */

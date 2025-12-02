/*
if => keyword untuk membuat kondisi
() => tempat untuk menaruh perbandingan/hasil kondisinya
{} => tempat untuk menaruh kode yang akan dijalankan ketika kondisinya benar (true)
else if () {} => () untuk kondisi | {} kode yang akan dijalankan ketika kondisinya benar (true)
else {} => tempat untuk menaruh kode yang akan dijalankan ketika kondisinya salah (false)
*/
const favoriteParty = "Nasdem";

if (favoriteParty === "PDIP") {
  console.log("Merah");
} else if (favoriteParty === "Golkar") {
  console.log("Kuning");
} else if (favoriteParty === "Demokrat") {
  console.log("Biru");
} else {
  console.log("Hitam");
}

const isUserLoggedIn = true;
if (isUserLoggedIn === true) {
  // Arahkan/redirect ke dashboard page
} else {
  // Arahkan/redirect ke login page
}

//splice:
let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
buah.splice(2,0,"Anggur","Jambu");
console.log(buah);

//concat:
let sayur = ["Terong", "Tomat", "Bayam"];
let biji = ["Kacang almond", "Kedelai", "Kacang tanah", "kacang merah"];
let makanan = sayur.concat (sayur,biji);
console.log(makanan);

//slice:
let cemilan = ["Kripik Udang", "Kripik Jamur", "Permen", "Coklat", "Kue"];
let cemilanAsin = cemilan.slice(0,3);
let cemilanManis = cemilan.slice(3);
console.log(cemilanAsin);
console.log(cemilanManis);

//sort:
let mobil = ["Terra", "X-Trail", "March", "Ertiga", "Avanza"];
mobil.sort();
console.log(mobil);

let angka = [30, 1, 2, 3.5, 10, 95, 11];
let urutDariTerkecil = function(a, b) {
  return a - b;
};
let urutDariTerbesar = function(a, b) {
  return b - a;
};
console.log(angka.sort(urutDariTerkecil)); 
console.log(angka.sort(urutDariTerbesar)); 

//reverse:
let buah1 = ["Jeruk", "Apel", "Jambu", "Mangga"];
buah1.sort().reverse();
console.log(buah1);<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML JavaScript</title>
    <script src="index.js"></script>
</head>
<body>
    <h1>Exercise Array JS</h1>
    <h1>Array JavaScript (Continued)</h1>
 
</body>
</html>
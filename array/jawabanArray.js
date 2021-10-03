/** Soal 1
Tampilkan sesuai hasil berikut :

```javascript
let watches = ['Swiss Army','Dublot','Alba'];

// Result -> Saya punya Swiss Army, Dublot, dan Alba.
```
*/
console.log("Jawaban Soal Nomer 1");
let watches = ['Swiss Army','Dublot','Alba'];
console.log("Saya punya " + watches[0] + ", " + watches[1] + ", dan " + watches[2]);
console.log("");
/** ## Soal 2
Uraikan kata dari kalimat lalu masukkan ke dalam array

```javascript
let pantun = "makan nasi bayar pake paku"

// Result -> ["makan","nasi","bayar","pake","paku"]
``` 
*/
let pantun = "makan nasi bayar pake paku";

let pisah = pantun.split(" ");
console.log("Jawaban Soal Nomer 2");
console.log(pisah);
console.log("");
/** ## Soal 3
Kelompokkan buah sesuai abjad dari A - Z
```javascript
   //Input : ['blueberry','apple','orange','anggur','banana']
   /*Output : [
       ['anggur','apple'],
       ['banana','blueberry'],
       ['orange']
   ] 
``` */

let fruit = ['blueberry','apple','orange','anggur','banana'];

let fruits = fruit.sort();
console.log("Jawaban Soal Nomer 3");
console.log(fruits);
console.log("");

/** Soal 4
Cari determinan matrix
```javascript
let matrix = [
    [1,2],
    [3,4]
]

// Rumus Determinan Matrix = a.d - b.c dengan matrix sebagai berikut
/*
    A = | a b |
        | c d |
 * 

``` */
let matrix = [
    [1,2],
    [3,4]
]

let determinan = matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0];

console.log("Jawaban Soal Nomer 4");
console.log(determinan);
console.log("");

/* ## Soal 5
Gabungkan karakter menjadi sebuah kata

```javascript
let kode = [
    [" "," ","M"," "," "],
    [" "," "," ","a"," "],
    [" "," "," "," "," "],
    [" ","k"," "," "," "],
    [" "," "," "," "," "],
    [" "," "," "," ","a"],
    [" "," "," ","n"," "],

]
// Result -> Makan
``` */
let kode = [
    [" "," ","M"," "," "],
    [" "," "," ","a"," "],
    [" "," "," "," "," "],
    [" ","k"," "," "," "],
    [" "," "," "," "," "],
    [" "," "," "," ","a"],
    [" "," "," ","n"," "],
]

let kata='';

for(let i=0; i<7; i++){
    for(let j=0; j<5; j++){
        if (kode[i][j] != " "){
            kata += kode[i][j];
        }
    }
}
console.log("Jawaban Soal Nomer 5");
console.log(kata);
console.log("");


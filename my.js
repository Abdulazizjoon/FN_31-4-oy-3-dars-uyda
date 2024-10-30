//1-misol
// let a=5
// if (a>0) {
//     console.log('a soni musbet');
// }

//2-misol
// let a = +prompt('son kiriting')
// if (a%2==1) {
//     console.log(`${a} soni toq`);
// } else {
//     console.log(`${a} soni juft`);
// }

//3-misol
// let a = +prompt('son kiriting')
// if (a%2==0) {
//     console.log(`${a} soni juft`);
// } else {
//     console.log(`${a} soni toq`);
// }

//4-misol
// let a = +prompt("son kiriting");
// let b = +prompt("son kiriting");

// if (a > 2 && b < 3) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//5-misol
// let a = +prompt("son kiriting");
// let b = +prompt("son kiriting");

// if (a >= 2 || b < -2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//6-misol
// let a = +prompt("son kiriting");
// let b = +prompt("son kiriting");
// let c = +prompt("son kiriting");

// if (a <= b <= c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//7-misol
// let a = +prompt("son kiriting");
// let b = +prompt("son kiriting");
// let c = +prompt("son kiriting");

// if (a < b < c || c < b < a) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//8-misol
// let a = +prompt("son kiriting");
// let b = +prompt("son kiriting");

// if (a % 2 == 1 && b % 2 == 1) {
//   console.log(`${a} va ${b} ssonlari toq son`);
// } else {
//   console.log(`${a} va ${b} ssonlari toq son emas`);
// }

//9-misol
// let a = +prompt("son kiriting");
// let b = +prompt("son kiriting");

// if (a % 2 == 1 || b % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//10-misol
// let a = 5;
// let b = 6;

// if ((a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//11-misol
// let a = 5;
// let b = 6;

// if ((a % 2 == 1 && b & (2 == 1)) || (a % 2 == 0 && b % 2 == 0)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//12-misol
// let a = 5;
// let b = 6;
// let c = 7;

// if (a > 0 && b > 0 && c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//13-misol
// let a = 5;
// let b = 6;
// let c = 7;

// if (a > 0 || b > 0 || c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//14-misol
// let a = 5;
// let b = 6;
// let c = 7;

// if (
//   (a > 0 && b < 0 && c < 0) ||
//   (a < 0 && b > 0 && c < 0) ||
//   (a < 0 && b < 0 && c > 0)
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//16-misol
// let a = +prompt('son kiriting');

// if (a > 9 && a % 2 == 0) {
//   console.log(`{a} soni ikki honali va juft son`);
// } else {
//   console.log(`{a} soni ikki honali son emas`);
// }

//17-misol
// let a = +prompt("son kiriting");

// if (a > 99 && a % 2 == 1) {
//   console.log(`{a} soni uch honali va toq son`);
// } else {
//   console.log(`{a} soni ikki honali son emas`);
// }

//20-misol

// let son = +prompt("son kiriting");

// let birlar = num % 10;
// let onlar = ((son - birlar) / 10) % 10;
// let yuzlar = (son - (son % 100)) / 100;

// let res = false;
// if (birlar != onlar && birlar != yuzlar && onlar != yuzlar) {
//     res=true
// }

//22-misol

let son = +prompt("son kiriting");

let birlar = son % 10;
let onlar = Math.trunc(son/10)%10
let yuzlar = Math.trunc(son%100)/10
let minglar= Math.trunc(son%1000) /10

if (birlar==yuzlar&& onlar==minglar) {
  console.log(son);
} else {
    console.log(false);
}

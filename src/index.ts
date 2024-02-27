export {};

// // Type 'void' is not assignable to type in TypeScript

// EXAMPLE 1 - Make sure to return a value from your function

const sum = (a: number, b: number) => {
  const result = a + b;

  return result; // 👈️ explicitly return
};

const num: number = sum(50, 50);

console.log(num); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 2 - Using implicit arrow function return

// // 👇️ implicit return with objects
// const getObj = () => ({
//   name: 'Bobby Hadz',
//   country: 'Chile',
// });

// // 👇️ implicit return with primitives
// const getNum = (a: number, b: number) => a + b;

// ---------------------------------------------------

// Argument type 'void' is not assignable to parameter of type

// // EXAMPLE 3 - Make sure to return a value from the function

// // 👇️ function sum(a: number, b: number): number
// function sum(a: number, b: number) {
//   const result = a + b;

//   return result; // 👈️ explicitly return
// }

// function getNumber(num: number) {
//   return num;
// }

// console.log(getNumber(sum(10, 10))); // 👉️ 20

// ---------------------------------------------------

// // EXAMPLE 4 - Using arrow function implicit return

// // 👇️ implicit return of object 👇️
// const getPerson = () => ({
//   name: 'Bobby Hadz',
//   language: 'TypeScript',
// });

// // 👇️ implicit return 👇️
// const sum = (a: number, b: number): number => a + b;

// function getNumber(num: number) {
//   return num;
// }

// console.log(getNumber(sum(10, 10))); // 👉️ 20

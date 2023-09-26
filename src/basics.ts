// Primitives: numbers, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;

age = 12;

let userName: string;

userName = 'Joel';

let isInstructor: boolean;

isInstructor = true;

// More complex types
let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Joel',
  age: 40,
};

// person = {
//   isEmployee: true
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = 'React - The Complete Guide';

// course = 12341;

// Union types

let courseNew: string | number = 'React - The Complete Guide';

courseNew = 12341;

// Functions & types
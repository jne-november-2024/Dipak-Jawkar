// Problem 1: Filter and Map Combination

// You are given an array of objects where each object represents a person with the properties name, age, and salary. Your task is to:
// Filter the array to include only people who are older than 30.
// Map over the filtered array to return a new array containing a tuple (represented as an array in JavaScript) with the person's name and their salary increased by 10%.
// Return the new array of tuples.

const data = [
    { name: "Alice", age: 28, salary: 50000 },
    { name: "Bob", age: 35, salary: 70000 },
    { name: "Charlie", age: 40, salary: 80000 },
    { name: "Diana", age: 25, salary: 60000 }
];

// result
// [
//     ['Bob', 77000],
//     ['Charlie', 88000]
//   ]
  

  const result = data.filter(val => val.age > 30).map(val => [val.name , val.salary])
  console.log(result)




//   Problem 2: Map and Filter with String Manipulation
// Difficulty: Medium

// Problem Statement: You are given an array of words. Your task is to:

// Filter the array to include only words that have more than 3 characters.
// Map over the filtered array to convert each word to uppercase.
// Return the new array of transformed words.

// result

// ['APPLE', 'BANANA', 'GRAPE']

const words = ["apple", "at", "banana", "kiwi", "grape"];

const res2 = words.filter(val=>val.length > 3).map((val)=>val.toUpperCase())

console.log(res2)





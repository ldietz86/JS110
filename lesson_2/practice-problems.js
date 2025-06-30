//1. Order the following array of number strings by descending numeric value:

let arr = ["10", "11", "9", "7", "8"];

let sorted = arr.sort((a, b) => b - a);

console.log(sorted); // ['11', '10', '9', '8', '7']

/*
The above solution relies on coercion performed by the subtraction operator.
sort() orders strings lexicographically by default. If the elements were not coerced to numbers, we would get: ['10', '11', '7', '8', '9']. 
Better to be explicit: let sorted = arr.sort((a, b) => Number(b) - Number(a));
*/

//2. Order the following array of objects based on the year of publication of each book, from the earliest to the latest.
let books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    published: "1967",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
  },
  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
  { title: "Ulysses", author: "James Joyce", published: "1922" },
  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
];

let orderByDate = books.sort(
  (a, b) => Number(a.published) - Number(b.published)
);

//3. For each of these collections, access the letter g.

let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
arr1[2][1][3];

let arr2 = [
  { first: ["a", "b", "c"], second: ["d", "e", "f"] },
  { third: ["g", "h", "i"] },
];
arr2[1].third[0];

let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
arr3[2].third[0][0];

let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
obj1.b[1];

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
Object.keys(obj2.third).toString();
//Object.keys(obj2.third)[0];

//4. For each of these collection objects, change the value 3 to 4.
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
arr1; // => [ 1, [ 2, 4 ], 4 ]

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
arr2; // => [ { a: 1 }, { b: 2, c: [ 7, 6, 5 ], d: 4 }, 4 ]

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
obj1; // => { first: [ 1, 2, [ 4 ] ] }

let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;
obj2; // => { a: { a: [ '1', 'two', 4 ], b: 4 }, b: 5 }

//5. Compute and display the total age of the male members of the family.
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member].gender === "male") {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge);

//Using Object.values
let memberDetails = Object.values(munsters); // [{age: 32, gender: 'male'}, {age: 30, gender: 'female'}, ...]
let totalMaleAge = 0;

memberDetails.forEach((member) => {
  if (member.gender === "male") {
    totalMaleAge += member.age;
  }
});

console.log(totalMaleAge);

//6. print the name, age, and gender of each family member in the munsters object.
let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

for (let member in munsters) {
  console.log(
    `${member} is a ${munsters[member]?.age}-year-old ${munsters[member]?.gender}`
  );
}

//Alternative solution using destructuring
for (let member in munsters) {
  const { age, gender } = munsters[member];
  console.log(`${member} is a ${age}-year-old ${gender}`);
}

//LS solution using Object.entries
Object.entries(munsters).forEach((entry) => {
  let name = entry[0];
  let age = entry[1]["age"];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

//7. What will the final values of a and b be?
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

//The final value of a is 2 and the final value of b is [3, 8]

//8. Using the forEach method, write some code to output all vowels from the strings in the arrays.
let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

let outerArr = Object.values(obj);

outerArr.forEach((innerArr) => {
  innerArr.forEach((word) => {
    let chars = word.split("");
    chars.forEach((char) => {
      if ("aeiou".includes(char)) {
        console.log(char);
      }
    });
  });
});

//9. Return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

let sortedArr = arr.map((subArr) => {
  if (typeof subArr[0] === "number") {
    return subArr.slice().sort((a, b) => Number(a) - Number(b));
  } else {
    return subArr.slice().sort(); //use the sort method to make a shallow copy of the subarrays
  }
});

console.log(sortedArr); // => [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]

//10. Sort the elements in descending order.
let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

let sortedArr = arr.map((subArr) => {
  if (typeof subArr[0] === "number") {
    return subArr.slice().sort((a, b) => Number(b) - Number(a));
  } else {
    return subArr.slice().sort((a, b) => b.localeCompare(a));
  }
});

console.log(sortedArr);

//LS solution
arr.map((subArray) => {
  return subArray.slice().sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
  });
});

// => [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]

//11. Use the map method to return a new array identical in structure to the original but, with each number incremented by 1.
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let incremented = arr.map((obj) => {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key] + 1;
  }

  return newObj;
});

console.log(incremented); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

//Using Object.fromEntries and Object.entries
let incremented = arr.map((obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, value + 1])
  );
});

console.log(incremented);

//12. Create a deep copy of the following array.
const arr = [
  ["b", "c", "a"],
  ["blue", "black", "green"],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let deepCopy = JSON.parse(JSON.stringify(arr));
// deepCopy[0][0] = 'B' only modifies the deepCopy arr, not the original arr

//13. Create a deep copy of the following nested object.
const deepCopy = {};

for (let prop in truthiness) {
  deepCopy[prop] = [...truthiness[prop]];
}

/*
JSON cannot be used for this problem because it treats undefined and NaN as null.

let deepCopy = JSON.parse(JSON.stringify(truthiness));

console.log(deepCopy) // { falsy: [ null, null, '', false, null, 0 ], truthy: [ 'everything else...' ] }
*/

//14. Return a new array using filter() that is identical in structure to the original, but containing only the numbers that are multiples of 3.
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiples = arr.map((subArr) => {
  return subArr.filter((num) => num % 3 === 0);
});

console.log(multiples); // => [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]

//15. Sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

arr.sort((a, b) => {
  let oddSumA = a
    .filter((num) => num % 2 === 1)
    .reduce((sum, next) => sum + next);
  let oddSumB = b
    .filter((num) => num % 2 === 1)
    .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});

//16. Return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.
let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

let result = [];

Object.entries(obj).forEach((entry) => {
  if (entry[1].type === "fruit") {
    let colorsArr = entry[1].colors;
    result.push(
      colorsArr.map((color) => color.slice(0, 1).toUpperCase() + color.slice(1))
    );
  } else if (entry[1].type === "vegetable") {
    result.push(entry[1].size.toUpperCase());
  }
});

console.log(result); //[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

//LS solution
let capitalize = (word) => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map((attributes) => {
  if (attributes["type"] === "fruit") {
    return attributes["colors"].map((char) => capitalize(char));
  } else {
    return attributes["size"].toUpperCase();
  }
});

//17. Write some code to return an array which contains only the objects where all the numbers are even.
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter((obj) => {
  return Object.values(obj).every((subArr) => {
    return subArr.every((num) => num % 2 === 0);
  });
});

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]

//18. Write some code that defines an object where the key is the first item in each subarray, and the value is the second.
let arr = [
  ["a", 1],
  ["b", "two"],
  ["sea", { c: 3 }],
  ["D", ["a", "b", "c"]],
];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let obj = {};
arr.forEach((subArr) => {
  let key = subArr[0];
  let value = subArr[1];
  obj[key] = value;
});

//Using Object.fromEntries
Object.fromEntries(arr);

//19. For this problem, you are tasked with creating a deep copy of the munsters object, whose nested objects cannot be altered.
let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
}

//LS solution
const munstersIndestructible = JSON.parse(
  JSON.stringify(munsters),
  (munster, info) => Object.freeze(info)
);

/*
20. A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. 
It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38. Each UUID consists of 32 hexadecimal characters 
(the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
Write a function that takes no arguments and returns a string that contains a UUID.
*/

function randomSection(length = 12) {
  const characters = "0123456789abcdef";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

function generateUUID() {
  const sections = [8, 4, 4, 4, 12];
  return sections.map((length) => randomSection(length)).join("-");
}

generateUUID();

//LS solution
function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let sections = [8, 4, 4, 4, 12];

  let uuid = "";
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += "-";
    }
  });

  return uuid;
}

generateUUID(); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
generateUUID(); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
generateUUID(); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'

//21. Identify the higher-order functions and callbacks in this code.
function scream(message, helper) {
  const shout = () => message.toUpperCase();

  return helper(shout());
}

const exclamate = (str) => str + "!!!";

const foo = ["heLp", "Boo", "arGH", "Oh no"];
const FOO = foo.map((word) => scream(word, exclamate));

/*
Higher-order functions: scream and map.
Callback functions: exclamate, (word) => ... anonymous function passed to map.
*/

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

let sortedArr = arr.map((nestedArr) => {
  if (typeof nestedArr[0] === "number") {
    return nestedArr.slice().sort((a, b) => Number(a) - Number(b));
  } else {
    return nestedArr.slice().sort(); //use the sort method to make a shallow copy of the subarrays
  }
});

console.log(sortedArr); // => [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]

//10. Sort the elements in descending order.
let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

let sortedArr = arr.map((nestedArr) => {
  if (typeof nestedArr[0] === "number") {
    return nestedArr.slice().sort((a, b) => Number(b) - Number(a));
  } else {
    return nestedArr.slice().sort((a, b) => b.localeCompare(a));
  }
});

console.log(sortedArr);

//LS solution
arr.map(subArray => {
  return subArray.slice().sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
  });
});

// => [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]

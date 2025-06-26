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

let orderByDate = books.sort((a,b) => Number(a.published) - Number(b.published));

//3. For each of these collections, access the letter g.

let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
arr1[2][1][3]

let arr2 = [
  { first: ["a", "b", "c"], second: ["d", "e", "f"] },
  { third: ["g", "h", "i"] },
];
arr2[1].third[0]

let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
arr3[2].third[0][0]

let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
obj1.b[1]

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
Object.keys(obj2.third).toString()
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


// 1. What is the return value of the filter method call below? Why?

[1, 2, 3].filter((num) => "hi");

/*
The filter method call returns true. The filter method will examine the return value of the callback function and return true if the return value is truthy. 
In this case, the return value of the callback is 'hi' and since non-empty strings are truthy, the filter method will return [1, 2, 3].
*/

// 2. What is the return value of map in the following code? Why?
[1, 2, 3].map((num) => {
  num * num;
});

/*
The return value of map is [undefined, undefined, undefined] because the callback function is missing a return statement. When using curly braces in an arrow function,
you must explicitly use the return statement to return a value; otherwise, the function will implicitly return undefined. 
*/

// 3. The following code differs slightly from the above code. What is the return value of map in this case? Why?
[1, 2, 3].map((num) => num * num);

/*
The return value of map is a new array: [1, 4, 9]. This time, the callback function consists of a single expression without curly braces, so the return keyword can be omitted.
The expression after => is immediately returned.
*/

// 4. What is the return value of the following statement? Why?
["ant", "bear", "caterpillar"].pop().length;

/*
pop is a destructive method that removes the last element from an array and returns that element.
'caterpillar'.length // => 11 
*/

// 5. What is the callback's return value in the following code? Also, what is the return value of every in this code?
[1, 2, 3].every((num) => {
  return (num = num * 2);
});

/*
The callback function returns 2, 4 6 and the every method returns true. The callback function is reassigning each number in the array to num * 2. 
This operation returns the new value, and since numbers are truthy values, the every method returns true.
*/

// 6. How does Array.prototype.fill work? Is it destructive? How can we find out?
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5); //[ 1, 1, 1, 1, 1 ]

/*
Array.prototype.fill() is a destructive method that fills the elements of an array with a static value. To check if this method is destructive, you can log the original array.
The fill method accepts three arguments: the value to fill the array with, the start index (optional) and the end index (optional).

fill(value, start, end)
*/

// 7. What is the return value of map in the following code? Why?
["ant", "bear"].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});

/*
The return value of map is a new array: [undefined, 'bear']. The map method iterates over each element in the array and applies the callback.
If elem.length > 3, the callback function returns the element, which gets added to the new array. The callback returns undefined for elements that don't meet this condition.
The map method always returns an array that is the same length as the original array it was called on.
*/

// 8. Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:
//Using forEach()
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

console.log(flintstonesObj); // => { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

//Using Object.entries()
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = Object.fromEntries(
  flintstones.map((name, index) => [name, index])
);

console.log(flintstonesObj); // => { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// 9. Add up all of the ages from the Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let sumOfAges = Object.values(ages).reduce(
  (acc, currentVal) => acc + currentVal
);
console.log(sumOfAges); // 6174

//LS solution
let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges; // => 6174

// 10. Pick out the minimum age from our current Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

// Using Math.min()
let minAge = Math.min(...Object.values(ages));
console.log(minAge); // 10

//Using a for loop
let arrOfAges = Object.values(ages);
let minAge = arrOfAges[0];

for (let i = 1; i < arrOfAges.length; i++) {
  if (arrOfAges[i] < minAge) {
    minAge = arrOfAges[i];
  }
}

console.log(minAge); // 10

//Using reduce()
let minAge = Object.values(ages).reduce((min, age) => {
  return age < min ? age : min;
});

console.log(minAge); // 10

// 11. Create an object that expresses the frequency with which each letter occurs in this string:
let statement = "The Flintstones Rock";

//Using forEach()
let letterFrequency = {};

statement.split("").forEach((char) => {
  if (char !== " ") {
    letterFrequency[char] = letterFrequency[char] || 0;
    letterFrequency[char] += 1;
  }
});

console.log(letterFrequency); // => { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

//Using a for/of loop
let letterFrequency = {};

for (let char of statement) {
  if (char !== " ") {
    letterFrequency[char]
      ? letterFrequency[char]++
      : (letterFrequency[char] = 1);
  }
}

console.log(letterFrequency); // => { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

//LS solutions
let charsInStatement = statement.split("").filter((char) => char !== " ");
let result = {};

charsInStatement.forEach((char) => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);

// Using an if...else statement
let charsInStatement = statement.split("").filter((char) => char !== " ");
let result = {};

charsInStatement.forEach((char) => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});

//Using a for loop
let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === " ") continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}
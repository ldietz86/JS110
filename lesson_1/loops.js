//Iterating with for and while Loops

while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log("Exiting...");
    break;
  }
}

/*
Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive).

Math.floor(10 * Math.random()) gives you a floating-point number between 0 and 9.

Math.floor() rounds down to the largest integer that is less than or equal to a given value.

The floored integer is logged to the console. If the integer === 5, Exiting... is logged to the
console and a break statement is used to exit out of the loop.
*/
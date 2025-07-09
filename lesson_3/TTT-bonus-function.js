/*
Write a function joinOr that takes an array of numbers, an optional delimeter and optional last word
and returns a single string. The delimeter will be used to join each element in the array.
The word will be used to join the last two elements in the array.

Inputs: Array of elements (numbers), Delimeter (default = ", "), Word (default = "or")
Outputs: A single string
 
joinOr([1, 2, 3]); // => "1, 2, or 3"
joinOr([1, 2, 3], "; "); // => "1; 2; or 3"
joinOr([1, 2, 3], ", ", "and"); // => "1, 2, and 3"
joinOr([]); // => ""
joinOr([5]); // => "5"
joinOr([1, 2]); // => "1 or 2"

If the length of the array is equal to 0 (empty) return an empty string. If the array contains one element, return that element as a string.
If the array contains two elements, join the elements with the specified word. If the array contains more than two elements, join all elements 
besides the last one using the delimeter and then add the specified word before the final element.
*/

function joinOr(arr, delimiter = ", ", word = "or") {
  let len = arr.length;

  if (len === 0) return "";
  if (len === 1) return `${arr[0]}`;
  if (len === 2) return arr.join(` ${word} `);

  return `${arr.slice(0, -1).join(delimiter)}${delimiter}${word} ${
    arr[arr.length - 1]
  }`;
}

//LS solution
function joinOr(arr, delimiter = ", ", word = "or") {
  switch (arr.length) {
    case 0:
      return "";
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return (
        arr.slice(0, arr.length - 1).join(delimiter) +
        `${delimiter}${word} ${arr[arr.length - 1]}`
      );
  }
}

joinOr([1, 2, 3]); // => "1, 2, or 3"
joinOr([1, 2, 3], "; "); // => "1; 2; or 3"
joinOr([1, 2, 3], ", ", "and"); // => "1, 2, and 3"
joinOr([]); // => ""
joinOr([5]); // => "5"
joinOr([1, 2]); // => "1 or 2"

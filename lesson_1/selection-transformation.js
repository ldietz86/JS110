//Write a function selectFruit that selects the key-value pairs where the value is ‘Fruit’
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
 let fruitsObj = {};
 for(let prop in obj) {
  if(obj[prop] === "Fruit") {
   fruitsObj[prop] = obj[prop];
  }
 }
 return fruitsObj;
}

selectFruit(produce); // {apple: 'Fruit', pear: 'Fruit'}

//LS solution:
function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}

// Select generic produce types: 
function selectType(produceList, selectionCriterion) {
  let produceKeys = Object.keys(produceList);
  let selectedItems = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    // used to be (currentValue === 'Fruit')
    if (currentValue === selectionCriterion) {
      selectedItems[currentKey] = currentValue;
    }
  }

  return selectedItems;
}

selectType(produce, 'Fruit');     // => {apple: 'Fruit', pear: 'Fruit'}
selectType(produce, 'Vegetable'); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
selectType(produce, 'Meat');      // => {}
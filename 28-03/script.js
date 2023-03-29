// task1

function doubledNumbersWithPush(arr) {
  const doubledNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    doubledNumbers.push(arr[i] * 2);
  }
  return doubledNumbers;
}

console.log(doubledNumbersWithPush([1, 2, 3])); // [2, 4, 6]
console.log(doubledNumbersWithPush([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8]
console.log(doubledNumbersWithPush([2, 2, 2, 2, 2, 2])); // [4, 4, 4, 4, 4, 4]


// task2

function myFunc(element, size) {
  const newArray = new Array(size).fill(element);
  return newArray;
}
const filledArray = myFunc('a', 3);
console.log(filledArray); // ['a', 'a', 'a']

// task3

// Using if...else
function compareNumbers1(x, y) {
  if (x > y) {
    return 1;
  } else if (x < y) {
    return -1;
  } else {
    return 0;
  }
}
console.log(compareNumbers1(30, 10)); // 1
console.log(compareNumbers1(10, 30)); // -1
console.log(compareNumbers1(20, 20)); // 0

// с помощью тернарного оператора
function compareNumbers2(x, y) {
  return x > y ? 1 : x < y ? -1 : 0;
}

console.log(compareNumbers2(30, 10)); // 1
console.log(compareNumbers2(10, 30)); // -1
console.log(compareNumbers2(20, 20)); // 0

// в виде стрелочной функции
  const compareNumbers3 = (x, y) => x > y ? 1 : x < y ? -1 : 0;

console.log(compareNumbers3(30, 10)); // 1
console.log(compareNumbers3(10, 30)); // -1
console.log(compareNumbers3(20, 20)); // 0

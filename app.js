/*
same([1,2,3],[4,1,9]) must be true
same([1,2,3],[1,8]) must be false
same([1,2,1],[4,4,1]) must be false
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  arr1.forEach((item) => {
    obj1[item] = obj1[item] + 1 || 1;
  });

  arr2.forEach((item) => {
    obj2[item] = (obj2[item] || 0) + 1;
  });

  console.log("obj1 >", obj1);
  console.log("obj2 >", obj2);

  //check if the frequency of keys are same
  let accumulator = true;
  for (const key in obj1) {
    accumulator =
      accumulator && key ** 2 in obj2 && obj1[key] === obj2[key ** 2];
  }
  return accumulator;
}

console.log("Frequency counter pattern log: ", same([9], [81, 81]));

//Anagram

function validAnagram(string1, string2) {
  if (string1.length !== string1.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  for (const character of string1) {
    obj1[character] = (obj1[character] || 0) + 1;
  }

  for (const character of string2) {
    obj2[character] = (obj2[character] || 0) + 1;
  }

  for (const character in obj1) {
    if (obj1[character] !== obj2[character]) {
      return false;
    }
  }
  return true;
}

console.log("anagram function log: ", validAnagram("cinema", "iceman"));

//finding the pair that sums to zero in a sorted array

function findThePairThatSumsToZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

console.log(
  "Found the pair that sums to zero: ",
  findThePairThatSumsToZero([-5, 1, 2, 3, 4, 5, 6, 7, 8])
);

//counting unique values of a number array

function countUniqueValuesInThisArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }
  let leftPointer = 0;
  for (let rightPointer = 1; rightPointer < arr.length; rightPointer++) {
    if (arr[leftPointer] !== arr[rightPointer]) {
      leftPointer++;
      arr[leftPointer] = arr[rightPointer];
    }
  }
  return leftPointer + 1; //cause index starts at zero
}

console.log(
  "The number of unique values in this array is: ",
  countUniqueValuesInThisArray([1, 2, 2, 2, 2, 3, 3, 3])
);

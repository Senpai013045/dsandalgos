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
//sliding window pattern
/*
calculate the maxSubarraySum
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
*/

function maxSubarraySum(numberArray, numberOfConsecutiveValues) {
  //edge case first
  if (numberOfConsecutiveValues > numberArray.length) {
    return null;
  }

  let maximumSum = 0;
  let temporarySum = 0;

  for (let i = 0; i < numberOfConsecutiveValues; i++) {
    //i<numberOfConsecutiveValue cause array are 0 indexed
    temporarySum += numberArray[i];
  }
  maximumSum = temporarySum;

  for (let i = numberOfConsecutiveValues; i < numberArray.length; i++) {
    temporarySum =
      temporarySum +
      numberArray[i] -
      numberArray[i - numberOfConsecutiveValues];
    maximumSum = Math.max(temporarySum, maximumSum);
  }
  return maximumSum;
}

console.log(
  "The largest consecutive sum log: ",
  maxSubarraySum([1, 8, 1, 2, 3, 5, 2, 0], 2)
);

//recursive function

function addAllNumbersBetweenOneTo(n) {
  if (n === 1) return 1;
  return n + addAllNumbersBetweenOneTo(n - 1);
}

console.log(
  "The sum of all numbers between 1 to 5 is",
  addAllNumbersBetweenOneTo(5)
);

//visual explainination
/*
addAllNumbersBetweenOneTo(5)

is 5 equal to 1? no so keep going

return 5 + addAllNumbersBetweenOneTo(4)

is 4 equal to 1? no so keep going

return 4 + addAllNumbersBetweenOneTo(3)

is 3 equal to 1? no so keep going

return 3 + addAllNumbersBetweenOneTo(2)

is 2 equal to 1? no so keep going

return 2 + addAllNumbersBetweenOneTo(1)

is 1 equal to 1? Yes! so return 1

return 2 + 1

//lets see one simple example

we now know addAllNumbersBetweenOneTo(1) = 1

addAllNumbersBetweenOneTo(2)= 2 + addAllNumbersBetweenOneTo(2-1) 
                            = 2+1
                            = 3

addAllNumbersBetweenOneTo(3)= 3 + addAllNumbersBetweenOneTo(3-1) 
                            = 3 + addAllNumbersBetweenOneTo(2) 
                            = 3 + 3
                            = 6

//you can work your way upwards in this way
*/

//recursive factorial function

function recursiveFactorial(n) {
  //base case of 1
  if (n === 1) return 1;
  //changing input
  return n * recursiveFactorial(n - 1);
}

console.log(
  "Factorial of 5 using recursive function is: ",
  recursiveFactorial(5)
);

//helper method recursion

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    //slice returns a new array with elements starting from given index and not including the second index given(this is optional for copying all values except the one before certain index)
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(
  "The odd values found using helper method recursion: ",
  collectOddValues([1, 2, 3, 4, 5, 6, 7])
);

//pure recursive way

function collectOddValuesThePureRecursionWay(arr) {
  //this collects the values returned but remember that it will reset every function call
  let collector = [];

  //is input is empty array, break out of this recursion
  if (arr.length === 0) {
    return collector;
  }

  //checking if the first number is odd and pushing it to collector
  if (arr[0] % 2 !== 0) {
    collector.push(arr[0]);
  }

  //now,the second important thing in recursion is to call the same function with different input but making sure the input hits the base case
  //we have to use something that wont mutate the input ( so .splice(),.push(),.pop() are a no no!!!)
  return collector.concat(collectOddValuesThePureRecursionWay(arr.slice(1)));
  //.concat() returns a new array, so does .slice()
}

console.log(
  "Odd values collected through pure recursion: ",
  collectOddValuesThePureRecursionWay([1, 2, 3])
);

//Visual represantation

/*
  collectOddValuesThePureRecursionWay([1,2,3]);

  is input's length 0? > no!

  is the first value odd > yes!

  collector=[1] //since we pushed the first value

  collector.concat(collectOffValuesThePureRecursionWay([2,3]))

  [1].concat(collectOffValuesThePureRecursionWay([2,3]))
              is input empty? > no!
              is 2 odd? > no!
              collection in this instance is [] //empty
              [].concat(collectOffValuesThePureRecursionWay([3])
                        is input empty? > no
                        is 3 odd? > yes
                        collector in this instance is [3]
                        [3].concat(collectOffValuesThePureRecursionWay([])
                                    is input empty? >yes
                                    return []

  final calculation : [1].concat([].concat([3].concat([])))      
  >[1,3]                        
  

  */

//challenge problem

function power(base, exponent) {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
}

console.log("The base of 3 and exponent of 3 results: ", power(3, 3));

//product of array challenge

function productOfArray(arr) {
  let collector = 0;

  if (arr.length === 0) return collector;

  collector += arr[0];

  return collector + productOfArray(arr.slice(1));
}

console.log("the product of [1,2,3,4,5] is: ", productOfArray([1, 2, 3, 4, 5]));

//searching

//linear search

function linearSearch(arr, valueToFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valueToFind) {
      return i;
    }
  }
  return -1;
}

console.log(
  "Linear searching :",
  linearSearch(["alpha", "beta", "gamma", "delta"], "gamma")
);

//binary search

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (val === arr[mid]) {
      // if found
      return mid;
    }
    if (val < arr[mid]) {
      // search left side
      end = mid - 1;
    }
    if (val > arr[mid]) {
      // search right side
      start = mid + 1;
    }
    //recalculate mid
    mid = Math.floor((start + end) / 2);
  }
  return val === arr[mid] ? mid : -1;
}

console.log(
  "Binary search: ",
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)
);

//string search naive approach

function serachString(long, short) {
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) {
        return i;
      }
    }
  }
}

console.log(
  "Finding index using linear search the naive approach: ",
  serachString("bigchungus", "gc")
);

//lets take a look at how the loop is working using the example

//bigchungus //long string
//  gc       //short string

/*
on first iteration i=0;j=0;
g===b? no, break
on second iteration i=1;j=0;
is g===i no,break
on third iteration i=2;j=0;
is g===b yes dont break, keep the inner loop running 
is j===short.length-1 no,do nothing
next iteration i=2,j=1
is c===c(long[2+1])? yes dont break
is j===short.length-1....holy poop! yes... return i then

since i=2

that's returned and the function ends and everyone's happy

else the loop goes to the end and since foundIndex=-1 is untouched....that's returned

*/

//bubble sort

//swapping function

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

function bubbleSort(arr) {
  let noSwappingDone;
  for (let i = arr.length; i > 0; i--) {
    noSwappingDone = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwappingDone = false;
      }
    }
    console.log("One iteration complete, current array status: ", arr);
    if (noSwappingDone) {
      console.log("no swapping has been done hence breaking the loop");
      break;
    }
  }
  return arr;
}

let sampleArray = [8, 1, 2, 3, 4];
console.log("---------------------------------------------------------\n");
console.log("Bubble sorting the array: ", sampleArray);
console.log("Bubble sorted: ", bubbleSort(sampleArray));
console.log("---------------------------------------------------------\n");

//selection sort

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let lowest = i;
    console.log("lowest value", arr[lowest], "initialized at index", lowest);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        console.log(
          "new lowest value",
          arr[j],
          "found at index",
          j,
          "lowest value set"
        );
        lowest = j;
      }
    }
    if (i !== lowest) {
      console.log(
        "the initial value",
        arr[i],
        "at index",
        i,
        "is found different than computed value",
        arr[lowest],
        "found at",
        lowest,
        "SWAPPING"
      );
      swap(arr, i, lowest);
    }
    console.log("Current array status: ", arr);
  }
  return arr;
}

let sampleArray2 = [3, 5, 1, 0, 9];

console.log("---------------------------------------------------------\n");
console.log("Selection sorting: ", sampleArray2);
console.log("Selection sorted: ", selectionSort(sampleArray2));
console.log("---------------------------------------------------------\n");

//insertion sort

function insertionSort(arr) {
  //assume first element is already sorted so start from index of 1

  for (let i = 1; i < arr.length; i++) {
    console.log("initialized outer loop");
    let currentValue = arr[i];
    console.log("currentValue is: ", currentValue);
    console.log(
      "condition: is the value before",
      currentValue,
      "greater?",
      arr[i - 1] > currentValue
    );
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      console.log("initialized inner loop, j: ", j);
      arr[j + 1] = arr[j];
      console.log(
        "value at index",
        j + 1 + "",
        "will be the same as value at index",
        "" + j,
        "-->",
        arr
      );
      arr[j] = currentValue;
      console.log("current value is assigned to j:", j, arr);
    }
  }
  return arr;
}

let sampleArray3 = [5, 4, 3, 6];

console.log("---------------------------------------------------------\n");
console.log("Insertion sorting: ", sampleArray3);
console.log("Insertion sorted: ", insertionSort(sampleArray3));
console.log("---------------------------------------------------------\n");

/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  //basecase: n === 1, return 1
  if (n < 0) return null;
  if (n <= 1) return 1;
  //every recursive call, reduce n by 1
  //return recursive call with new n and product
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var total = 0;
  var arrayCopy = array.slice();
  //basecase, if array is empty return total;
  if (!arrayCopy.length) return total;

  //if the length is not 0;
  //current elemeent is the first array element
  var currEle = arrayCopy.shift();
  //add that element onto our total
  if (Array.isArray(currEle)) {
    total += sum(currEle);
  } else {
    total += currEle;
  }

  total += sum(arrayCopy);
  //recursively call the next function with new array and add the total from there onto our total

  //after recursively calling through all array elements until it hits the basecase, return the final total amount
  return total;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var total = 0;
  var arrayCopy = array.slice();
  if (!arrayCopy.length) return total;

  var currEle = arrayCopy.shift();
  // console.log(currEle);
  if (Array.isArray(currEle)) {
    var innerTotal = sum(currEle);
    total += innerTotal;
  } else {
    total += currEle;
  }

  total += arraySum(arrayCopy);

  return total;
}

// var arraySum = function(array, total = 0) {
//   var arrayCopy = array.slice();
//   if (!arrayCopy.length) return total;

//   var currEle = arrayCopy.shift();
//   if (Array.isArray(currEle)) {
//     total += arraySum(currEle);
//   } else {
//     total += currEle;
//   }

//   return arraySum(arrayCopy, total);
// };

// 4. Check if a number is even.
var isEven = function(n) {
  //if it is a negative num, absolute it and then continue checking if it is even by subtracting 2 each time
  if (n < 0) n = Math.abs(n);

  if (n === 0) return true;

  var newN = n - 2;
  if (newN < 0) return false;

  return isEven(newN);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //check if n is a negative integer
    //if it is, isNEgative is true
      //also turn n to abs value
  var isNegative = false;
  if (n < 0) {
    isNegative = true;
    n = Math.abs(n);
  }

  var sum = 0;
  //basecase is if n is 0, return the sum variable
  if (n <= 1) return sum;
  sum += n - 1;
  //add n to the sum
  var newN = n - 1;
  //decrement n by one
  //recursive call function with new decremented n
  sum += sumBelow(newN);

  if (isNegative) return sum * -1;

  return sum;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var result = [];
  if (x === y) return result; //edge case if x === y, return empty array

  var nextNum;
  if (x > y) {
    nextNum = x - 1;
  } else {
    nextNum = x + 1;
  }

  if (nextNum === y) return result; //basecase if nextNum is equal to y, return the result array weve been building
  result.push(nextNum); //if not basecase, concat the next num onto our result

  var innerResult = range(nextNum, y);

  result = result.concat(innerResult);

  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //basecase if exp is 0 return product
  //determine if the exp is negative, if it is just simply multiply the exp by -1 to make it positive and make a variable marker to
  //indicate that it was previously negative
  var isNegExp = false;
  if (exp < 0) {
    isNegExp = true;
    exp = exp *-1;
  }

  if (exp === 0) return 1;

  //result will be set equal to the base * the next exponenet less
  var result = base * exponent(base, exp - 1);

  //if the exp was negative, return the inversion of the result ( 1 / result)
  if (isNegExp) {
    return (1 / result);
  }

  return result;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //basecase if n === 1, return true;
  if (n === 1) return true;
  if (n < 1) return false;

  var newN = n / 2;

  return powerOfTwo(newN);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  //basecase is when string has no more chars, return our built string
  var stringCopy = string.slice();
  var reversed = '';
  if (!stringCopy.length) return reversed;

  //one by one pop elements off of the stringcopy
  var currChar = stringCopy.slice(-1);
  stringCopy = stringCopy.slice(0,-1);

  reversed += currChar;

  var innerResult = reverse(stringCopy);
  reversed += innerResult;

  return reversed;

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //basecase is when we finish iterating through the string?
  if (string.length <= 1) return true; //if we have reached the center of the string return true;

  var newString = string.toLowerCase().split(" ").join("").split("");
  var frontEle = newString.shift();
  var backEle = newString.pop();
  newString = newString.join("");

  if (frontEle === backEle) return palindrome(newString);

  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x < 0) {
    return -modulo(-x, y);
  }

  if (y < 0) {
    return modulo(x, -y);
  }

  if (x < y) {
    return x;
  }

  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
//input: initial number to multiply, times to multiply
//output: a single number
var multiply = function(x, y) {
  if (x === 0 || y === 0) return 0;

  if (y > 0) {
    return x + multiply(x, y-1);
  } else if (y < 0) {
    return -x + multiply(x, y+1);
  }

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var chars = str.split('');
  var results = [];

  if (!chars.length) {
    return results;
  }

  results.push(chars.shift());

  results = results.concat(createArray(chars.join('')));
  return results;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var arrayCopy = array.slice(0);
  var results = [];

  if (!arrayCopy.length) {
    return results;
  }

  results.push(arrayCopy.pop());

  results = results.concat(reverseArr(arrayCopy));
  return results;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //create a new array
  var results = [];
  results.push(value);
  length--;

  //basecase
  if (length === 0) {
    return results;
  }

  var innerResults = buildList(value, length);
  results = results.concat(innerResults);

  return results;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var arrayCopy = array.slice();
  var results = [];

  if (!arrayCopy.length) {
    return results;
  }

  results.push(callback(arrayCopy.shift()));
  results = results.concat(rMap(arrayCopy, callback));
  return results;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, target) {
  var counter = 0;
  for (var key in obj) {
    if (key === target) {
      counter++;
    } else if (typeof(obj[key]) === 'object') {
      var innerCount = countKeysInObj(obj[key], target);
      counter += innerCount;
    }
  }

  return counter;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var counter = 0;
  for (var key in obj) {
    if (obj[key] === value) {
      counter++;
    } else if (typeof obj[key] === 'object') {
      var innerCount = countValuesInObj(obj[key], value);
      counter += innerCount;
    }
  }

  return counter;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
var replaceKeysInObj = function(obj, oldKey, newKey) {

  for (var key in obj) {
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    } else if (typeof (obj[key]) === 'object') {
      var newObj = replaceKeysInObj((obj[key]), oldKey, newKey);
      obj[key] = newObj;
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var arrayCopy = array.slice();
  var results = [];

  if (!arrayCopy.length) {
    return results;
  }

  results.push(arrayCopy.shift().toUpperCase());
  results = results.concat(capitalizeWords(arrayCopy));
  return results;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var arrayCopy = array.slice();
  var results = [];

  if (!arrayCopy.length) {
    return results;
  }

  var currElement = arrayCopy.shift();
  currElement = currElement[0].toUpperCase() + currElement.slice(1);
  results.push(currElement);
  results = results.concat(capitalizeFirst(arrayCopy));
  return results;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var arrayCopy = array.slice();
  var results = [];

  if (!arrayCopy.length) {
    return results;
  }

  var currElement = arrayCopy.shift();

  if (Array.isArray(currElement)) {
    results = results.concat(flatten(currElement));
  } else {
    results.push(currElement);
  }

  results = results.concat(flatten(arrayCopy));

  return results;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var strCopy = str.slice();
  var chars = strCopy.split('');
  if (obj === undefined) {
    obj = {};
  }

  if (!chars.length) {
    return obj;
  }

  var currElement = chars.shift();
  if (obj[currElement]) {
    obj[currElement]++;
  } else {
    obj[currElement] = 1;
  }

  return letterTally(chars.join(''), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var listCopy = list.slice();
  var results = [];

  if (!listCopy.length) {
    return results;
  }

  var currElement = listCopy.shift();
  var nextElement = listCopy[0];
  while (currElement === nextElement) {
    currElement = listCopy.shift();
    nextElement = listCopy[0];
  }

  results.push(currElement);
  results = results.concat(compress(listCopy));
  return results;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var arrayCopy = array.slice();
  var results = [];

  if (!arrayCopy.length) {
    return results;
  }

  var currElement = arrayCopy.shift();
  currElement.push(aug);
  results.push(currElement);

  results = results.concat(augmentElements(arrayCopy, aug));
  return results;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var arrayCopy = array.slice();
  var results = [];

  if (!arrayCopy.length) {
    return results;
  }

  var currElement = arrayCopy.shift();
  var nextElement = arrayCopy[0];

  if (currElement !== 0) {
    results.push(currElement);
  } else {
    if (nextElement === 0) {
      while (currElement === nextElement) {
        currElement = arrayCopy.shift();
        nextElement = arrayCopy[0];
      }
      results.push(currElement);
    }
  }

  results = results.concat(minimizeZeroes(arrayCopy));
  return results;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var arrayCopy = array.slice();
  var results = [];

  if (!arrayCopy.length) {
    return results;
  }

  var currElement = Math.abs(arrayCopy.shift());
  var nextElement = Math.abs(arrayCopy.shift()) * -1;

  results.push(currElement, nextElement);

  results = results.concat(alternateSign(arrayCopy));
  return results;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var legend = { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '0': 'zero' }
  var strCopy = str.slice();
  var words = strCopy.split(' ');
  var results = [];

  if (!strCopy.length) {
    return results
  }

  var currWord = words.shift();
  if (legend.hasOwnProperty(currWord.toString())) {
    results.push(legend[currWord.toString()]);
  } else {
    results.push(currWord);
  }

  results = results.concat(numToText(words.join(' ')));

  return results.join(' ');
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  // console.log(arguments);
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  //input is an array and a target
  //output is the index of the target;
  //find the middle index compared to min and max index
  if (min === undefined) {
    min = 0;
  }

  if (max === undefined) {
    max = array.length - 1;
  }

  //basecondition, if the starting index is greater than ending index return false;
  // [1, 2, 3, 4, 5], 4; min = 0 max = 4 mid = 2
  // [4, 5] min = 3 max = 4 mid = 4
  // [4] min = 3 max = 3 mid = 3
  if (min > max) {
    return null;
  }

  var mid = Math.ceil((min + max) / 2);
  var midValue = array[mid];

  if (target === midValue) {
    return mid;
  }

  if (target < midValue) {
    max = mid;
    return binarySearch(array, target, min, max - 1);
  } else if (target > midValue) {
    min = mid;
    return binarySearch(array, target, min + 1, max);
  }

  // return null;
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  //input is an array [1, 2, 3, 4]
  //output is a sorted array
  var result = [];

  if (array.length < 2) {
    return array;
  }

  //find the mid point of the array
  var midpoint = Math.floor(array.length / 2);
  //split the array into two new arrays from the midpoint
  var left = array.slice(0, midpoint); // [1, 2]
  var right = array.slice(midpoint); // [3, 4]

  //recursively call the left slice if its not of length < 2

  //then input the returned recursive calls into our merge function
  result = merge(mergeSort(left), mergeSort(right));

  return result;
};

var merge = function(left, right) {
  //left and right are sorted arrays
  var result = [];
  // console.log(result);
  //basecase is if left is empty concat the rest of right onto the result
  if (left.length === 0) {
    result = result.concat(right);
    return result;
  }

  if (right.length === 0) {
    result = result.concat(left);
    return result;
  }

  var currLeftEle = left[0];
  var currRightEle = right[0];
  var innerResult;

  if (currLeftEle < currRightEle || currRightEle === undefined) {
    var leftEle = left.shift();
    result.push(leftEle);
    innerResult = merge(left, right);
  } else {
    var rightEle = right.shift();
    result.push(rightEle);
    innerResult = merge(left, right);
  }

  result = result.concat(innerResult);
  return result;
}

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};

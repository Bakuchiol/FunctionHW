// 1. (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
// if they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them.
//  Again, the Math.max method is not allowed.

const maxOfThree = (x, y, z) =>{
    if ( x >= y) {
        return x;
    } else if(x >= y){
        return y;
    } else {
        return z;
    }
} 
console.log(maxOfThree(1, 2, 3));   // 3


// 3. Define a function, as a function declaration, isCharAVowel
//  that takes a character as an argument and returns true if it is a vowel, false otherwise.

const isCharAVowel = (char) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
}
console.log(isCharAVowel('b'));     // false

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers.
//  For example, sumArray([2, 4, 5]);would return 11.

const sumArray = (arr) => {
    let sumArray = 0;
    for (let i = 0; i < arr.length; i++){
        sumArray += arr[i]
    }
    return sumArray
}
console.log(sumArray([1, 2, 3]));   //6

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers.
//  For example, multiplyArray([2, 4, 5]);would return 40.

const multiplyArray = (arr) => {
    let multiplyArray = 1;
    for (let i = 0; i < arr.length; i++){
        multiplyArray *= arr[i]
    }
    return multiplyArray
}
console.log(multiplyArray([2, 3, 5]));      // 30

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function() {
    return arguments.length;
}
console.log(numArgs(1, 2, 3, 4, 5, 6, 7));      // 7

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it.
//  For example, reverseString('rockstar');would return the string "ratskcor".

const reverseString = function(str) {
    let newString = "";
    for(let i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
    return newString
}
console.log(reverseString("hello"));     // olleh

//
// const OtherReverseString = function(str) {
//     return str.split("").reverse().join("");
// }
// console.log(OtherReverseString("Croissants"));  // stnassiorC

// 8. Define a function, as a function expression, longestStringInArray
//  that takes an array of strings as an argument and returns the length of the longest string.

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments;
//  and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
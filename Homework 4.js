//Homework 4
//ex.1
function fibonacci (number) {
    let initialArray = [0, 1, 1];
    if (number <= 0 || !number) {
    return undefined;
    } else {
        for (let i = 2; i < number; i++) {
            if(i == initialArray[initialArray.length-1] + initialArray[initialArray.length-2]) {
            initialArray.push(i);
            }
        }
return initialArray;    
      }
}

//ex.
function AreDigitsSumAndProductDivisible (number) {
let strNumber = String(number);
let sum = 0;
let product = 1;
let quotient = 0;
let reminder = 0;
    if (!number) {
    return 'Cannot calculate';
    } else {
        for( let i = 0; i < strNumber.length; i++) {
        product *= strNumber[i];
        sum += +strNumber[i];
        }
          if (product % sum == 0) {
          return `Quotient is ${product/sum}`;
          } else {
          return `Remainder is ${product%sum}`;
          }
    }
}

//ex.3
function isMinMaxDiffInArray (array = []) {
let min = +Infinity;
let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
        max = array[i];
        }
        if (array[i] < min) {
        min = array[i];
        }
    } 
    if (array.indexOf(max - min) !== -1) {
       return true;
    } else {
       return false;
    }
}

//ex.4
function indexOfSecondMax (array = []) {
let previousMax;
let maxValue = findMax(array);
array.splice(array.indexOf(maxValue), 1)
return array.indexOf(maxValue);

function findMax (array=[]) {
let max = -Infinity;
    if (!array) {
    return undefined;
    } else {
        for (let i = 0; i < array.length; i ++) {
            if(array[i] > max) {
            max = array[i];
            }
        }
    return max;
      }
}
}
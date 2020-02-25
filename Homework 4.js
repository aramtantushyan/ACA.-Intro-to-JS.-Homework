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
function findMax (array) {
    if (!Array.isArray(array)) {
    return undefined;
    } else {
        let max = -Infinity;
        for (let i = 0; i < array.length; i ++) {
            if(array[i] > max) {
            max = array[i];
            }
        }
    return max;
      }
}

function indexOfSecondMax (array) {
if(!Array.isArray(array)) {
return undefined;
} else {
    let previousMax;
    let maxValue = findMax(array);
    delete array[array.indexOf(maxValue)];
    return array.indexOf(findMax(array));
 }
}

//ex.5
function paddingAndRepeat (array, padding, repeat) {
    if (!Array.isArray(array) || !Number.isInteger(padding) || !Number.isInteger(repeat)) {
        return undefined;
    } else if (padding > array.length) {
        return 'Invalid padding amount';
    } else {
        let firstSubArray = array.slice(0, padding);
        let lastSubArray = array.slice(array.length-padding);
        for (let i = 0; i<repeat;i++) {
            for (let j = padding-1; j >=0  ; j--) {
                array.unshift(firstSubArray[j]);
                array.push(lastSubArray[padding-1-j])
            }
        }
      return array;
      }
}

//ex.6
function printRectangle (number) {
    if(!Number.isInteger(number)) {
    return undefined;
    } else {
        let pattern = '\n';
        for (let i = 0; i < number; i++) {
            for (let j = 0; j < number; j++) {
                pattern += ' * ';
            }
        pattern += '\n';
        }
       return pattern;      
      }
}

// ex.7
function printRectangleBorders (number) {
    if(!Number.isInteger(number)) {
    return undefined;
    } else {
        let pattern = '\n';
        for (let i = 0; i < number; i++) {
            for (let j = 0; j < number; j++) {
                if(i==0 || i==number-1 || j==0 || j==number-1) {
                    pattern += ' * ';
                } else {
                    pattern += '   ';
                  }
             }
         pattern += '\n';
         }
        return pattern;      
       }
}

// ex.8
function numberCount (number) {
    if (!Number.isInteger(number)) {
        return undefined;
    } else {
        let result = '';
        for (let i = 1; i <=number; i++) {
        result += i;
        }
        return result;
    }
}

function numberHill (number) {
    if(!Number.isInteger(number)) {
        return undefined;
    } else {
        let result = '\n';
            for (let i = 1; i < number*2; i++) {
                 if(i<=number){
                     result += numberCount(i);
                     result += '\n';   
                 } else {
                     result += numberCount(number*2-i);
                     result += '\n';
                 }                     
            }
        return result;    
       }
}

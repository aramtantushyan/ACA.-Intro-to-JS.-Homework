//Homework 2
// ex. 4
//This code works only for arrays with three elements
let myArray = [-23, -456, 0];
let maxValue;
let b = myArray.length;
for (let i = 0; i < myArray.length-1; i++) {
    for (let j = 0; j < b; b--) {
        maxValue = myArray[j];
        if(myArray[j+1] < maxValue) {
        myArray [j] = myArray[j+1]
        myArray[j+1] = maxValue;
        } j++;
    }
}
console.log(myArray);

// ex.8
let number = prompt('Enter a number');
let biggest = - Infinity;
let smallest = Infinity;
if(number.length === 1) {
    console.log(0);
} else {
    for(let i=0; i <number.length; i++) {
        if(number[i] > biggest) {
        biggest = number[i];
        }
        if(number[i] < smallest) {
        smallest  = number[i];
        }
    }
console.log(biggest - smallest);
}
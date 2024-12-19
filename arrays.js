const numberArr = [ 3, 9, 23, 64, 2, 8, 28, 93]

function subtractArray(numberArr) {
    let firstElement = numberArr[0];
    let lastElement = numberArr[numberArr.length-1];

    return firstElement - lastElement;
}

console.log(subtractArray(numberArr))

numberArr.push(90);

console.log(subtractArray(numberArr))

// Create a loop to iterate through the array and calculate the average

function findAverage(numberArr){
    let sum=0;

for (let i=0; i<numberArr.length; i++ ){
    sum += numberArr[i];
}
return sum / numberArr.length;
}
console.log(findAverage(numberArr))


/* Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name. */


function nameLength(names){
    let totalLength = 0;

    for(let i=0; i<names.length; i++){
        totalLength += names[i].length;
    }
    return totalLength / names.length;
}

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

console.log(nameLength(names));

// 2b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

console.log(names.join(" "))

// 3 How do you access the last element of an array?

console.log(names.length-1)

// or we can use the "at" method

console.log(names.at(0))

// 4. How do you access the first element in an array?

console.log(names.at(0))

// Create a new array called nameLengths. Write a loop to iterate over the previously
// created names array and add the length of each name to the nameLengths array.

const nameLengths = [];

for (let i =0; i<names.length; i++){
    nameLengths.push(names[i].length)
}
console.log(nameLengths)


// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum);

/* Write a function that takes two parameters, word and n, as arguments and returns 
the word concatenated to itself n number of times.
 (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello') */

 function repeatWord(word , n){
    let result = "";
    for( let i=0; i<n; i++){
        result += word;
    }
    return result;
 }
console.log(repeatWord("hello", 3))
console.log(repeatWord("Boom", 6))

// Write a function that takes two parameters, firstName and lastName, and returns a full name. 
// The full name should be the first and the last name separated by a space.


function fullName (firstName, lastName){
    return `${firstName} ${lastName}`;
}
console.log(fullName("Jason", "Ruff" ));

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function sumOver100(numbersArray){
    let sum=0;
    for (let i=0; i<numbersArray.length; i++){
        sum +=numbersArray[i];
    }
    return sum >100;
}
console.log(sumOver100([20,30,40]))
console.log(sumOver100([40, 90,23]))

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function arrayAvg(someArray){
    let sum = 0;
    for(let i=0; i<someArray.length; i++ ){
        sum+= someArray[i]
    }
    return sum / someArray.length;
}
console.log(arrayAvg([2, 4, 5, 6, ]))

//Write a function that takes two arrays of numbers and returns true if the average 
//of the elements in the first array is greater than the average of the elements in the second array.

function biggerArray(array1, array2){
    let sum = 0;
    for(let i=0; i<array1.length; i++ ){
        sum+= array1[i]
    }
    let avg1 = sum/array1.length;
    sum=0
     for(let i=0; i<array2.length; i++ ){
        sum+= array2[i]
     }
     let avg2 = sum/array2.length
     return avg1>avg2;
}
console.log(biggerArray([2, 4, 6], [1, 2, 3])); //should be true
console.log(biggerArray([1, 2], [3, 4]));     //should be false


function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside === true && moneyInPocket>= 10.50){
        return true;
    }else {
        return false;
    }
}

//Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.
// I am going to write a simple function that helps me decide what to do based on how much free time (in minutes) I have.
//If I have more than an hour
function whatToDo(time){
    if(time<60){
        return "Time to eat!";
    }else{
        return "Study Time!";
    }
}
console.log(whatToDo(55));   
console.log(whatToDo(90)); 
console.log(whatToDo(60)); 
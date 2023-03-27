// Task 1
// 1
const userInput = +prompt("Enter a number from 0 to 9:");

switch(userInput) {
  case 1:    console.log('The special symbol is: ! ');    break;
  case 2:    console.log('The special symbol is: @ ');    break;
  case 3:    console.log('The special symbol is: # ');    break;
  case 4:    console.log('The special symbol is: $ ');    break;
  case 5:    console.log('The special symbol is: % ');    break;
  case 6:    console.log('The special symbol is: ^ ');    break;
  case 7:    console.log('The special symbol is: & ');    break;
  case 8:    console.log('The special symbol is: * ');    break;
  case 9:    console.log('The special symbol is: ( ');    break;
  case 0:    console.log('The special symbol is: ) ');    break;
  default:    console.log('Invalid input');
}


//2
const InputYear = +prompt("Enter a year:");
console.log((InputYear % 4 == 0 && InputYear % 100 != 0) || (InputYear % 400 == 0) ? `${InputYear} is a leap year` : `${InputYear} is not a leap year`);

//3
const day = +prompt("Enter a day:");
const month = +prompt("Enter a month (1-12):");
const year = +prompt("Enter a year:");
let nextDay, nextMonth, nextYear;
if (isNaN(day) || isNaN(month) || isNaN(year)) {
console.log(`Input can't be empty`);
} else if (month < 1 || month > 12) {
console.log('Month number should be at [1:12]');
} else if (day < 1 || day > 31) {
console.log(`Day number should be at [1:31]`);
} else {
    nextYear = year;
if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (day === 30) {
        nextDay = 1;
        nextMonth = month + 1;
    } else if (day < 30) {
        nextDay = day + 1;
        nextMonth = month;
    } else {
        console.log('Entered month should has only 30 days');
    }
} else if (month == 2) {
    if ((InputYear % 4 == 0 && InputYear % 100 != 0) || (InputYear % 400 == 0) && day === 29) {
        nextDay = 1;
        nextMonth = 3;
    } else if (!(InputYear % 4 == 0 && InputYear % 100 != 0) || (InputYear % 400 == 0) && day === 28) {
        nextDay = 1;
        nextMonth = 3;
    } else if (day < 28 || ((InputYear % 4 == 0 && InputYear % 100 != 0) || (InputYear % 400 == 0) && day === 28)) {
        nextDay = day + 1;
        nextMonth = month;
    } else {
        console.log(`Invalid February's day number`);
    }
} else if (day == 31 && month == 12) {
        nextDay = 1;
        nextMonth = 1;
        nextYear = year + 1;
}}

console.log(`Next date is: ${nextDay}.${nextMonth}.${nextYear}`)

//Task 2
//1
const startRange = +prompt("Enter the starting number:");
const endRange = +prompt("Enter the ending number:");
let sum = 0;
for (let i = startRange; i <= endRange; i++) {
  sum += i;
}
console.log(`The sum of numbers from ${startRange} to ${endRange} is ${sum}`);

//2
let num = +prompt("Enter a number:");
let count = 0;
while (num !== 0) {
  num = Math.floor(Math.abs(num) / 10);
  count++;
}
console.log(`The number of digits in the entered number is ${count}`);

//3 
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < 10; i++) {
  const num = +prompt(`Enter number ${i+1}:`);
  if (num > 0) {
    positiveCount++;
  } else if (num < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
  if (num % 2 == 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
evenCount=evenCount-zeroCount;
alert(`Positive numbers: ${positiveCount} \nNegative numbers: ${negativeCount} \nZero numbers: ${zeroCount} \nEven numbers: ${evenCount} \nOdd numbers: ${oddCount}`);
console.log(`Positive numbers: ${positiveCount} \nNegative numbers: ${negativeCount} \nZero numbers: ${zeroCount} \nEven numbers: ${evenCount} \nOdd numbers: ${oddCount}`);
//4
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let index = 0;
let input = false;
do {
input = confirm(`${weekdays[index]}. Do you want to see the next day?`);
if (!input) {
    if (index>5){
        index = 0;
    }
    else {
        index+=1;
    }
}
else {
    input = true;
}
} while (input !== true);
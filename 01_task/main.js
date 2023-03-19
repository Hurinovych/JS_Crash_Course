//1
let currentYear = new Date().getFullYear();
let birthYear = prompt("What year were you born in?");
let age = currentYear - birthYear;
alert(`You are ${age} years old.`);

//2
let radius = prompt("What is the radius of the circle?");
let area = Math.PI * Math.pow(radius, 2);
alert(`The area of the circle is ${area}.`);

//3
let distance = prompt("What is the distance between the two cities (in km)?");
let time = prompt("How much time do you have to reach your destination (in hours)?");
let speed = distance / time;
alert(`You need to travel at a speed of ${speed} km/h to arrive on time.`);

//4 
let currencyRate = 0.94; 
let dollars = prompt("How many dollars do you want to convert?"); 
let euros = dollars * currencyRate;
alert(`${dollars} dollars is equal to ${euros} euros.`); 

//5
let capacity = prompt("Enter the capacity of the flash drive in GB:");
let numOfFiles = Math.floor(capacity * 1024 / 820);
alert(`The flash drive can save ${numOfFiles} files of size 820 MB.`);
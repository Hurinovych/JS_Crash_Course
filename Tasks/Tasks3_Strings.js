//1
const str = prompt("Enter a string:");
console.log(`Entered string: ${str}`);
const spaces = str.split(" ").length - 1;
console.log(`Number of spaces: ${spaces}`);

//2
console.log(`First letter to uppercase: ${str.charAt(0).toUpperCase() + str.slice(1)}`);

//3
const words = str.split(" ");
console.log("Words count:", words.length);
console.log("Words: ", words);

//4
let abbreviation = "";
const words1 = str.split(" ");
for (let i = 0; i < words1.length; i++) {
  abbreviation += words1[i][0].toUpperCase();
}
console.log(`Abbreviation: ${abbreviation}`);

//5
const palindrome = prompt("Enter a word:");
const palindrometest = palindrome.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
const reversedpalindrome = palindrometest.split("").reverse().join("");

if (palindrometest === reversedpalindrome) {
  console.log("Entered sentence is palindrome!");
} else {
  console.log("Entered sentence isn't palindrome!");
}

//6
const urlString = prompt("Enter a URL:");
console.log(`Entered URL: ${urlString}`);
const urlObj = new URL(urlString);
console.log(`Protocol: ${urlObj.protocol}`);
console.log(`Domain: ${urlObj.hostname}`);
console.log(`Path: ${urlObj.pathname}`);
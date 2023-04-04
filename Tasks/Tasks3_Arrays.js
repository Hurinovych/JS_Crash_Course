//1
var arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
console.log("Array: " + arr);

//2
arr.forEach((num, index) => {
console.log(`[${index + 1}] - ${num}`);
})

//5
function findMultipleOf7(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 7 === 0) {
        return i;
      }
    }
    return -1; // return -1 if no multiple of 7 is found
  }
const index = findMultipleOf7(arr);
if (index !== -1) {
    console.log(`A multiple of 7 at index ${index+1}: ${arr[index]}`);
} else {
    console.log("No multiple of 7 found in the array");
}

//7
const evenCount = arr.filter(num => num % 2 === 0).length;
console.log(`Number of even numbers in the array: ${evenCount}`);

//8. 
const hasDuplicates = arr.length !== new Set(arr).size;
console.log(`Array has duplicates: ${hasDuplicates}`);

//3
console.log(`Sorted array:`)
arr.sort((a, b) => b - a);
console.log(arr);

//4
console.log(`Zeros after half:`)
const halfIndex = Math.floor(arr.length / 2);
arr.fill(0, halfIndex);
console.log(arr);

//6
console.log(`Array without 3 first elements:`)
arr.splice(0, 3);
console.log(arr);
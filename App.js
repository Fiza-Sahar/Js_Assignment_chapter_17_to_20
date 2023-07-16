//Question_01:
var x = [[]]; 

//Question_02:
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1] ];

//Question_03:
for (let i = 1; i <= 10; i++ ) {
    document.write(i +"</br>");
  }
  
//Question_04:
// Take inputs from the user
var number = parseInt(prompt('Enter the number for the multiplication table:'));
var length = parseInt(prompt('Enter the length of the multiplication table:'));

document.write(`Multiplication table of ${number} with length ${length}:`+ "</br>");
for (let i = 1; i <= length; i++) {
 document.write(`${number} * ${i} = ${number * i}`+ "</br>");
}

//Question_05:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("Items of the fruits array with indices:" + "</br>");
for (let i = 0; i < fruits.length; i++) {
  document.write(`Index ${i}: ${fruits[i]}` + "</br>");
}

//Question_06:
document.write("Counting:<br>");
for (let i = 1; i <= 15; i++) {
  document.write(i + "<br>");
}
document.write("Reverse counting:<br>");
for (let i = 10; i >= 1; i--) {
  document.write(i + "<br>");
}
document.write("Even:<br>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + "<br>");
}
document.write("Odd:<br>");
for (let i = 1; i <= 19; i += 2) {
  document.write(i + "<br>");
}
document.write("Series:<br>");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k<br>");
}

//Question_07:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");
var found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    break;
  }
}
if (found) {
  alert("Yes, the item is found in the list!");
} else {
  alert("No, the item is not found in the list.");
}

//Question_08:
var A = [24, 53, 78, 91, 12];
var largestNumber = A[0]; 
for (var i = 1; i < A.length; i++) {
  if (A[i] > largestNumber) {
    largestNumber = A[i]; 
  }
}
document.write("The largest number in the array is : " + largestNumber);

//Question_09:
var A = [24, 53, 78, 91, 12];
var smallestNumber = A[0]; 
for (let i = 1; i < A.length; i++) {
  if (A[i] < smallestNumber) {
    smallestNumber = A[i]; 
  }
}
document.write("The smallest number in the array is : " + smallestNumber);

//Question_10:
document.write("Multiples of 5 ranging from 1 to 100:");
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
  document.write(i + "</br>");
  }
}

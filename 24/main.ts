

let hello = "hello";
let uppercaseHello = "HELLO";
let five = 5;
let ten = 10;
let fruits = ["apple", "banana", "orange"]

// Tests for equality and inequality with strings
console.log("is hello is equal to hello");
console.log("hello" === "hello");

console.log("\n is hello is not equal to hello");
console.log("hello" != "hello");


// Tests using the lower case function
console.log("\n is HELLO is  equal to hello after converting tolowercase");
console.log(uppercaseHello.toLowerCase()=="hello");

console.log("\n is HELLO is not equal to hello after converting tolowercase");
console.log(uppercaseHello.toLowerCase()!="hello");


console.log("\n is five is equal to ten");
console.log(five == ten);

console.log("\n is five is not  equal to ten");
console.log(five != ten);

console.log("\n is five is   greaterthan to zero?");
console.log(5 > 0);

console.log("\n is ten is   less than to five");
console.log(ten < 5);

console.log("\n is five is   greater than equal to 2?");
console.log(five >= 2);

console.log("\n is ten is   less than equal to 5");
console.log(ten <= 5);

console.log("\n  ten is not equal to 5 and ten is greater than 5");
console.log(ten != 5 && ten > 5);

console.log("\n  ten is not equal to 5 and ten is greater than 5");
console.log(ten != 5 && ten > 20);

console.log("\n  ten is  greater than  25 or  ten is equal to  10");
console.log(ten > 25 || ten == 10);

console.log("\n  ten is  greater than  25 or  ten is not equal to  10");
console.log(ten > 25 || ten != 10);



console.log("\n is orange include in my fruits array");
console.log(fruits.includes("orange"));

console.log("\n is orange not include in my fruits array");
console.log(!fruits.includes("orange"));







let guests = ["Ali", "Babu", "Asad"];

// Print initial set of invitation messages
guests.forEach(guest => {
    console.log(`\nDear ${guest}, you are invited to dinner.`);
});

// Inform people about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.\n"); 

// Add one new guest to the beginning of the array
guests.unshift("Rehman");

// Add one new guest to the middle of the array
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Zeeshan");

// Add one new guest to the end of the array
guests.push("Ejaz");

// Print new set of invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});

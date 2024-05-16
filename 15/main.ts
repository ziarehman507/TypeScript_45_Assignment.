let NewguestList = ["Amir", "Jawad", "Hassan", "Jawad" ]
console.log("\nOriginal Guest List:");
NewguestList.forEach(Newperson => {
    console.log(`Salam ${Newperson} would u like to Dinner with me`);
});
let guestIndexToReplace = 0; 
let newGuest = "Zakir Khan"; 

NewguestList[guestIndexToReplace] = newGuest;

// Output the updated guest list
console.log("\nUpdated Guest List:");
NewguestList.forEach(person => {
    console.log(`Salam ${person} would u like to Dinner with me`)});
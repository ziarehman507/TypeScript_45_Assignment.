var NewguestList = ["Amir", "Jawad", "Hassan", "Jawad"];
console.log("\nOriginal Guest List:");
NewguestList.forEach(function (Newperson) {
    console.log("Salam ".concat(Newperson, " would u like to Dinner with me"));
});
var guestIndexToReplace = 0;
var newGuest = "Zakir Khan";
NewguestList[guestIndexToReplace] = newGuest;
// Output the updated guest list
console.log("\nUpdated Guest List:");
NewguestList.forEach(function (person) {
    console.log("Salam ".concat(person, " would u like to Dinner with me"));
});

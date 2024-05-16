var Guest1 = ["Atta", "Atif", "Razwan", "Amir"];
var dontCome = Guest1[0];
console.log(dontCome, "Nhi Ahh Sakty han");
Guest1.splice(0, 1, "Ejaz");
console.log("Great news! We found a bigger dinner table");
Guest1.unshift("Zeeshan");
Guest1.push("Babar");
var MeddleGuest = Math.floor(Guest1.length / 2);
Guest1.splice(MeddleGuest, 0, "Habib");
console.log("updated List of Our Guest");
Guest1.forEach(function (oneGuest) { return console.log("salam ".concat(oneGuest, " Would you like to dinner with me ")); });
console.log("You can invite only two people for dinner");
while (Guest1.length > 2) {
    var removedGuest1 = Guest1.pop();
    console.log("Sorry ".concat(removedGuest1, ", you're no longer invited."));
}
console.log("Invitations to the last 2 Guests");
Guest1.forEach(function (towGuest1) { return console.log("Dear ".concat(towGuest1, ", you're still invited.")); });
Guest1.pop();
Guest1.pop();
console.log("Guest list", Guest1);


let Guest1 = ["Atta", "Atif", "Razwan", "Amir"]

let dontCome = Guest1 [0];

console.log(dontCome, "Nhi Ahh Sakty han");

Guest1.splice(0,1, "Ejaz")

console.log("Great news! We found a bigger dinner table");

Guest1.unshift("Zeeshan");

Guest1.push("Babar");

let MeddleGuest : number = Math.floor (Guest1.length / 2)

Guest1.splice(MeddleGuest, 0, "Habib")


console.log("updated List of Our Guest");

Guest1.forEach(oneGuest => console.log(`salam ${oneGuest} Would you like to dinner with me `))

console.log("You can invite only two people for dinner");

while(Guest1.length > 2){
    let removedGuest1 = Guest1.pop()
    console.log(`Sorry ${removedGuest1}, you're no longer invited.`);
    
}
console.log("Invitations to the last 2 Guests");


Guest1.forEach(towGuest1 => console.log(`Dear ${towGuest1}, you're still invited.`)
)

Guest1.pop()
Guest1.pop()

console.log("Guest list", Guest1);
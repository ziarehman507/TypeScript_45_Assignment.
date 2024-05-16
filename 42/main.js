// Function to display the list of magicians
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to add the phrase "the Great" to each magician's name
function make_great(magicians) {
    magicians.map(function (name) { return console.log("the Great ".concat(name)); });
}
var make_great_name = ["Amjad", "Umer", "Ejaz"];
var great_magicians = make_great(make_great_name);
show_magicians(make_great_name);

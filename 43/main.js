// Function to display the list of magicians
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to add the phrase "the Great" to each magician's name
function make_great(magicians) {
    return magicians.map(function (name) { return console.log("the Great ".concat(name)); });
}
var make_great_name = ["Amjad", "Umer", "Ejaz"];
var copy_make_name = make_great_name.slice();
var copy_make_magicians = make_great(copy_make_name);
show_magicians(make_great_name);

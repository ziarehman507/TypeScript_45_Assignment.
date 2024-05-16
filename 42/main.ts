

// Function to display the list of magicians
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

// Function to add the phrase "the Great" to each magician's name
function make_great(magicians: string[]) {
      magicians.map(name => console.log(`the Great ${name}`));
 }

let make_great_name = ["Amjad", "Umer","Ejaz"]

let great_magicians = make_great(make_great_name)

show_magicians(make_great_name)

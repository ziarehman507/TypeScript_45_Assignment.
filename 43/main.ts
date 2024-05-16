

// Function to display the list of magicians
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

// Function to add the phrase "the Great" to each magician's name
function make_great(magicians:string[]) {
      return magicians.map(name => console.log(`the Great ${name}`));
 }

let make_great_name = ["Amjad", "Umer","Ejaz"]

let copy_make_name = make_great_name.slice();

let copy_make_magicians = make_great(copy_make_name);


show_magicians(make_great_name);


function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem)
    )
    console.log("\nEnjoy your sandwich!");
}

// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Turkey", "Swiss", "Mustard");

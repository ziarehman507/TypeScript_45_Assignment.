const favoritePizzas : string [] = ["Pepperoni", "Margherita", "BBQ Chinken"]


// Printing pizza names
for (let pizza of favoritePizzas){
    console.log(pizza);
    
}

// Printing sentences about each pizza
console.log("\nPrinting sentences about each pizza:");
for (let pizza of favoritePizzas)
{
    console.log(`i like ${pizza} pizza`);
    
}

// Additional line about how much I like pizza
console.log("\n I really love pizza");


var favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chinken"];
// Printing pizza names
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
// Printing sentences about each pizza
console.log("\nPrinting sentences about each pizza:");
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("i like ".concat(pizza, " pizza"));
}
// Additional line about how much I like pizza
console.log("\n I really love pizza");

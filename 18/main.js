var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of places to visit
var countriesToVisit = ["Germany", "China", "Usa", "Brazil", "Argentina"];
// Print original array
console.log("Original Order:", countriesToVisit);
// Print array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the original array is still in its original order
console.log("Original Order:", countriesToVisit);
// Print array in reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the original array is still in its original order
console.log("Original Order:", countriesToVisit);
// Reverse the order of the original list
countriesToVisit.reverse();
console.log("Reversed Order:", countriesToVisit);
// Reverse the order of the list again to restore the original order
countriesToVisit.reverse();
console.log("Original Order:", countriesToVisit);
// Sort the array in alphabetical order
countriesToVisit.sort();
console.log("Sorted Alphabetical Order:", countriesToVisit);
// Sort the array in reverse alphabetical order
// countriesToVisit.sort((a, b) => b.localeCompare(a));
countriesToVisit.reverse();
console.log("Sorted Reverse Alphabetical Order:", countriesToVisit);

var b = "Zia Ur Rehman";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));

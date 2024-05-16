function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(message, " prints on shirt"));
}
// Large
make_shirt();
// Medium 
make_shirt("Medium", "I love ReactNative");
// Small 
make_shirt("Small", "I love JaveScript");

var users = ["Zia", "Ali", "Admin", "Zeeshan", "Ejaz"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var username = users_1[_i];
        if (username === "Zeeshan") {
            console.log("Hello Zeeshan, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}

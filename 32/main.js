// List of current usernames
var current_users = ["John", "Mary", "Alice", "Bob", "Eve"];
// List of new usernames
var new_users = ["john", "mary", "Alice", "Dave", "Jane"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This user ".concat(new_one_user, " is available"));
    }
});

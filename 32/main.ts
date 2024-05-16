// List of current usernames
let current_users: string[] = ["John", "Mary", "Alice", "Bob", "Eve"];

// List of new usernames
let new_users: string[] = ["john", "mary", "Alice", "Dave", "Jane"];


new_users.forEach(new_one_user =>{
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase()=== new_one_user.toLocaleLowerCase())
    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);
    
    }else{
        console.log(`This user ${new_one_user} is available`);
        
    }
})
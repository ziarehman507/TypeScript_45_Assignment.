 let users: string[] = ["Zia", "Ali", "Admin", "Zeeshan", "Ejaz"];

 if (users.length === 0){
    console.log("We need to find some users!");
    
 }else{
    for (let username of users){
        if(username === "Zeeshan"){
            console.log(`Hello Zeeshan, would you like to see a status report?`);
            
        }else{
            console.log(`Hello ${username}, thank you for logging in again.`);
            
        }
    }
 }
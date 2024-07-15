let current_users :string[]=["hassaan","uzair","admin","faizan","ali"];
let new_users:string[]=["HASSAAN","david","kevin","ALI","raees"];
let new_users_lower:string[] = new_users.map(users => users.toLowerCase());
let i:number=0;
let j:number=0;

for(i=0;i<current_users.length;i++){
        if(current_users.includes(new_users_lower[i])){
            console.log(new_users[i]+" will need a new user name");
        }
        else{
            console.log(new_users_lower[i]+ " is avalible");
        }
    }


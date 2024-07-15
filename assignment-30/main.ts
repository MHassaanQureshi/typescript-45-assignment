let names:string[]=["hassaan","admin","uzair","ahsan","faizan"];

for(let i:number=0;i<5;i++){
    if(names[i]=="admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log("Hello "+names[i]+" ,thank you for logging in again.");
    }
}
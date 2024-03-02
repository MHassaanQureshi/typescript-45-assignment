let list:string[]=["hassaan","ahsan","muzzamil","faraz","farees"];
let i:any;
for(i in list){
    console.log("i would like to invite you to a party "+list[i]);
}
console.log(list[3]+" For some reason can't attent the party");
list[3]="zafar";

for(i in list){
    console.log("Updated Invitations");
    console.log("i would like to invite you to a party "+list[i]);
}
//adding new names
console.log("we just found a new bigger table. we can now invite 3 more guests");
//adding in start
list.unshift("maaz");
//adding in last
list.push("wabbas");
//adding in middle
list.splice(4,0,"fahad");
for(i in list){
    console.log("Updated Invitations");
    console.log("i would like to invite you to a party "+list[i]);
}
//removing names as we have space for only two guests

for(i in list){
    if(list.length>1){
        console.log("we are forced to leave the bigger table and our new table have space for only two guests")
        console.log("sorry for the incovinence",list.pop());
        console.log(" new guest list "+list);
    }
}
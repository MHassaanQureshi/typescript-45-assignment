let list:string[]=["hassaan","ahsan","muzzamil","faraz","farees"];
let i:any;
for(i in list){
    console.log("i would like to invite you to a party "+list[i]);
}
//printing total number of invitation sent
console.log("total invitation "+list.length);
console.log(list[3]+" For some reason can't attent the party");
list[3]="zafar";
//printing total number of invitation sent
console.log("total invitation "+list.length);

for(i in list){
    console.log("Updated Invitations");
    console.log("i would like to invite you to a party "+list[i]);
}


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
//printing total number of invitation sent
console.log("total invitation "+list.length);

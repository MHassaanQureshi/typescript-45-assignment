var list = ["hassaan", "ahsan", "muzzamil", "faraz", "farees"];
var i;
for (i in list) {
    console.log("i would like to invite you to a party " + list[i]);
}
console.log(list[3] + " For some reason can't attent the party");
list[3] = "zafar";
for (i in list) {
    console.log("Updated Invitations");
    console.log("i would like to invite you to a party" + list[i]);
}

var studentname = "Hassaan";
var studentname2 = "laiba";
var studentage = 20;
var student2age = 23;
//equality & inquality
if (studentname == studentname2) {
    console.log("both names are equal");
}
else {
    console.log("both names are not equal");
}
// Lower case function
var studentname_upper = studentname.toLowerCase();
if (studentname_upper == studentname) {
    console.log("Name is not equal in lower case also");
}
else {
    console.log("name is equal in lower case");
}
// Numeric conditions
if (studentage == student2age) {
    console.log("both are twins");
}
else if (studentage != student2age) {
    console.log("both are not twins");
}
else {
    console.log("Don't Have same age");
}
if (student2age > studentage) {
    console.log(studentname2 + " is older then " + studentname);
}
else if (student2age < studentage) {
    console.log(studentname + " is older then " + studentname2);
}
else {
    console.log("both have same age");
}
if (student2age >= studentage) {
    console.log(studentname2 + " is older then or have same age as of " + studentname);
}
else if (student2age <= studentage) {
    console.log(studentname + " is older then or have same age as of " + studentname2);
}
else {
    console.log("both have same age");
}
// and-or statements
if (studentage > 18 && student2age > 18) {
    console.log("both are eligible to cast vote");
}
else if (studentage > 18 || student2age < 18) {
    console.log("only one can cast vote");
}
else {
    console.log("both are uneligible to cast vote");
}
var Names = ["hassaan", "zoya"];
if (Names.includes("hassaan")) {
    console.log(Names[0] + " is in the list");
}
else if (Names.includes("laiba")) {
    console.log(" laiba is not in the list");
}
else {
    console.log("list is empty");
}

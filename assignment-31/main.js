var names = [""];
for (var i = 0; i < 5; i++) {
    if (names[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else if (names[i] == "") {
        console.log("We need to find more users");
    }
}

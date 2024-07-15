"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] == 1) {
        console.log("1st");
    }
    else if (Numbers[i] == 2) {
        console.log("2nd");
    }
    else if (Numbers[i] == 3) {
        console.log("3rd");
    }
    else {
        console.log(Numbers[i] + "th");
    }
}

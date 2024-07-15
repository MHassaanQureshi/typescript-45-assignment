"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["hassaan", "uzair", "admin", "faizan", "ali"];
let new_users = ["HASSAAN", "david", "kevin", "ALI", "raees"];
let new_users_lower = new_users.map(users => users.toLowerCase());
let i = 0;
let j = 0;
for (i = 0; i < current_users.length; i++) {
    if (current_users.includes(new_users_lower[i])) {
        console.log(new_users[i] + " will need a new user name");
    }
    else {
        console.log(new_users_lower[i] + " is avalible");
    }
}

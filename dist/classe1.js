"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`This player ${this.name}, is ${this.age} years old.`);
    }
}
exports.UserAccount = UserAccount;

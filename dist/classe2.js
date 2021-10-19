"use strict";
const { UserAccount } = require('./classe1');
class CharAccount extends UserAccount {
    constructor(nickname, level, name, age) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        console.log('-------GET-------');
        return this.level;
    }
    set setLevel(newLevel) {
        this.level = newLevel;
        console.log(`The Player ${this.nickname} now is at level '${this.level}'`);
    }
    logCharDetails() {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`);
    }
}

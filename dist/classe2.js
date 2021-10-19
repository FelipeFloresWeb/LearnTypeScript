"use strict";
const { UserAccount } = require('./classe1');
class CharAccount extends UserAccount {
    constructor(nickname, level, name, age) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    getLevel() { return this.level; }
}

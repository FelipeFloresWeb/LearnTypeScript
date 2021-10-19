const { UserAccount } = require('./classe1');

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(nickname:string, level:number, name:string, age:number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

}
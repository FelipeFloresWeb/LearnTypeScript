const { UserAccount } = require('./classe1');

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(nickname:string, level:number, name:string, age:number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log('-------GET-------');
    return this.level;
  }

  public set setLevel(newLevel : number) {
    this.level = newLevel;
    console.log(`The Player ${this.nickname} now is at level '${this.level}'`)
  }
  
  public logCharDetails(): void {
    console.log(
      `The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`
    )
  }

}
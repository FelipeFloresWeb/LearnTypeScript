abstract class UserAccountClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`This player ${this.name}, is ${this.age} years old.`);
  }

}

/* serves to serve as a "template" for other classes. It can be extended but you cannot create new objects from it. */
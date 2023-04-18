"use strict";
// interface User {
//     name: string;
//     age?: number;
//     birthday?: string
// }
// const prettyPrintWilder = (users : User[]) => {
//     users.map((user : User) => {
//       console.log(`${user.name} is ${user.age} years old`);
//     });
//   };
//   const wilders : User[] = [];
//   const user1: User = { name: "Pierre", age: 23 };
//   const user2: User = { name: "Paul", birthday: "10/02/1990" };
//   const user3: User = { name: "Jacques", age: 25 };
//   wilders.push(user1);
//   wilders.push(user2);
//   wilders.push(user3);
//   prettyPrintWilder(wilders);
/**--------------------------------------------------------------- */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        console.log(`I am ${this.name}`);
    }
    tellMyAge() {
        console.log(`I am ${this.age} years old`);
    }
}
const person1 = new Person("Mary", 35);
const person2 = new Person("John", 40);
person1.tellMyName();
person1.tellMyAge();
person2.tellMyName();
person2.tellMyAge();

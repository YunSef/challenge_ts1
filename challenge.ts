// challenge.ts
const prettyPrintWilder = (users : User[]) => {
  users.map((user : User) => {
    console.log(`${user.name} is ${user.age} years old`);
  });
};

const wilders : User[] = [];
export interface User {
    name: string;
    age: number;
}

let user1 : User = { name: "Pierre", age: 23 };
let user2 : User = { name: "Paul", age: 32 };
let user3 : User = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
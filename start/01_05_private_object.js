//Write your code here

function createUser() {
const user = {};

user[Symbol("username")] = "julie";
user[Symbol("password")] = "xxxx"
user["age"] = 24;

return user;

}

const newUser1 = new createUser();

console.log(newUser1.username);
console.log(newUser1.age);

const username = Symbol('username');
const password = Symbol('password');

const user = {
  [username]: "julie.yue",
  [password]: "xxx",
  age: 24
}

console.log(user.username);
console.log(user.age);



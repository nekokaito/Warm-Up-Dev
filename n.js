const users = [
  { name: "a", age: 20 },
  { name: "b", age: 30 },
  { name: "c", age: 17 },
  { name: "d", age: 25 },
  { name: "e", age: 40 },
  { name: "f", age: 22 },
  { name: "g", age: 18 },
  { name: "h", age: 35 },
];

users.map((user) => {
  console.log(`UserNames: ${user.name}`);
});

users
  .filter((user) => user.age >= 25)
  .forEach((user) => {
    console.log(
      `Age is greater than or equal to 25 User: ${user.name}, Age: ${user.age}`,
    );
  });

const totalAge = users.reduce((acc, user) => {
  return acc + user.age;
}, 0);

const avgAge = totalAge / users.length;
console.log(`Total Age of Users: ${totalAge}`);
console.log(`Average Age of Users: ${avgAge}`);

users
  .filter((user) => user.age < 18)
  .forEach((user) => {
    console.log(`Underage User: ${user.name}, Age: ${user.age}`);
  });

console.log("Wake up, Neo...");
const users = [
  { name: "a", age: 20 },
  { name: "b", age: 30 },
];

users.map((user) => {
  console.log(`User: ${user.name}, Age: ${user.age}`);
});

users
  .filter((user) => user.age > 25)
  .forEach((user) => {
    console.log(`Filtered User: ${user.name}, Age: ${user.age}`);
  });

interface User {
  name: string;
  age?: number;
  greet: (country: string) => string; //method call signature
}

const UserName: User = {
  name: "Raman",
  age: 0,
  greet: (country): any =>
    `welcome my name is ${UserName.name}, i am from ${country}`,
};

const printUserName = (UserName: User): string => {
  const { name, age } = UserName;
  return `User name is ${name}`;
};

// console.log(printUserName(UserName));
console.log(UserName.greet("india"));

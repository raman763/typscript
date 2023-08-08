//type is alias method
//1. here you create the interface and pass where u create the object
type PersonType = {
  name: string;
  age: number;
  grade?: string;
  address: {
    street: string;
    houseNumber: number;
  };
};

const student3: PersonType = {
  name: "Raman",
  age: 22,
  grade: "A+",
  address: {
    street: "village Balduhak, Tehsil Nadaun",
    houseNumber: 241,
  },
};

//2. this is the second example where you define the type

const student4: PersonType = {
  name: "ankit",
  age: 22,
  address: {
    street: "village Balduhak, Tehsil Nadaun",
    houseNumber: 241,
  },
};

const printName = (student4: PersonType): string => {
  return `my name is ${student4.name}`;
};
console.log(printName(student4));

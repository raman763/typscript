//1. here you create the interface and pass where u create the object
interface studentDetails {
  name: string;
  age: number;
  grade: string;
  address: {
    street: string;
    houseNumber: number;
  };
}

const student: studentDetails = {
  name: "Raman",
  age: 22,
  grade: "A+",
  address: {
    street: "village Balduhak, Tehsil Nadaun",
    houseNumber: 241,
  },
};

//2. this is the second example where you define the type

const student2: {
  name: string;
  age: number;
  grade?: string; // here this is optional value
  address: {
    street: string;
    houseNumber: number;
  };
} = {
  name: "Raman",
  age: 22,
  address: {
    street: "village Balduhak, Tehsil Nadaun",
    houseNumber: 241,
  },
};

enum Roles {
  user = "user",
  admin = "admin",
}

type loginDetails = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const adminLogin: loginDetails = {
  name: "Raman",
  email: "raman@gmail.com",
  password: "1234",
  role: Roles.admin,
};

const userLogin: loginDetails = {
  name: "ankit",
  email: "ankit@gmail.com",
  password: "4321",
  role: Roles.user,
};

const isAdmin = (user: loginDetails): string => {
  const { name, email, role } = user;
  return role === "admin" ? `${name} is admin` : `${name} is not admin`;
};
console.log(isAdmin(adminLogin));
console.log(isAdmin(userLogin));

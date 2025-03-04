// Object to store
const user = {
    name: "shahadot",
    age: 30,
    email: "shahadot@example.com"
  };
  
  // Set object to localStorage
  localStorage.setItem("user", JSON.stringify(user));
  
  // Get object from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  
  console.log(storedUser); // { name: "John", age: 30, email: "john@example.com" }
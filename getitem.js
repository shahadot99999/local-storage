//Local Storage is a web storage API that allows you to store data in a user's browser with no
//  expiration date. The data persists even after the browser is closed. 

// Here's a brief description and example of the methods:
//localStorage.getItem(key)
//Retrieves the value associated with a specific key from local storage.

let username = localStorage.getItem('username');
console.log(username); // Outputs the value stored under 'username'

//localStorage.setItem(key, value)
//Stores a value in local storage under a specific key. The value must be a string.
localStorage.setItem('username', 'JohnDoe');
console.log('Username saved.');

//localStorage.removeItem(key)
//Removes the key-value pair associated with the specified key.
localStorage.removeItem('username');
console.log('Username removed.');

//localStorage.clear()
//Clears all key-value pairs from local storage.
localStorage.clear();
console.log('Local storage cleared.');

//All values are stored as strings
//Local storage only stores data as strings.
//  If you store non-string data (e.g., numbers, objects), they will be converted to strings.

localStorage.setItem('age', 25); // Number is converted to string
let age = localStorage.getItem('age');
console.log(typeof age); // Outputs "string"

// Set values
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('age', '25');

// Read values
console.log(localStorage.getItem('username')); // Outputs "JohnDoe"
console.log(localStorage.getItem('age')); // Outputs "25"

// Remove a specific item
localStorage.removeItem('age');

// Clear all items
localStorage.clear();
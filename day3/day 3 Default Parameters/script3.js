

function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);

}

// Testing the function
greet("Mithun", "Hi");       // Output: Hi, John!
greet("Mithun");             // Output: Hello, Jane!
greet("Mithun", "Good night");  // Output: Good day, Sam!

// Define the object 'person'
const person = {
    fname: 'Mithun Yadav',
    age: 20,
    city: 'Dharan',
    Roll: 'PURO78BCT052'
};

// Use object destructuring to extract properties
const { fname, age, city, Roll } = person;

// Print the extracted variables
console.log(`Name: ${fname}`); // Output: Mithun Yadav
console.log(`Age: ${age}`);  // Output: 20
console.log(`City: ${city}`); // Output: Dharan
console.log(`Roll No: ${Roll}`); // Output: PUR078BCT052
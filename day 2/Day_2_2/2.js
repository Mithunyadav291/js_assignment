//Assignment 2

function add(a, b, callback) {
    let c;
    c = a + b;

    setTimeout(() => callback(c), 2000)
}

function display(c) {
    console.log("The sum of 5 and 5 is ", c);
    console.log('Callback function invoked after 2 seconds!');
}

add(5, 5, display);

//Assignment 3
function checkInteger(num) {
    if (Number.isInteger(num)) {
        console.log('The provided value is an integer.');

    } else {
        throw new Error('The provided value is not an integer.');
    }
}


try {
    checkInteger(890);
    checkInteger(890.9);
} catch (error) {
    console.error(error.message);
}

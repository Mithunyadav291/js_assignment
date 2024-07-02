//Assignment 1
let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

// Function to display reading status of books
function displayReadingStatus(library) {
    let div = document.createElement("div");
    library.forEach((b) => {
        const status = b.readingStatus ? 'Already read' : 'Yet to read';
        let h4 = document.createElement("h4");
        h4.innerHTML = `Book: ${b.title} by ${b.author}. Status: ${status}`
        div.appendChild(h4);
        document.body.appendChild(div);
    });
}

displayReadingStatus(library);

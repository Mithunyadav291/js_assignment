// greeting.js

document.getElementById('greetButton').addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const greetingMessage = `Hello, ${firstName} ${lastName}!`;
    document.getElementById('greetingMessage').value = greetingMessage;
});
// Flashcard data
const flashcards = [
    { question: "What is 'hello' in Spanish?", answer: "Hola" },
    { question: "What is 'thank you' in French?", answer: "Merci" },
    { question: "What is 'goodbye' in Japanese?", answer: "Sayonara" },
    // Add more flashcards as needed
];

let currentCardIndex = 0; // Tracks the current flashcard being displayed

// Function to display the current flashcard
function displayFlashcard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.innerHTML = `
        <h2>Question:</h2>
        <p>${flashcards[currentCardIndex].question}</p>
        <h2>Answer:</h2>
        <p>${flashcards[currentCardIndex].answer}</p>
    `;
}

// Function to handle clicking the "Next" button
function nextFlashcard() {
    currentCardIndex++;
    if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0; // Loop back to the first flashcard
    }
    displayFlashcard();
}

// Event listener for the "Next" button
document.getElementById('nextBtn').addEventListener('click', nextFlashcard);

// Display the first flashcard when the page loads
window.onload = displayFlashcard;

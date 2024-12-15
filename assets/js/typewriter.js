const texts = [
    "Welcome to My Portfolio",
    "I'm a Data Science Student at Northern Kentucky University",
    "Passionate in Machine Learning and Artificial Intelligence",
    "Interested in AI Research and Innovation",
];

let currentText = 0;
let i = 0;
const speed = 50;
const pauseBetweenTexts = 2000;

function typeWriter() {
    const element = document.getElementById("demo");
    
    // If we've finished typing the current text
    if (i < texts[currentText].length) {
        element.innerHTML += texts[currentText].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Pause after typing, then start clearing
        setTimeout(clearText, pauseBetweenTexts);
    }
}

function clearText() {
    const element = document.getElementById("demo");
    
    // If we're still clearing the text
    if (element.innerHTML.length > 0) {
        element.innerHTML = element.innerHTML.slice(0, -1);
        setTimeout(clearText, speed / 2);
    } else {
        // Move to next text, reset index
        i = 0;
        currentText = (currentText + 1) % texts.length;
        // Start typing next text
        typeWriter();
    }
}

// Start the typewriter effect when page loads
window.onload = typeWriter;
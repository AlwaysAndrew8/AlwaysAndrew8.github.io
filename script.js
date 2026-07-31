// The phrases that will be typed out
const textArray = [
    "Computer Science Student @ WGU",
    "Arch Linux & Niri Enthusiast",
    "Homelab Builder",
    "Studying for CompTIA A+"
];

// Typing speeds (in milliseconds)
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // How long to pause at the end of a phrase

let textArrayIndex = 0;
let charIndex = 0;

const typeWriterElement = document.getElementById("typewriter");

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        // Add the next character
        typeWriterElement.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        // Word is fully typed, wait and then erase
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        // Remove the last character
        typeWriterElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        // Word is fully erased, move to the next phrase
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0; // Loop back to the beginning
        }
        setTimeout(type, typingDelay + 500);
    }
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

const textElement = document.getElementById('typewriter-text');
const messages = [
    "Founder of Vast™",
    "Artist",
    "Graphic Designer",
    "Boxer",
    "Basketballer",
    "Reading Enthusiast",
    "Social Guy"
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentMessage = messages[messageIndex];
    
    if (isDeleting) {
        textElement.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentMessage.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);

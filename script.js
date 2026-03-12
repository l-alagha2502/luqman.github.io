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
const DISCORD_ID = "1418221224261193889";

async function fetchDiscordStatus() {
    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const data = await response.json();
        const statusDot = document.getElementById('discord-status');
        
        if (data.success) {
            const status = data.data.discord_status;
            statusDot.className = 'status-dot'; // Reset
            if (status === 'online') statusDot.classList.add('online');
            if (status === 'idle') statusDot.classList.add('idle');
            if (status === 'dnd') statusDot.classList.add('dnd');
        }
    } catch (error) {
        console.error("Lanyard Error:", error);
    }
}

// Check status every 30 seconds
setInterval(fetchDiscordStatus, 30000);
fetchDiscordStatus();

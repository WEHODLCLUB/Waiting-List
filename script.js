// Countdown Timer
const countdownElement = document.getElementById('timer');
const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    
    if (diff <= 0) {
        countdownElement.textContent = "00:00:00";
        return;
    }

    const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

    countdownElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCountdown, 1000);

// Text Encryption Effect
const crypticText = document.querySelector('.cryptic');
function scrambleText(element) {
    const text = element.textContent;
    const scrambled = text
        .split('')
        .map(() => Math.random() > 0.5 ? '█' : '▓')
        .join('');
    
    element.textContent = scrambled;

    setTimeout(() => {
        element.textContent = text;
    }, 1000);
}

setInterval(() => scrambleText(crypticText), 3000);

// Language Rotation
const languages = ["Access Pending...", "Доступ ожидается...", "访问待定...", "Acceso pendiente..."];
const glitchText = document.querySelector('.glitch-text');

setInterval(() => {
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    glitchText.textContent = randomLanguage;
}, 4000);

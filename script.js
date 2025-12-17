document.addEventListener('DOMContentLoaded', function() {
    
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    const skillsSection = document.getElementById('skillsSection');
    if (toggleSkillsBtn && skillsSection) {
        toggleSkillsBtn.addEventListener('click', () => {
            const hidden = skillsSection.style.display === 'none';
            skillsSection.style.display = hidden ? '' : 'none';
            toggleSkillsBtn.textContent = hidden ? 'Hide Skills' : 'Show Skills';
        });
    }

    const msgBox = document.getElementById('msgBox');
    const counter = document.getElementById('counter');
    if (msgBox && counter) {
        const updateCounter = () => {
            const left = msgBox.maxLength - msgBox.value.length;
            counter.textContent = `${left} characters remaining`;
        };
        msgBox.addEventListener('input', updateCounter);
        updateCounter();
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.getElementById('nameField').value.trim();
            const email = document.getElementById('emailField').value.trim();
            if (!name || !email) {
                alert('Please fill in both Name and Email before sending.');
                e.preventDefault();
            }
        });
    }

    const dateDisplay = document.getElementById('dateDisplay');
    if (dateDisplay) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay.textContent = `WebProg - ${now.toLocaleDateString(undefined, options)}`;
    }

    const quotes = [
        "Keep going — small steps every day.",
        "Code. Break. Fix. Repeat.",
        "Mistakes are proof you're trying.",
        "Stay curious and build stuff.",
        "Learning is the real flex."
    ];
    const quoteBtn = document.getElementById('quoteBtn');
    const quoteDisplay = document.getElementById('quoteDisplay');
    if (quoteBtn && quoteDisplay) {
        quoteBtn.addEventListener('click', () => {
            const q = quotes[Math.floor(Math.random() * quotes.length)];
            quoteDisplay.textContent = q;
        });
    }

    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        const hour = new Date().getHours();
        const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
        greetingEl.textContent = `${greet} — About Me`;
    }

});

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const darkModeKey = 'dark-mode-enabled';

if (toggleButton) {
    // 1. Check for user preference on page load
    const savedTheme = localStorage.getItem(darkModeKey);

    if (savedTheme === 'true') {
        body.classList.add('dark-mode');
    }

    // Function to update button text
    const updateButtonText = (isDark) => {
        toggleButton.textContent = isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    };

    // 2. Add event listener to the button
    toggleButton.addEventListener('click', () => {
        // Toggle the 'dark-mode' class on the body
        body.classList.toggle('dark-mode');

        // Check the current state and save preference to local storage
        const isDarkMode = body.classList.contains('dark-mode');
        
        localStorage.setItem(darkModeKey, isDarkMode ? 'true' : 'false');
        
        updateButtonText(isDarkMode);
    });

    // 3. Set initial button text based on loaded theme
    const isInitialDark = body.classList.contains('dark-mode');
    updateButtonText(isInitialDark);
}
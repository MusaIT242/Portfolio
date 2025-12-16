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
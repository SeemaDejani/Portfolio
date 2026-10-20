
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
    bodyElement.classList.toggle('light-theme');
    
    
    if (bodyElement.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Switch Theme';
    } else {
        themeToggleBtn.textContent = 'Switch Theme';
    }
});


const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! Your message has been received.');
        contactForm.reset();
    });
}
const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevents leaving the website page
    
    const data = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        alert("Thank you! Your message has been sent successfully. 📜✨");
        form.reset(); 
    } else {
        alert("Oops! There was a problem sending your message. Please try again.");
    }
});
/ Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Add dynamic updates if needed
document.getElementById('hero').addEventListener('mouseover', () => {
    console.log("Welcome to SmartFit Backpack!");
});

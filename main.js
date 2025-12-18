
// Simple interaction for the mobile toggle (if I were to implement it fully)
document.querySelector('.mobile-toggle').addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.width = '100%';
    nav.style.background = 'white';
    nav.style.borderBottom = '4px solid black';
    nav.style.padding = '20px';
});

console.log("Penguin Artworks Loaded. Brutalism activated.");

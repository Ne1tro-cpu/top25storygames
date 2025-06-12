function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const btn = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = '☀️';
        btn.setAttribute('aria-label', 'Pārslēgt gaišo režīmu');
    } else {
        btn.textContent = '🌙';
        btn.setAttribute('aria-label', 'Pārslēgt tumšo režīmu');
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = '☀️';
        btn.setAttribute('aria-label', 'Pārslēgt gaišo režīmu');
    } else {
        btn.textContent = '🌙';
        btn.setAttribute('aria-label', 'Pārslēgt tumšo režīmu');
    }
    document.querySelectorAll('.game-list li').forEach(li => {
        const bg = li.getAttribute('data-bg');
        if (bg) li.style.backgroundImage = `url('${bg}')`;
    });
});

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);


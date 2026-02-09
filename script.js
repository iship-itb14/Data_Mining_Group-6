// TAB SWITCHING
const tabLinks = document.querySelectorAll('.tab-link');
const tabSections = document.querySelectorAll('.tab-section');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active from all links & sections
        tabLinks.forEach(l => l.classList.remove('active'));
        tabSections.forEach(s => s.classList.remove('active'));

        // Activate clicked tab
        link.classList.add('active');
        document.getElementById(link.dataset.tab).classList.add('active');
    });
});



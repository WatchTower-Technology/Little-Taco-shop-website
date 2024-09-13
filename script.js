document.addEventListener('DOMContentLoaded', () => {
    const backToTopLinks = document.querySelectorAll('.back-to-top');

    backToTopLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});

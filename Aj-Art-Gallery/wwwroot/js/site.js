const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
        return;
    }

    if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)'; // hide
    } else {
        header.style.transform = 'translateY(0)'; // show instantly when scrolling up
    }

    lastScroll = currentScroll;
});
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', async e => {
        e.preventDefault();
        const url = e.target.closest('a').href;
        const res = await fetch(url);
        const html = await res.text();
        const newContent = html.match(/<main[\s\S]*<\/main>/)[0];
        document.querySelector('#main-content').outerHTML = newContent;
        window.history.pushState({}, '', url);
    });

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

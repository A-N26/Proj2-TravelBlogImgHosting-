const navbar = document.querySelector('#mainNavbar');
window.onscroll = () => {
    if (window.scrollY > 3) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};


//for login & signup images
gsap.from(".bg-img", {
  duration: 2.5,
  opacity: 0,
  ease: "sine.out",
  y: -500,
});

//for hero text
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero"
  }
});
tl.from(".hp-welcome", { y: 250, opacity: 0, duration: 1.8 })
tl.from(".hp-welcome-intro", { y: 150, opacity: 0, duration: 1.4 })

//for navbar
const navbar = document.querySelector('#mainNavbar');
window.onscroll = () => {
  if (window.scrollY > 3) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

//for pull page
new fullpage("#fullPage", {
  autoScrolling: true,
  scrollBar: true,
  navigation: true,
  fadingEffect: true,
  credits: { enabled: false, label: 'Made with fullPage.js', position: 'right' },
})
//for login & signup images
gsap.from("#intro-img-login", {
  duration: 2.5,
  opacity: 0,
  ease: "sine.out",
  y: -500,
});

gsap.from("#intro-img-register", {
  duration: 2.5,
  opacity: 0,
  ease: "sine.out",
  y: 500,
});

//for intropage
TweenMax.from(".intro-sec-text1", 2, {
  delay: 0.2,
  y: 30,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".intro-sec-text2", 2, {
  delay: 3,
  y: 30,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".intro-sec-text3", 2, {
  delay: 5,
  y: 30,
  opacity: 0,
  ease: Expo.easeInOut
});

//for brandname
TweenMax.from("#brand-name", 2, {
  y: -20,
  opacity: 0,
  ease: Expo.easeInOut
});


//for mad-traveller
TweenMax.from("#mad-travellers", 2, {
  delay: 1,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

//for blog-cards
TweenMax.from(".card", 2, {
  delay: 0,
  y: 150,
  opacity: 0,
  ease: Expo.easeInOut
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
gsap.from(".bg-img", {
  duration: 2.5,
  opacity: 0,
  ease: "sine.out",
  y: -500,
});

// for hero text
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero"
  }
});
// tl.from(".text-container", {y: 250, opacity: 0, duration: 3})
tl.from(".hp-welcome", {y: 250, opacity: 0, duration: 1.8})
tl.from(".hp-welcome-intro", {y: 150, opacity: 0, duration: 1.4})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
 content: ".card",
 smooth: 3,
 effects: true
});
// console.log('Hello World');
// const word = "Prahlad Ranjit";
// let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1});
// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

gsap.from(".rule", { scaleX: 0.006, duration: 2.5, ease: "circ.out" });
gsap.to(".rule", { scaleY: 500, duration: 3, delay: 2.5});
gsap.from(".navbar", { opacity:0, duration: 1, delay: 3.5});
gsap.to(".intro", { opacity:0, duration: 1, delay: 3.5});
// tl.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 })



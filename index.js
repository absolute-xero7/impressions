// console.log('Hello World');
// const word = "Prahlad Ranjit";
// let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1});
// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });




let intro = gsap.timeline();
intro
    .from(".rule", { scaleX: 0.006, duration: 1, ease: "circ.out" })
    .to(".rule", { width: "100vw", height: "100vh", duration: 1, force3d: false})
    .from(".navbar", { opacity:0, duration: 1},)
    .to(".intro", { opacity:0, duration: 1}, "<")

gsap.registerPlugin(ScrollTrigger);


gsap.from(".logos img", {scrollTrigger: ".logos img", x: 1000, duration: 1, ease: "power1.out", stagger: 0.1});
gsap.from(".category-points li", {scrollTrigger: ".category-points li", x: -1000, duration: 1, ease: "power1.out", stagger: 0.2});
gsap.from(".about", {scrollTrigger: ".about", x: -1000, duration: 1, ease: "power1.out", stagger: 0.3});
gsap.to(".contacts img", {scrollTrigger: ".contacts img", rotation:"360_cw", duration: 1, stagger: 0.3});

    // tl.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 })



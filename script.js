// gsap.from('.header',{ duration: 1.3, y: -100, ease: "bounce.out"})
// gsap.from('.link',{ duration: 1, opacity:0, delay:1})
// gsap.from('.rightnav',{ duration: 2, x: '-100vw', ease: "power2.inOut", delay:1})
// gsap.from('.leftnav',{ duration: 1, x: -200, ease: "power2.inOut", delay:2})
// gsap.from('.footer',{ duration: 1, y: 100, ease: "bounce.out", delay:3})
// gsap.fromTo('.button',{ duration:1, opacity:0, scale:0, rotate:720},{opacity:1, scale:1 , rotate:0})


const timeline = gsap.timeline({defaults:{duration:1}})
timeline.from('.header',{ y: -100, ease: "bounce.out"})
.from('.link1, .link2, .link3',{opacity:0, stagger:.2})
.from('.rightnav',{x: '-100vw', ease: "power2.inOut"},2)
.from('.leftnav',{ x: -200, ease: "power2.inOut"},'<.5')
.from('.footer',{ y: 100, ease: "elastic"})
.fromTo('.button',{ opacity:0, scale:0, rotate:720},{opacity:1, scale:1 , rotate:0})

const button = document.querySelector('.button')

button.addEventListener('click',()=>{
    timeline.timeScale(3)
    timeline.reverse();
})


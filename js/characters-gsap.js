// Importing the GSAP library and the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Select all sections and create a horizontal scroll effect
    const sections = gsap.utils.toArray('section');
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            start: 'top top',
            end: 3000,
        }
    });

    // Change background color and text color
    gsap.from('body', {
        backgroundColor: 'black',
        color: 'white',
        scrollTrigger: {
            trigger: '.kris',
            start: 'bottom center',
            end: '+=250',
            scrub: 0.5,
        },
    });

    // Animate line  from left to right
    gsap.from('.line', {
        x: "-300vh",
        duration: 1,
    });

    // Resizes logo title element on scroll
    gsap.to('.logo', {
        fontSize: '2.5rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.logo',
            start: 'top top',
            end: 1500,
            scrub: 0.5,
        }
    });

    // Adjust height of line on scroll
    gsap.to('.line', {
        height: '10rem',
        scrollTrigger: {
            trigger: '.line',
            scrub: 0.5,
            start: 'center center',
            end: 2000,
        }
    });

    // Loop through each character and animate its text
    document.querySelectorAll('.character').forEach(el => {
        // Animate '.caption' element position
        gsap.to(el.querySelector('.caption'), {
            x: 0,
            y: 0,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.caption'),
                start: 'top bottom',
                end: '+=1000',
                scrub: 0.5,
            }
        });

        // Animate '.quote' element position
        gsap.to(el.querySelector('.quote'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.quote'),
                start: 'top bottom',
                end: '+=20%',
                scrub: 0.5,
            }
        });

        // Animate '.nickname' element position
        gsap.to(el.querySelector('.nickname'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.nickname'),
                start: 'top bottom',
                end: '+=10%',
                scrub: 0.5,
            }
        });

        // Animate '.block' element position
        gsap.to(el.querySelector('.block'), {
            x: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.block'),
                start: 'top bottom',
                end: '+=' + window.innerWidth,
                scrub: 0.5,
            }
        });

        // Animate 'img' element position
        gsap.to(el.querySelector('img'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('img'),
                start: 'top bottom',
                end: '+=50%',
                scrub: 0.5,
            }
        });

        // Animate '.huge-text' element position
        gsap.to(el.querySelector('.huge-text'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.huge-text'),
                start: 'top bottom',
                end: '+=100%',
                scrub: 0.5,
            }
        });
    });
});

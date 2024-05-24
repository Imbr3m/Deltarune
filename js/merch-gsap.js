gsap.registerPlugin(ScrollTrigger);


document.addEventListener('DOMContentLoaded', () => {


  // header SCROLLTRIGGER
  gsap.set('.header__content .btn', {
    opacity: 0,
  })

  
  gsap.from('#header-img', {
    delay: 8,
    opacity: 0,
    x: '50vw',
    duration: 1.5,
  })
  gsap.from('header', {
    delay: 8,
    backgroundColor: 'white',
    duration: 1,
  })

  gsap.from('.header__content h1', {
    delay: 9.5,
    x: '-10vw',
    opacity: 0,
  })
  gsap.from('.header__content p', {
    delay: 10,
    x: '-10vw',
    opacity: 0,
  })
  gsap.to('.header__content .btn', {
    delay: 10,
    opacity: 1,
  })




  // Section 1
  const box = document.querySelector('.section_container_image');

  box.addEventListener('mouseenter', () => {
      gsap.to(box, { 
        duration: 0.5, backgroundColor: '#5157614' });
  });
  box.addEventListener('mouseleave', () => {
      gsap.to(box, { duration: 0.5, backgroundColor: 'white' });
  });
  

      // SPINNING SPAMTON
  gsap.to(".section_container_image img", {
    rotate: 1000,
    scrollTrigger: {
      trigger: "body",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      
    }
  })


  // Section 2
  gsap.set(".ribbon-container", {
    rotate: -6,
    scale: 1.5,
  })

  gsap.to(".onsale", {
    xPercent: -100,
    scrollTrigger: {
      trigger: "body",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    }
  });

  gsap.fromTo('body', 
  { backgroundColor: 'white' }, 
  { 
      backgroundColor: 'black', 
      scrollTrigger: {
          trigger: ".salebox",
          start: "-10% center",
          end: "100% center",
          markers: true,
          toggleActions: "play reverse play reverse"
      }
  });


  // SECTION 3
  // must buy GSAP

  // Select all the lift-up images
  const liftUpImages = document.querySelectorAll('.lift-up');

  // Loop through each image
  liftUpImages.forEach(img => {
    // Add event listener for mouseenter
    img.addEventListener('mouseenter', () => {
      // Lift up animation
      gsap.to(img, { duration: 0.3, y: -10, ease: "power2.out" });
    });

    // Add event listener for mouseleave
    img.addEventListener('mouseleave', () => {
      // Bring back to original position
      gsap.to(img, { duration: 0.3, y: 0, ease: "power2.out" });
    });
  });
})



const cards = document.querySelectorAll('.musthave__card');

cards.forEach(card => {
  const defaultImg = card.querySelector('.default-img');
  const hoverImg = card.querySelector('.hover-img');

  card.addEventListener('mouseenter', () => {
    defaultImg.style.opacity = 0;
    hoverImg.style.opacity = 1;
  });

  card.addEventListener('mouseleave', () => {
    defaultImg.style.opacity = 1;
    hoverImg.style.opacity = 0;
  });
});

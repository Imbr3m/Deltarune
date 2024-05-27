// importing the gsap library
// its a bit long because of the amount of animations i tried ti implement


// Will run function if the DOM content is loaded:
document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".container", {
    y: "120vh",
    boxShadow: "0px 10px 20px black",
  })

// DELTARUNE LOGO ANIMATION
  gsap.set(".logo", {
    y: "-10vh",
  })
  gsap.from(".logo", {
    opacity: 0,
    duration: 3,
  })
  gsap.to(".logo", {
    y: "-50vh",
    scale: 0.34,
    ease: "none",
    scrollTrigger: {
      trigger: ".castle",
      start: "top 500vh",
      end: "100vh 400vh",
      scrub: 1,
    }
  })
  gsap.to(".logo", {
    y: "-50vh",
    scale: 0.34,
    ease: "none",
    scrollTrigger: {
      trigger: ".castle",
      start: "top 500vh",
      end: "100vh 400vh",
      scrub: 1,
    }
  })
  gsap.fromTo(".logo", 
  { 
    opacity: 1 
  }, 
  { 
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".castle",
      start: "center 500vh",
      end: "center 400vh",
      scrub: 1,
    }
  });




  // CASTLE ANIMATION
  gsap.to(".castle", {
    y: "-25%",
    ease: "none",
    scrollTrigger: {
      trigger: ".castle",
      start: "top top",
      end: "200vh top",
      scrub: 1,
      
    }
  })
  // Door opening
  gsap.to(".door img", {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".castle",
      start: "300vh 400vh",
      end: "350vh 400vh",
      scrub: 0.5,
    }
  })
  // Blur
  gsap.to("#castle-img", {
    filter: "blur(10px)",
    ease: "none",
    scrollTrigger: {
      trigger: ".castle",
      start: "600vh 500vh",
      end: "1000vh 600vh",
      scrub: 1,
    }
  })
  // zoom
  gsap.to(".castle", {
    transformOrgin: "center, 600vh",
    scale: 45,
    ease: "ease",
    scrollTrigger: {
      trigger: ".castle",
      start: "500vh 500vh",
      end: "2000vh 500vh",
      scrub: 1,
      
    }
  })
  // make castle dissaper
  gsap.to(".castle", {
    opacity: 0,
    duration: 1,
    display: "none",
    scrollTrigger: {
      trigger: ".castle",
      start: "700vh 330vh",
      end: "720vh 600vh",
      scrub: true,
      
    }
  })
  // hides the gradient
  gsap.to(".gradient", {
    y: "-400vh",
    ease: "ease",
    scrollTrigger: {
      trigger: ".castle",
      start: "500vh 500vh",
      end: "800vh 500vh",
      scrub: 1,
    }
  })

  // CASTLE GSAP END




// NAV GSAP ANIMATION
  gsap.from("nav", {
    opacity: 0,
    y: "-100%",
    scrollTrigger: {
      trigger: ".landing-page",
      start: "top 100vh",
      end: "top 100vh",
      scrub: 1,
    },
  })
  // gsap nav end





  // Landing page gsap
  gsap.from(".video-title", {
    opacity: 0,
    y: "15vh",
    scrollTrigger: {
      trigger: ".landing-page",
      start: "top 100vh",
      end: "top 100vh",
      scrub: 1,
    }
  })
  gsap.from(".video-container", {
    opacity: 0,
    y: "15vh",
    scrollTrigger: {
      trigger: ".landing-page",
      start: "top 150vh",
      end: "top 150vh",
      scrub: 3,
    }
  })
  gsap.to(".landing-page", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".landing-page",
      start: "400vh top",
      end: "500vh top",
      scrub: 1,
      
    }
  })
  // gsap Landing page end
  



  
// BLASTER
  const blasterTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".about", 
      start: "-500vh center",
      end: "-500vh center", 
    }
  });
  blasterTL.to("#blaster1", { 
    opacity: 1,
    duration: 0, 
  })
  .fromTo("#blaster1", { 
    opacity: 0, 
  }, {
    opacity: 1, 
    duration: 1,
    ease: "power1.inOut" 
  })
  .to("#blaster1", {
    x: "-100vw",
    delay: "-0.5",
    duration: 3, 
    ease: "power2.inOut", 
    rotation: -70,
    scale: 2.5,
    onComplete: function() {
      document.getElementById("blaster1").src = "imgs/blaster2.png";
    }
  })
  .to(".about", {
    delay: "-1",
    height: "70%",
    duration: 0.5, 
    ease: "power2.inOut", 
  })
  .to("#blaster1", {
    rotate: 0,
    scale: 1,
    x: "40vw",
    y: "180vh",
    duration: 3,
    ease: "power2.inOut", 
  });
// GSAP BLASTER END
    




// about gsap
  gsap.set( ".about", {
    opacity: 1,
    rotate: 7,
    height: "0%",
  })
  gsap.to( ".about", {
    rotate: 0,
    scrollTrigger: {
      trigger: ".about", 
      start: "-50% center",
      end: "350% center", 
      scrub: 1,
    }
  })
  // about GSAP END




  // FEATURE
  gsap.from( ".featuring .title", {
    y: "-10vh",
    opacity: 0,
    scrollTrigger: {
      trigger: ".featuring", 
      start: "10% center",
      end: "30% center", 
      
    }
  })
  gsap.set( ".featuring ", {
    opacity: 0,
  })
  gsap.to( ".featuring ", {
    y: "-10vh",
    opacity: 1,
    scrollTrigger: {
      trigger: ".featuring", 
      start: "top center",
      end: "20% center", 
      scrub: 1,
    }
  })
  gsap.to( ".featuring-wrapper ", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".featuring", 
      start: "center center",
      end: "bottom center", 
      scrub: true,
      
    }
  })

  // feature gsap end





  // kris susie running
  gsap.set(".run", {
    x: "-200vh",
    y: "-50vh",
    rotation: 20,
  })
  gsap.to(".run", {
    x: "200vh",
    y: "150vh",
    duration: 5 ,
    scrollTrigger: {
      trigger: ".run",
      start: "500vh center",
      end: "500vh center", 
    }
  })
  // Running gspa end





  // animation gallery gsap
  // text1
  gsap.from(".animation-container .text1", {
    opacity: 0,
    y: "10vh",
    duration: 2,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "6.45% center",
      end: "8.29% center",
    }
  })
  // text2
  gsap.from(".animation-container .text2", {
    opacity: 0,
    y: "10vh",
    duration: 2,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "8.29% center",
      end: "10.37% center",
    }
  })
  // FIGHT BUTTON
  gsap.from(".animation-container .fight", {
    opacity: 0,
    duration: 10,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "14.75% center",
      end: "18.45% center",
      scrub: 1,   
    }
  })
  // pin
  gsap.to(".animation-container .fight", {
    scale: "1.05",
    scrollTrigger: {
      trigger: ".animation-container",
      start: "16.59% center",
      end: "bottom center",
      scrub: true,   
      pin: ".fight",
      pinSpacing: false,
    }
  })
  gsap.to(".animation-container .fight", {
    x: "-90%",
    scrollTrigger: {
      trigger: ".animation-container",
      start: "25.81% center",
      end: "27.59% center",
      scrub: 1,   
    }
  })
  // text3
  gsap.to(".animation-container .text3", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "70% center",
      end: "73% center",
      scrub: 1,
    }
  })


  // text4
  gsap.from(".animation-container .text4", {
    opacity: 0,
    y: "10vh",
    scrollTrigger: {
      trigger: ".animation-container",
      start: "73.15% center",
      end: "75% center",
      scrub: 1,
      markers: true,
    }
  })
  // MERCY BUTTON
  gsap.set(".animation-container .mercy", {
    opacity: 1,
  });
  gsap.from(".animation-container .mercy", {
    opacity: 0,
    duration: 10,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "85.19% center",
      end: "87.03% center",
      scrub: 1,   
    }
  });
  gsap.to(".animation-container .mercy", {
    scrollTrigger: {
      trigger: ".animation-container",
      start: "25.81% center",
      end: "27.59% center",
      scrub: 1,   
    }
  });


  // IMAGES
  gsap.to("#image1", 
    {
      opacity: 1,
      scrollTrigger: {
        trigger: "#image1",
        start: "start center",  
        end: "center center", 
        scrub: true,          
      }
    });
  gsap.to("#image2", 
    {
      opacity: 1,
      scrollTrigger: {
        trigger: "#image2",
        start: "start center",  
        end: "center center", 
        scrub: true,         
      }
    });
  gsap.to("#image3", 
    {
      opacity: 1,
      scrollTrigger: {
        trigger: "#image3",
        start: "start center",  
        end: "center center", 
        scrub: true,       
      }
    });
  gsap.to("#image4", 
    {
      opacity: 1,
      scrollTrigger: {
        trigger: "#image4",
        start: "start center",  
        end: "center center", 
        scrub: true,       
      }
    });
  // Gsap gallery end





// DOWNLOAD
  gsap.from("#download", 
  {
    opacity: 0,
    scale: 1.1,
    duration: 3,
    scrollTrigger: {
      trigger: "#download",
      start: "top center",  
      end: "top center", 
    }
  });

});
// Dwonload end gsap
















// NOTES
// fix the or bug
// make .run run agin when scrolled start
// make background of gallery
// fix nav
// make features gallery
// make footer
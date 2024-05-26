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
  }
);


  


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

  // Video transition
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
  


// BLASTER
  const blasterTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".about", 
      start: "-500vh center",
      end: "-500vh center", 
    }
  });
// BL1
blasterTL.to("#blaster1", { 
    opacity: 1,
    duration: 0, 
  })
  .fromTo("#blaster1", { 
    opacity: 0, 
  }, {
    opacity: 1, // Fade in
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

    
// about 

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
      start: "700vh center",
      end: "700vh center", 
      
    }
  })


  // gallery
  // text1
  gsap.from(".animation-container .text1", {
    opacity: 0,
    y: "10vh",
    scrollTrigger: {
      trigger: ".animation-container",
      start: "350vh center",
      end: "450vh center",
      scrub: 1,
    }
  })
  // text2
  gsap.from(".animation-container .text2", {
    opacity: 0,
    y: "10vh",
    scrollTrigger: {
      trigger: ".animation-container",
      start: "450vh center",
      end: "550vh center",
      scrub: 1,   
    }
  })

  // FIGHT BUTTON
  gsap.from(".animation-container .fight", {
    opacity: 0,
    duration: 10,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "800vh center",
      end: "1000vh center",
      scrub: 1,   
    }
  })
  // pin
  gsap.to(".animation-container .fight", {
    scale: "1.05",
    scrollTrigger: {
      trigger: ".animation-container",
      start: "900vh center",
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
      start: "1400vh center",
      end: "1500vh center",
      scrub: 1,   
    }
  })


  // text3

  gsap.from(".animation-container .text3", {
    opacity: 0,
    // y: "10vh",
    scrollTrigger: {
      trigger: ".animation-container",
      start: "3800vh center",
      end: "3900vh center",
      scrub: 1,
      
    }
  })

  gsap.to(".animation-container .text3", {
    scrollTrigger: {
      trigger: ".animation-container",
      start: "1100vh center",
      end: "bottom center",
      scrub: true,   
      pin: ".text3",
      pinSpacing: false,
    }
  })

  gsap.to(".animation-container .text3", {
    scrollTrigger: {
      trigger: ".animation-container",
      start: "4900vh center",
      end: "bottom center",
      scrub: true,   
    }
  })



  // text4
  gsap.to(".animation-container .text4", {
    opacity: 0,
  })

  gsap.from(".animation-container .text4", {
    opacity: 0,
    y: "10vh",
    scrollTrigger: {
      trigger: ".animation-container",
      start: "4000vh center",
      end: "4100vh center",
      scrub: 1,
    }
  })

  gsap.from(".animation-container .text4", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "4400vh center",
      end: "4500vh center",
      scrub: 1,
      
    }
  })

  gsap.to(".animation-container .text4", {
    scrollTrigger: {
      trigger: ".animation-container",
      start: "1340vh center",
      end: "bottom center",
      scrub: true,   
      pin: ".text4",
      pinSpacing: false,
    }
  })

  // MERCy BUTTON
  gsap.set(".animation-container .mercy", {
    opacity: 1,
  });
  gsap.from(".animation-container .mercy", {
    opacity: 0,
    duration: 10,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "4600vh center",
      end: "4700vh center",
      scrub: 1,   
      
    }
  });
  // pin
  gsap.to(".animation-container .mercy", {
    scale: "1.05",
    scrollTrigger: {
      trigger: ".animation-container",
      start: "1544vh center",
      end: "bottom center",
      scrub: true,   
      pin: ".mercy",
      pinSpacing: false,
    }
  });
  gsap.to(".animation-container .mercy", {
    x: "90%",
    scrollTrigger: {
      trigger: ".animation-container",
      start: "1400vh center",
      end: "1500vh center",
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
        scrub: true,         // Smooth scrubbing
        markers: true,       // For debugging
      }
    });
  gsap.to("#image2", 
    {
      opacity: 1,
      scrollTrigger: {
        trigger: "#image2",
        start: "start center",  
        end: "center center", 
        scrub: true,         // Smooth scrubbing
        markers: true,       // For debugging
      }
    });
  gsap.to("#image3", 
    {
      opacity: 1,
      scrollTrigger: {
        trigger: "#image3",
        start: "start center",  
        end: "center center", 
        scrub: true,         // Smooth scrubbing
        markers: true,       // For debugging
      }
    });
  gsap.to("#image4", 
    {
      opacity: 1,
      scrollTrigger: {
        trigger: "#image4",
        start: "start center",  
        end: "center center", 
        scrub: true,         // Smooth scrubbing
        markers: true,       // For debugging
      }
    });


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
      markers: true,       // For debugging
    }
  });

});






// NOTES
// fix the or bug
// make .run run agin when scrolled start
// make background of gallery
// fix nav
// make features gallery
// make footer
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


  // GSAP STARS
  gsap.to(".star1", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.5, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star2", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.9, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star3", {
    duration: 1.5,
    opacity: 0, 
    delay: 1.2, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star4", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.1, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star5", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.78, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star6", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.4, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star7", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.5, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star8", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.5, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star9", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.3, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star10", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.7, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star11", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.1, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.to(".star12", {
    duration: 1.5,
    opacity: 0, 
    delay: 1.2, 
    repeat: "-1",
    yoyo: true,
  });
  gsap.from(".stars", {
    opacity: 0,
    y: "-25vh",
    scale: 10,
    delay: 1,
    scrollTrigger: {
      trigger: ".logo",
      start: "center 300vh",
      end: "400vh 300vh",
      scrub: 1,
    }
  })
    // zoom
  gsap.to(".stars", {
    transformOrgin: "center 500vh",
    scale: 40,
    ease: "ease",
    scrollTrigger: {
      trigger: ".castle",
      start: "500vh 500vh",
      end: "2000vh 500vh",
      scrub: 1,
    }
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
  
  // ABOUT SQUARE
  gsap.set(".about .square", {
    x: "45vh",
  })
  gsap.from(".about .square", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".about",
      start: "150vh center",
      end: "200vh center",
      scrub: 1,
    }
  })
  gsap.from(".about .square", {
    x: "-200vh",
    rotate: "-720",
    duration: 2,
    scrollTrigger: {
      trigger: ".about",
      start: "150vh center",
      end: "150vh center",
      
    }
  })
  gsap.to(".about .square", {
    rotate: 1000,
    scrollTrigger: {
      trigger: ".landing-page",
      start: "400vh top",
      end: "5500vh top",
      scrub: 1,
      
    }
  })
  gsap.to(".about .square", {
    scale: 10,
    scrollTrigger: {
      trigger: ".about",
      start: "center center",
      end: "center center",
      
      
    }
  })

// about
  gsap.to( ".about", {
    background: "linear-gradient(180deg, rgba(32,32,32,0) 0%, rgba(60,60,60,1) 30%, rgba(60,60,60,1) 70%, rgba(255,255,255,0) 100%)",
    scrollTrigger: {
      trigger: ".landing-page",
      start: "400vh top",
      end: "500vh top",
      scrub: 1,
    },
    
  });
  // about image jojo
  gsap.from(".about .img-container", {
    opacity: 0,
    x: 50,
    scrollTrigger: {
      trigger: ".about",
      start: "100vh center",
      end: "200vh center",
      scrub: 1,
      
      
    }
  })
  // text on the left 
  gsap.from(".about .text", {
    opacity: 0,
    x: "-50",
    scrollTrigger: {
      trigger: ".about",
      start: "150vh center",
      end: "200vh center",
      scrub: 1,   
 
    }
  })
  // about outro transition
  // gsap.to(".about", {
  //   opacity: 0,
  //   x: 50,
  //   scrollTrigger: {
  //     trigger: ".about",
  //     start: "550vh center",
  //     end: "800vh center",
  //     scrub: 1,
  //   }
  // })


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
      markers: true,
    }
  })


  // HEART
// gsap.set(".heart", {
//   x: "200vh",
//   y: "-20vh",
// })

// gsap.to(".heart", {
//   x: "5vh",
//   y: "20vh",

//   scrollTrigger: {
//     trigger: ".animation-container",
//     start: "top center",
//     end: "400vh center", 
//     markers: true,
//     scrub: 1,
//   }
// })




// gsap.set(".animation-container .text1", {
//   x: "50vh",
//   y: "20vh",
// })

// text1
gsap.from(".animation-container .text1", {
  opacity: 0,
  y: "10vh",
  scrollTrigger: {
    trigger: ".animation-container",
    start: "350vh center",
    end: "400vh center",
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
    end: "500vh center",
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
    markers: true,
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
  x: "100%",
})

gsap.from(".animation-container .text4", {
  opacity: 0,
  y: "10vh",
  scrollTrigger: {
    trigger: ".animation-container",
    start: "4000vh center",
    end: "4100vh center",
    scrub: 1,
    markers: true,
  }
})

gsap.from(".animation-container .text4", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".animation-container",
    start: "4400vh center",
    end: "4500vh center",
    scrub: 1,
    markers: true,
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
gsap.to(".animation-container .text4", {

})

// MERCy BUTTON
gsap.set(".animation-container .mercy", {
  opacity: 1,
})
gsap.from(".animation-container .mercy", {
  opacity: 0,
  duration: 10,
  scrollTrigger: {
    trigger: ".animation-container",
    start: "4600vh center",
    end: "4700vh center",
    scrub: 1,   
    markers: true,
  }
})
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
})
gsap.to(".animation-container .mercy", {
  x: "90%",
  scrollTrigger: {
    trigger: ".animation-container",
    start: "1400vh center",
    end: "1500vh center",
    scrub: 1,   
  }
})

// gallery imgs pls ahhhhh

// img 1
gsap.from(".gallery .frame #image1", {
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#image1",
    start: "-100vh center",
    end: "top center",
    scrub: 1,   
    markers: true, 
  }
})
gsap.from(".gallery .frame #image1", {
  opacity: 1,
  duration: 3,
  scrollTrigger: {
    trigger: "#image1",
    start: "bottom center",
    end: "bottom center",
    scrub: 1,   
    markers: true, 
  }
})

// img 2
gsap.from(".gallery .frame #image2", {
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#image2",
    start: "-100vh center",
    end: "top center",
    scrub: 1,   
    markers: true, 
  }
})
gsap.from(".gallery .frame #image2", {
  opacity: 1,
  duration: 3,
  scrollTrigger: {
    trigger: "#image2",
    start: "bottom center",
    end: "bottom center",
    scrub: 1,   
    markers: true, 
  }
})


// img 3
gsap.from(".gallery .frame #image3", {
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#image3",
    start: "-100vh center",
    end: "top center",
    scrub: 1,   
    markers: true, 
  }
})
gsap.from(".gallery .frame #image3", {
  opacity: 1,
  duration: 3,
  scrollTrigger: {
    trigger: "#image3",
    start: "bottom center",
    end: "bottom center",
    scrub: 1,   
    markers: true, 
  }
})


});

// NOTES
// fix the or bug
// make .run run agin when scrolled start
// make background of gallery
// fix nav
// make features
// make footer
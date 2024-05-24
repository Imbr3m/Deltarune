document.addEventListener("DOMContentLoaded", function() 
{
  const counter3 = document.querySelector(".counter-3");

  for(let i = 0; i < 2; i++) {
    for(let j = 0; j< 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }

  const finalDiv = document.createElement("div");
  finalDiv.className = "num";
  finalDiv.textContent = "0";
  counter3.appendChild(finalDiv);


  function animate(counter, duration, delay= 0) {
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight; 

    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }

  animate(counter3, 5); 
  animate(document.querySelector(".counter-2"), 6);
  animate(document.querySelector(".counter-1"), 2, 4);

});


// Disable scrolling initially
document.body.classList.add('no-scroll');

// Enable scrolling after 8 seconds
gsap.to({}, { duration: 8, onComplete: () => {
  document.body.classList.remove('no-scroll');
}});

gsap.to(".digit", {
  top: "-150px",
  stagger: { 
    amount: 0.25,
  },
  delay: 6,
  duration: 1,
  ease: "power4.inOut",
});

gsap.from(".loader-1", {
  width: 0,
  duration: 3,
  ease: "power2.inOut",
})

gsap.from(".loader-2", {
  width: 0,
  delay: 1.9,
  duration: 6,
  ease: "power2.inOut",
})


gsap.to(".loader", {
  scale: 40,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
})
gsap.to(".loading-screen", {
  opacity: 0,
  duration: 1,
  delay: 7.5,
  ease: "power2.inOut",
})

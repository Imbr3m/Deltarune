// JavaScript to handle background changes and feature highlights
let currentFeatureIndex = 0; // Keep track of the current feature index
const backgrounds = [
  "url('stylesheet/Assets/BG/preview1.webp')", 
  "url('stylesheet/Assets/BG/slide2.png')", 
  "url('stylesheet/Assets/BG/battleahaha.gif')",
  "url('stylesheet/Assets/BG/slide4.gif')",
  "url('stylesheet/Assets/BG/slide7.gif')",
  "url('stylesheet/Assets/BG/slide6.gif')",
  "url('stylesheet/Assets/BG/battle-bg.gif')",
  "url('stylesheet/Assets/BG/battle-bg.gif')",
  "url('stylesheet/Assets/BG/slide5.gif')",

];

// Function to change the background and highlight the current feature
function changeBackgroundAndHighlight() {
  const features = document.querySelectorAll(".list li");

  // Change background
  document.querySelector(".featuring").style.backgroundImage = backgrounds[currentFeatureIndex];

  // Remove highlight from all list items
  features.forEach((feature) => {
    feature.classList.remove("highlighted");
  });

  // Highlight the current feature
  features[currentFeatureIndex].classList.add("highlighted");
}

// Event listeners for arrow clicks
document.querySelector(".prev-arrow").addEventListener("click", function() {
  currentFeatureIndex = (currentFeatureIndex - 1 + backgrounds.length) % backgrounds.length;
  changeBackgroundAndHighlight();
});

document.querySelector(".next-arrow").addEventListener("click", function() {
  currentFeatureIndex = (currentFeatureIndex + 1) % backgrounds.length;
  changeBackgroundAndHighlight();
});

// Initial call to set the first background and highlight the first feature
changeBackgroundAndHighlight();


const box = document.querySelector('.featuring .boxing');
const list = document.querySelector('.featuring .list');


box.addEventListener('mouseenter', () => {
  gsap.to(box, { 
    duration: 0.5, 
    background: 'rgba(0, 0, 0, 0.7)' // Change background color on mouse enter
  });
  gsap.to(list, { 
    duration: 0.5, 
    opacity: 1 
  });
});

box.addEventListener('mouseleave', () => {
  gsap.to(box, { 
    duration: 0.5, 
    background: '#00000000' // Change background color back to original on mouse leave
  });
  gsap.to(list, { 
    duration: 0.5, 
    opacity: 0.5 
  });
});

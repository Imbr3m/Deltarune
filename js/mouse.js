// Check if it's a touch device
const createCursorFollower = () => {
  const $el = document.querySelector('.cursor-follower');
  // Each time the mouse coordinates are updated,
  // we need to pass the values to gsap in order
  // to animate the element
  window.addEventListener('mousemove', (e) => {
    const { target, x, y } = e;
    // Check if target is inside a link or button
    const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');
    // GSAP config
    gsap.to($el, {
      x: x + 3,
      y: y + 3,
      duration: 0.7,
      ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
      opacity: isTargetLinkOrBtn ? 0.6 : 1,
      transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
    });
  });
  // Hidding the cursor element when the mouse cursor
  // is moved out of the page
  document.addEventListener('mouseleave', (e) => {
    gsap.to($el, {
      duration: 0.7,
      opacity: 0,
    });
  });
};
// Only invoke the function if isn't a touch device
createCursorFollower();
window.addEventListener("scroll", function() {
  let windowHeight = window.innerHeight;
  let documentHeight = document.body.clientHeight;
  let scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  // Calculate how far the user has scrolled from the bottom of the document
  let scrollFromBottom = documentHeight - scrollPosition - windowHeight;

  // Define a threshold value (e.g., 100 pixels) to trigger the stop
  let threshold = 900;

  // If the scroll position is close to the bottom of the document, force stop scrolling
  if (scrollFromBottom <= threshold) {
      // Prevent the default behavior of the scroll event
      event.preventDefault();
  }
});

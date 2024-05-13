document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById('trailer');
  var playButton = document.getElementById('play-button');

  // Function to toggle play/pause when clicking on the video
  video.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playButton.style.display = 'none'; // Hide the play button once video starts playing
    } else {
      video.pause();
      playButton.style.display = 'block'; // Show the play button again
    }
  });

  // Function to show/hide play button based on video playback state
  video.addEventListener('play', function() {
    playButton.style.display = 'none';
  });
  video.addEventListener('pause', function() {
    playButton.style.display = 'block';
  });

  // Function to toggle play/pause when clicking the play button
  playButton.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playButton.style.display = 'none';
    } else {
      video.pause();
      playButton.style.display = 'block';
    }
  });
});

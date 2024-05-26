// declaring  variables
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const musicContainer = document.getElementById('music_modal_container');
const audio = document.getElementById('audio');
const currentTimeElement = document.getElementById('currentTime');
const durationElement = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress_bar');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const artist = document.querySelector('.artist');

let musicNo = document.querySelectorAll(".music_no");

// declaring songs, artist, and bg-color 
const songs = ['BIG SHOT', 'Attack of the Killer Queen', 'Beginning', 'Field of Hopes and Dreams', 'Rude Buster'];
const artists = ['BIG SHOT', 'Attack of the Killer Queen', 'Beginning', 'Field of Hopes and Dreams', 'Rude Buster']; 
const bgColor = ['#FFFF46', '#FF1D56', '#01C5FF', '#009A98', '#87186A']; 

// index for song artist adn bg color
let songIndex = 0;
let artistIndex = 0;
let bgColorIndex = 0;

// loads the current song
loadSong(songs[songIndex], artists[artistIndex], bgColor[bgColorIndex]);

// loadsong function
function loadSong(song, artistName, bgColorName) {

  title.innerText = song;

  artist.innerText = "Toby Fox";
  
  audio.src = `stylesheet/Assets/music/${song}.mp3`;
  cover.src = `imgs/covers/${song}.jpg`

  musicNo.forEach(el => {
    el.innerText = "0" + (songIndex + 1); 
  });

  audio.addEventListener('loadedmetadata', function () {
    updateDuration();
  });

  audio.addEventListener('timeupdate', function () {
    updateCurrentTime();
  });


  // GSAP ANIMATION
  gsap.from(cover, {
    duration: 1,
    opacity: 0.8,
    scale: 1.25,
    ease: "EaseInOut",
  })

  gsap.from(title, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "EaseInOut",
  })

  gsap.from(artist, {
    duration: 0.75,
    opacity: 0,
    y:40,
    ease: "EaseInOut",
  })


  gsap.to(musicContainer, {
    duration: 1,
    backgroundColor: bgColorName,
    ease: "EaseInOut",
  })

  gsap.from(".music_no", {
    duration: 0.75,
    stagger: 0.1,
    opacity: 0,
    y: 30,
    ease: "EaseInOut",
  })
}

// play song function buttons and stuff
function playSong() {
  musicContainer.classList.add('play');
  document.getElementById('pause_btn').style.display = "block";
  document.getElementById('play_btn').style.display = "none";

  audio.play();

}

function pauseSong() {
  musicContainer.classList.remove('play');
  document.getElementById('pause_btn').style.display = "none";
  document.getElementById('play_btn').style.display = "block";

  audio.pause();

}

// isAnimating makes the set time know if the animation is finished
let isAnimating = false;

// previous function
function prevSong() {
  if (isAnimating) return;
  isAnimating = true;

  // decrements songs from the list
  songIndex--;
  artistIndex--;
  bgColorIndex--;

  // if song reachest the end of the list it chooses the song in front
  if (songIndex < 0) {
    songIndex = songs.length-1;
  }
  if (artistIndex < 0) {
    artistIndex = artists.length-1;
  }
  if (bgColorIndex < 0) {
    bgColorIndex = bgColor.length-1;
  }

  // album cover animation on theleft
  artists.forEach(el => {
    if (el === artists[artistIndex]) {
      let albumCover = el.replace(/\s/g, '');
      gsap.to(`#${albumCover}`, {
        duration: 0.75,
        y: -20,
        opacity: 1,
        ease: "EaseInOut",
      });
    } else {
      let albumCover = el.replace(/\s/g, '');
      gsap.to(`#${albumCover}`, {
        duration: 0.75,
        y: 0,
        opacity: 0.5,
        ease: "EaseInOut",
      });
    }
  });

  // loads and play the song
  loadSong(songs[songIndex], artists[artistIndex], bgColor[bgColorIndex]);
  playSong();

  // set time out so animations could load
  setTimeout(() => {
    isAnimating = false;
  }, 1000);
}

// next function
function nextSong() {
  if (isAnimating) return;
  isAnimating = true;

  // next songs from the list
  songIndex++;
  artistIndex++;
  bgColorIndex++;

  // if song reaches the end it will go back to the start of the list
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  if (artistIndex > artists.length - 1) {
    artistIndex = 0;
  }
  if (bgColorIndex > bgColor.length - 1) {
    bgColorIndex = 0;
  }

  // gsap animation for album cover on the left
  artists.forEach(el => {
    if (el === artists[artistIndex]) {
      let albumCover = el.replace(/\s/g, '');
      gsap.to(`#${albumCover}`, {
        duration: 0.75,
        y: -20,
        opacity: 1,
        ease: "EaseInOut",
      });
    } else {
      let albumCover = el.replace(/\s/g, '');
      gsap.to(`#${albumCover}`, {
        duration: 0.75,
        y: 0,
        opacity: 0.5,
        ease: "EaseInOut",
      });
    }
  });

  // loads and plays the song
  loadSong(songs[songIndex], artists[artistIndex], bgColor[bgColorIndex]);
  playSong();

  setTimeout(() => {
    isAnimating = false;
  }, 1000); 
}


// proggress bar thingie
function updateProgress(e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime/duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX /width) * duration;
}



// event listners
// pause/play button event liser
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
// event listners when buttons pressed (corresponding functions will play)
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// updates the time depending on the audio
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

// plays the next song if audio ended
audio.addEventListener('ended', nextSong);



// update time function
function updateDuration() {
  const duration = formatTime(audio.duration);
  durationElement.textContent = duration;
}
function updateCurrentTime() {
  const currentTime = formatTime(audio.currentTime);
  currentTimeElement.textContent = currentTime;
}
function formatTime(time) {
  const minutes = Math.floor(time/ 60);
  const seconds = Math.floor(time % 60);
  return`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}




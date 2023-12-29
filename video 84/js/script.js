console.log("Let start javascript");
let currSong = new Audio();
let currFolder;
let songs = [];
let play = document.querySelector(".playState");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

function secondsToMinutesAndSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  // Add leading zeros if necessary
  minutes = minutes < 10 ? "0" + minutes : minutes;
  remainingSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  return minutes + ":" + remainingSeconds;
}

async function getSongs(folder) {
  let a = await fetch(`/${folder}/`);
  currFolder = folder;
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  songs = [];
  for (let i = 0; i < as.length; i++) {
    if (as[i].href.endsWith(".mp3")) {
      songs.push(as[i].href.split(`/${folder}/`)[1]);
    }
  }

  let songUL = document
    .querySelector(".song-list")
    .getElementsByTagName("ul")[0];
  songUL.innerHTML = "";
  for (const song of songs) {
    songUL.innerHTML += `<li> 
                <img class="invert" src="svg/music.svg" alt="music">
                <div class="info">
                  <div class="song-name">${song.replaceAll("%20", " ")}</div>
                  <div class="artist-name">Shashank</div>
                </div>
                <div class="playNow">
                  <span>Play Now</span>
                  <img src="svg/playBtnForPlaylist.svg" alt="ellipsis">
                </div> 
        </li>`;
  }

  //Attach an event listner to each song
  Array.from(
    document.querySelector(".song-list").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", () => {
      // console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
      play.src = "svg/pauseBtnForPlayBar.svg";
    });
  });
  return songs
}

const playMusic = (track, pause = false) => {
  // let audio = new Audio("/songs/" + track);
  currSong.src = `/${currFolder}/` + track;
  // console.log(currSong.src, currSong.duration);
  if (!pause) {
    currSong.play();
  }
  document.querySelector(".song-info").innerHTML = decodeURI(track);
  document.querySelector(".song-duration").innerHTML =
    "00:00 /   " + secondsToMinutesAndSeconds(currSong.duration);
};

const displayAlbum = async () => {
  let a = await fetch(`/songs/`);
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");
  let array = Array.from(anchors);
  for (const e of array) {
    if (e.href.includes("/songs")) {
      let folder = e.href.split("/").slice(-2)[0]; 
      // get the meta data of the folder
      let a = await fetch(
        `/songs/${folder}/info.json`
      );
      let response = await a.json();
      // console.log(response);

      // displaying the cards
      document.querySelector(".card-container").innerHTML += `
      <div data-folder="${folder}" class="card">
      <div class="play">
        <img src="svg/playBtn.svg" alt="play-Btn" />
      </div>
      <img
        src="/songs/${folder}/cover.jpg"
        alt=""
      />
      <h4>${response.title}</h4>
      <p>${response.description}</p>
    </div>
      `;
    }
  }
  // loading the playlist whenever the card is clicked
  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    e.addEventListener("click", async (item) => { 
      songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`); 
      playMusic(songs[0]);
      play.src = "svg/pauseBtnForPlayBar.svg";
    });
  }); 
};

//show all the song in the playlist
async function main() {
  // display all the folders on the page
  await displayAlbum();

  await getSongs(`songs/cs`);

  playMusic(songs[0], true);

  // Attach an event listner to play , next and previous

  // console.log(play)
  play.addEventListener("click", () => {
    if (currSong.paused) {
      play.src = "svg/pauseBtnForPlayBar.svg";
      currSong.play();
    } else {
      play.src = "svg/playBtnForPlayBar.svg";
      currSong.pause();
    }
  });

  previous.addEventListener("click", () => {
    let index = songs.indexOf(currSong.src.split("/").slice(-1)[0]);
    if (index - 1 >= 0) {
      playMusic(songs[index - 1]);
    }
  });

  next.addEventListener("click", () => {
    let index = songs.indexOf(currSong.src.split("/").slice(-1)[0]);
    if (index + 1 < songs.length) {
      playMusic(songs[index + 1]);
    }
  });

  // Listen for time update event
  currSong.addEventListener("timeupdate", () => {
    document.querySelector(
      ".song-duration"
    ).innerHTML = `${secondsToMinutesAndSeconds(
      Math.floor(currSong.currentTime)
    )} / ${secondsToMinutesAndSeconds(Math.floor(currSong.duration))}`;
    document.querySelector(".circle").style.left = `${
      (currSong.currentTime / currSong.duration) * 99
    }%`;
  });

  // Adding event listner to seekBar
  document.querySelector(".seek-bar").addEventListener("click", (e) => {
    // console.log(document.querySelector(".seek-bar").offsetWidth,e.offsetX)
    let percent =
      (e.offsetX / document.querySelector(".seek-bar").offsetWidth) * 100;
    currSong.currentTime = (currSong.duration / 99) * percent;
  });

  // add event listner for hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });

  // add event listner for close btn
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
  });

  // add event listner for volume btn
  document.querySelector(".volume").addEventListener("mouseover", () => {
    document.querySelector("#range").style.display = "block";
  });
  document.querySelector(".volume").addEventListener("mouseout", () => {
    document.querySelector("#range").style.display = "none";
  });

  //add event listner for volume using range
  document.querySelector("#range").addEventListener("input", () => {
    // console.log(document.querySelector("#range").value)
    let e = document.querySelector(".volume img"); 
    if(document.querySelector("#range").value == 0){
      e.src = e.src.replace("svg/volume.svg","svg/volumeMute.svg")
    }else{
      e.src = e.src.replace("svg/volumeMute.svg","svg/volume.svg")
    }
    currSong.volume = document.querySelector("#range").value / 100;
  });

  
}

main();

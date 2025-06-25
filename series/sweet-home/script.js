let watchHistory = JSON.parse(localStorage.getItem('witcherProgress')) || {
  episodes: {},
  lastWatched: null
};

const episodes = {
  "1": {
    "season": 1,
    "episodes": [
      {
        "episodeNumber": 1,
        "title": "Episode 1",
        "duration": "51m",
        "description": "Cha Hyun-su moves into the run-down Green Home by himself. Not long after, he witnesses a disturbing sight in his neighbor's apartment.",
        "image": "https://image.tmdb.org/t/p/w500/bUp6tm52k7RbvrayfDZc0Z0GJ8O.jpg",
        "videoUrl": "https://short.icu/Atvq6gViu"
      },
      {
        "episodeNumber": 2,
        "title": "Episode 2",
        "duration": "57m",
        "description": "As a state of emergency is declared, the residents tie up Pyeon Sang-wook for being bitten. Hyun-su is unable to ignore a family in distress.",
        "image": "https://image.tmdb.org/t/p/w500/bI4M6vXzSEDvKqc4DoiZvbYZV8W.jpg",
        "videoUrl": "https://short.icu/HUZaNLOqn"
      },
      {
        "episodeNumber": 3,
        "title": "Episode 3",
        "duration": "47m",
        "description": "An unexpected savior protects the children from harm as Hyun-su, together with Yoon Ji-su and Jung Jae-heon, tries to bring them to safety.",
        "image": "https://image.tmdb.org/t/p/w500/q8jl5VcnKTdmJt8Odz3YnvT9ujx.jpg",
        "videoUrl": "https://short.icu/8ogc4a2Km"
      },
      {
        "episodeNumber": 4,
        "title": "Episode 4",
        "duration": "47m",
        "description": "Critical information about the monsters is made public. When residents are split on what to do with Hyun-su, Lee Eun-hyeok suggests they hold a vote.",
        "image": "https://image.tmdb.org/t/p/w500/k9JSQb1w7qyNK9Dg9FoSSYY1to0.jpg",
        "videoUrl": "https://short.icu/eBLUsDizc"
      },
      {
        "episodeNumber": 5,
        "title": "Episode 5",
        "duration": "45m",
        "description": "Tasked to carry out dangerous missions, Hyun-su heads back to retrieve Han Du-sik. Sang-wook stops at nothing to finish what he started.",
        "image": "https://image.tmdb.org/t/p/w500/nC31oJXAt1JShpn1AvssLdz723o.jpg",
        "videoUrl": "https://short.icu/EPXudvp73"
      },
      {
        "episodeNumber": 6,
        "title": "Episode 6",
        "duration": "54m",
        "description": "An Seon-yeong confronts the greatest monster in her life. Leaving the building, Seo Yi-kyung heads to her fiancé's office in search of answers.",
        "image": "https://image.tmdb.org/t/p/w500/aR7ANXWo37G2qyiCaPFVdVpLhc9.jpg",
        "videoUrl": "https://short.icu/vnC-SY-Bw"
      },
      {
        "episodeNumber": 7,
        "title": "Episode 7",
        "duration": "50m",
        "description": "Hyun-su saves the others from a deadly attack. Running out of necessities, Eun-hyeok announces a plan to venture outside for resources.",
        "image": "https://image.tmdb.org/t/p/w500/cvOGLAjbLfLe4CZxz4cOtyfQuTu.jpg",
        "videoUrl": "https://short.icu/neTQxkS0g"
      },
      {
        "episodeNumber": 8,
        "title": "Episode 8",
        "duration": "53m",
        "description": "Having little options in her state of being, Ji-su agrees to take a big risk. Yi-kyung returns to Green Home just in time.",
        "image": "https://image.tmdb.org/t/p/w500/xTcSFXfRloUXTiVjU4MfpybebjG.jpg",
        "videoUrl": "https://short.icu/_APVDGNnr"
      },
      {
        "episodeNumber": 9,
        "title": "Episode 9",
        "duration": "56m",
        "description": "When a team of outlaws take over the building, the residents are shown how humans can be even more barbaric than the monsters.",
        "image": "https://image.tmdb.org/t/p/w500/w6C2vzpZFkwaB55WY6Dk6KOOGk4.jpg",
        "videoUrl": "https://short.icu/YL4Ss-JHhT"
      },
      {
        "episodeNumber": 10,
        "title": "Episode 10",
        "duration": "59m",
        "description": "A military leaflet promises a route to safety, but the group is reluctant to trust it. Hyun-su is exposed to a new perspective on his condition.",
        "image": "https://image.tmdb.org/t/p/w500/5JoGcZQjVIE2xCYpMRkGqhHfBhj.jpg",
        "videoUrl": "https://short.icu/N_YpWvKWo"
      }
    ]
  },
  "2": {
    "season": 2,
    "episodes": [
      {
        "episodeNumber": 1,
        "title": "Episode 1",
        "duration": "1h 5m",
        "description": "Hyun-su wakes up to find Sang-wook, who has a new goal for them. Lee Eun-yu and Ji-su escape a violent evacuation and commandeer their next destination.",
        "image": "https://image.tmdb.org/t/p/w500/32fHvZb8XHZAUSmYJNT7SoaZZq4.jpg",
        "videoUrl": "https://short.icu/AivlyoOUk"
      },
      {
        "episodeNumber": 2,
        "title": "Episode 2",
        "duration": "1h 3m",
        "description": "Eun-yu finds a hint of Eun-hyeok’s fate at a stop in her journey. During an experiment, Hyun-su finds that he has a special effect on another monster.",
        "image": "https://image.tmdb.org/t/p/w500/na4DtXnaUr0EWnD60G0tXkKMZtA.jpg",
        "videoUrl": "https://short.icu/4ICIq98CC"
      },
      {
        "episodeNumber": 3,
        "title": "Episode 3",
        "duration": "1h 2m",
        "description": "On a mission to find her husband, Yi-kyung makes a shocking discovery. The battered Ji-su and Eun-yu arrive at a new shelter, but catastrophe awaits them.",
        "image": "https://image.tmdb.org/t/p/w500/maOMY95gF2KvfKslCd1xXUICIeH.jpg",
        "videoUrl": "https://short.icu/0gvEmQPwk"
      },
      {
        "episodeNumber": 4,
        "title": "Episode 4",
        "duration": "1h 11m",
        "description": "The survivors take shelter underground, where supplies run low. In her continued search for Eun-hyeok, Eun-yu encounters a young girl.",
        "image": "https://image.tmdb.org/t/p/w500/AvkXY44Cav2ojBptGW0eF9BKzKr.jpg",
        "videoUrl": "https://short.icu/jiLYdlAM6"
      },
      {
        "episodeNumber": 5,
        "title": "Episode 5",
        "duration": "1h 11m",
        "description": "Sergeant Kim and Master Sergeant Tak clash on how to protect their men. The mysterious girl approaches Eun-yu with an enticing offer.",
        "image": "https://image.tmdb.org/t/p/w500/fapQyfXzT0SLZ2V4nPlKSRMV7vH.jpg",
        "videoUrl": "https://short.icu/w-nweMbl1"
      },
      {
        "episodeNumber": 6,
        "title": "Episode 6",
        "duration": "1h 16m",
        "description": "Eun-yu chases Yi-kyung and the girl, with Park Chan-yeong right behind her. The death of survivors and a missing soldier throws the stadium into unrest.",
        "image": "https://image.tmdb.org/t/p/w500/bm9uQ2AbPeQdR78jAEZaXZQkKWv.jpg",
        "videoUrl": "https://short.icu/Hj41MYOmj"
      },
      {
        "episodeNumber": 7,
        "title": "Episode 7",
        "duration": "1h 28m",
        "description": "Eun-yu shares a terse reunion with Hyun-su. While the platoon embarks on their search for a missing soldier, the stadium experiences a monster threat.",
        "image": "https://image.tmdb.org/t/p/w500/tfjf1KGCYFkResgcfGzClDmY6SU.jpg",
        "videoUrl": "https://short.icu/WXYGuxJRqO"
      },
      {
        "episodeNumber": 8,
        "title": "Episode 8",
        "duration": "1h 16m",
        "description": "As Yi-kyung faces death, the young girl tries to save her. In the ruins of the lab, the soldiers discover other survivors who aren't what they seem.",
        "image": "https://image.tmdb.org/t/p/w500/gIwu23HOiwll1llovvoROMdbTk.jpg",
        "videoUrl": "https://short.icu/2zrhoHgIz"
      }
    ]
  },
  "3": {
    "season": 3,
    "episodes": [
      {
        "episodeNumber": 1,
        "title": "Episode 1",
        "duration": "50m",
        "description": "Hyun-su gives it his all to bring Yi-kyung’s humanity back. Sergeant Kim faces countless monsters in an effort to make it out alive with his men.",
        "image": "https://image.tmdb.org/t/p/w500/ciIWfnVdeQHqDXqnvyGeqBka4ZN.jpg",
        "videoUrl": "https://short.icu/FsXug_Oya"
      },
      {
        "episodeNumber": 2,
        "title": "Episode 2",
        "duration": "1h 9m",
        "description": "Resolved to find his child, Jung Ui-myeong heads to the stadium. Despite Hyun-su's unpredictability, Eun-yu tries to wake him up during a sudden crisis.",
        "image": "https://image.tmdb.org/t/p/w500/8llJmMg2wnD9FOdq53WW4lQqnZb.jpg",
        "videoUrl": "https://short.icu/ghqHhfq68"
      },
      {
        "episodeNumber": 3,
        "title": "Episode 3",
        "duration": "59m",
        "description": "Yi-kyung discovers Ui-myeong's true motive for him and their daughter. Eun-yu accepts a challenge from Hyun-su's alter ego and heads to the stadium.",
        "image": "https://image.tmdb.org/t/p/w500/8xRiDIFXGgSAkHZk6MLFpt39r5q.jpg",
        "videoUrl": "https://short.icu/kazHGzCIA_"
      },
      {
        "episodeNumber": 4,
        "title": "Episode 4",
        "duration": "53m",
        "description": "The girl contemplates her future with Yi-kyung — and a life away from Ui-myeong. Sergeant Kim encounters Eun-hyeok, who reveals a new kind of being.",
        "image": "https://image.tmdb.org/t/p/w500/8V2hlxnRMrrgB9z7E0CgvHuDW46.jpg",
        "videoUrl": "https://short.icu/Im9CBGEiH"
      },
      {
        "episodeNumber": 5,
        "title": "Episode 5",
        "duration": "49m",
        "description": "Eun-hyeok's reunion with Hyun-su and Eun-yu turns into chaos. Ui-myeong prepares for his body transfer, while Sergeant Tak carries out his own plan.",
        "image": "https://image.tmdb.org/t/p/w500/g2RSgWhFU6HwpfW6qUOKM8O6ZHD.jpg",
        "videoUrl": "https://short.icu/3JWKCiv6i"
      },
      {
        "episodeNumber": 6,
        "title": "Episode 6",
        "duration": "50m",
        "description": "In her trek to the stadium, Eun-yu begins to feel a personal worry. While Ui-myeong searches for the girl, she plans a counterattack in the background.",
        "image": "https://image.tmdb.org/t/p/w500/qcOpjw2A5hRrjWvTsNjWjaSAbak.jpg",
        "videoUrl": "https://short.icu/ne2ZKcW-M"
      },
      {
        "episodeNumber": 7,
        "title": "Episode 7",
        "duration": "48m",
        "description": "Hyun-su and Eun-hyeok arrive at the stadium, splitting up to find Ui-myeong. During the great escape, Sergeant Tak commits the ultimate sacrifice.",
        "image": "https://image.tmdb.org/t/p/w500/zu0wxd8PFBXqrHKfrc25B4BV3my.jpg",
        "videoUrl": "https://short.icu/9sLHZqC5y"
      },
      {
        "episodeNumber": 8,
        "title": "Episode 8",
        "duration": "47m",
        "description": "In the final battle, Hyun-su and Eun-hyeok confront the girl head-on — getting an assist from an old friend. Will they finally succeed?",
        "image": "https://image.tmdb.org/t/p/w500/i68Xnnzp48QRkPpTDPZoUyWbFga.jpg",
        "videoUrl": "https://short.icu/4UCpGuTQu"
      }
    ]
  }
};

// Modified trackAndPlay function
function trackAndPlay(seasonNumber, episodeNumber) {
  const episodeKey = `s${seasonNumber}e${episodeNumber}`;
  // Save under episodes object
  watchHistory.episodes[episodeKey] = watchHistory.episodes[episodeKey] || { progress: 0 };
  watchHistory.episodes[episodeKey].progress = 100;
  // Update lastWatched to track the current episode
  watchHistory.lastWatched = { season: seasonNumber, episode: episodeNumber };
  localStorage.setItem('witcherProgress', JSON.stringify(watchHistory));

  const episode = episodes[seasonNumber].episodes.find(
    ep => ep.episodeNumber === episodeNumber
  );
  if (episode) openVideoPlayer(episode.videoUrl);
}

// Updated episode template
function createEpisodeHTML(episode, seasonNum) {
  const episodeKey = `s${seasonNum}e${episode.episodeNumber}`;
  const progress = watchHistory.episodes[episodeKey]?.progress || 0;

  return `
                <div class="episode-item" onclick="trackAndPlay(${seasonNum}, ${episode.episodeNumber})">
                <div class="pt-episode-image-container">
                    <img src="${episode.image}" class="episode-image" alt="${episode.title}">
                    <span class="episode-number">S${seasonNum} E${episode.episodeNumber}</span>
                    <span class="episode-duration">${episode.duration}</span>
                    <div class="episode-content">
                        <div class="episode-title">
                            ${episode.title}
                        </div>
                        <div class="episode-description">
                            ${episode.description}
                        </div>
                        <div class="episode-progress">
                            ${progress > 0 ? `
                                <div class="progress-text">${progress}%</div>
                                <div class="progress-bar" style="width: ${progress}%"></div>
                            ` : ''}
                        </div>
                    </div>
                    </div>
                </div>
            `;
}

function filterEpisodes() {
  const season = document.getElementById('seasonSelect').value;
  const container = document.getElementById('episodeContainer');
  const seasonData = episodes[season];

  container.innerHTML = `
                ${seasonData.episodes.map(ep => createEpisodeHTML(ep, season)).join('')}
            `;
}

// Save selected season to localStorage
function saveSeasonState() {
  localStorage.setItem('selectedSeason', document.getElementById('seasonSelect').value);
}

// Restore season selection
function restoreSeasonState() {
  const savedSeason = localStorage.getItem('selectedSeason');
  if (savedSeason) {
    document.getElementById('seasonSelect').value = savedSeason;
  }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  // Restore previous selection
  restoreSeasonState();

  // Initial episode load
  filterEpisodes();

  // Save state on season change
  document.getElementById('seasonSelect').addEventListener('change', () => {
    filterEpisodes();
    saveSeasonState();
  });
});


function updateStreamButton() {
  const button = document.getElementById('streamButton');
  if (watchHistory) {
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
                            </svg>Resume S${season} E${episode}`;
    button.style.borderBottom = "3px solid rgb(188, 0, 9)";
    button.style.background = "rgb(255, 232, 233)";
  } else {
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="play">
                            <path
                                d="M4,20.4V3.6A1.457,1.457,0,0,1,6.1844,2.22l13.095,8.4a1.6811,1.6811,0,0,1,0,2.7594l-13.095,8.4A1.457,1.457,0,0,1,4,20.4Z">
                            </path>
                        </svg>Stream Now`;
  }
}

function handleStreamButton() {
  const button = document.getElementById('streamButton');
  if (watchHistory.lastWatched) {
    const { season, episode } = watchHistory.lastWatched;
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
                            </svg>Resume S${season} E${episode}`;
    button.style.borderBottom = "3px solid rgb(188, 0, 9)";
    button.style.background = "rgb(255, 232, 233)";
    button.onclick = () => trackAndPlay(season, episode);
  } else {
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="play">
                            <path
                                d="M4,20.4V3.6A1.457,1.457,0,0,1,6.1844,2.22l13.095,8.4a1.6811,1.6811,0,0,1,0,2.7594l-13.095,8.4A1.457,1.457,0,0,1,4,20.4Z">
                            </path>
                        </svg>Stream Now`;
    button.onclick = () => trackAndPlay(1, 1);
  }
}

// Initialization
handleStreamButton();   
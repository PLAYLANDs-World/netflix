let watchHistory = JSON.parse(localStorage.getItem('witcherProgress')) || {
    episodes: {},
    lastWatched: null
};

const episodes = {
    1: {
        season: 1,
        episodes: [
            {
                episodeNumber: 1,
                title: "",
                duration: "",
                description: "",
                image: "",
                videoUrl: ""
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
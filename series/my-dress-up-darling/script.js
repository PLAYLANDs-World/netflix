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
                title: "Someone Who Lives in the Exact Opposite World as Me",
                duration: "24m",
                description: "Wakana Gojo is a high school student who dreams of becoming a kashirashi for hina dolls one day. Because his life is all about making hina dolls, he has a hard time fitting into his class because his interests are so different than anyone else’s. His classmate, Marin Kitagawa, is always at the center of attention and from another world. One day, they both end up on classroom cleaning duty and…",
                image: "https://image.tmdb.org/t/p/original/aO6sV0b2LOdkOZVj1VD2lRBB9TW.jpg",
                videoUrl: "https://short.icu/AdBLA1d3R"
            },
            {
                episodeNumber: 2,
                title: "Wanna Hurry Up, and Do It?",
                duration: "24m",
                description: "After seeing how passionate Marin is about the things she loves, Wakana decides to help her with making outfits. He decides to help her out in making a cosplay for Shizuku Kuroe-tan from the game 'Slippery Girls 2.' They had planned to reconvene later to get the measurements started, but Marin couldn't wait and ends up coming to Wakana's house over the weekend.",
                image: "https://image.tmdb.org/t/p/original/pwNWx4h7uUXbW1PnyBW9dkHg0hL.jpg",
                videoUrl: "https://short.icu/MGcWfYGsi"
            },
            {
                episodeNumber: 3,
                title: "Then Why Don't We?",
                duration: "24m",
                description: "Marin and Wakana start to grow closer as he helps her create her cosplay. Though he's happy about the fact that Marin treats him the same way at school as anywhere else, he also starts to worry about the fact that other people think it's weird that they're hanging out. Despite that, Marin takes Wakana shopping so they can look for materials needed for her cosplay.",
                image: "https://image.tmdb.org/t/p/original/dp5LW39n5aHAeIYzDA0Wlr9bUD7.jpg",
                videoUrl: "https://short.icu/MBlLAcxf9"
            },
            {
                episodeNumber: 4,
                title: "Are These Your Girlfriend's?",
                duration: "24m",
                description: "Wakana felt relieved just for a moment after they got all of the materials they needed for Marin's cosplay, but then he's shocked to find out that he needs to finish the cosplay in two weeks. On top of that, his grandfather, Kaoru, hurts his back, so Wakana has to run the shop and he also has midterms. Wakana feels overwhelmed and gets depressed, wondering if he'll ever actually become a kashirashi at this point.",
                image: "https://image.tmdb.org/t/p/original/kUEerTu9P62sL6cL3oifMzqxLns.jpg",
                videoUrl: "https://short.icu/7Yua3GLc8"
            },
            {
                episodeNumber: 5,
                title: "It's Probably Because This Is the Best Boob Bag Here",
                duration: "24m",
                description: "Wakana finally completes the Shizuku cosplay. Marin is super excited that she gets to dress as her beloved Shizuku-tan and suggests that the two of them go to a cosplay event the next day. Even though it's her first time at a cosplay event, Marin gets requests for photos left and right. Wakana is overwhelmed with feelings as he watches over Marin, but...",
                image: "https://image.tmdb.org/t/p/original/tdGGot681Qk4X5hhcQH2AmtOB0K.jpg",
                videoUrl: "https://short.icu/viOLXDdJSC"
            },
            {
                episodeNumber: 6,
                title: "For Real?!",
                duration: "24m",
                description: "Marin and Wakana have a successful first cosplay event. Because of something Wakana said, Marin's mental and emotional state starts to change a little. Even though she was just spending time at the Gojos' home with Wakana and Kaoru to wash her outfit, she can't seem to calm down. Meanwhile, a certain person comes to Gojo Dolls after seeing the photos Marin posted onto social media of her Shizuku cosplay.",
                image: "https://image.tmdb.org/t/p/original/tEppwk2Iv2mDNsNm1QfptJMj6GZ.jpg",
                videoUrl: "https://short.icu/Ob0O59TBy"
            },
            {
                episodeNumber: 7,
                title: "A Home Date With the Guy I Wuv Is the Best",
                duration: "24m",
                description: "Marin is going to do a group cosplay with her idol, the cosplayer 'Juju,' whose real name is Sajuna Inui, and they're going to cosplay as Black Lobelia and Black Lily from the magical girl anime 'Flower Girl Blaze!!'. Wakana heads over to Marin's home so that he can borrow the 'Blaze!!' DVDs for research to make the outfits for them.",
                image: "https://image.tmdb.org/t/p/original/7vlUSaoHN1ChGDXxYi7t8VIy4jx.jpg",
                videoUrl: "https://short.icu/GG96BqvP2"
            },
            {
                episodeNumber: 8,
                title: "Backlighting Is the Best",
                duration: "24m",
                description: "Juju's photographer and younger sister, Shinju Inui, meets Wakana and Marin for the first time. They're shocked at how opposite her appearance is to Sajuna, but they quickly become closer when they excitedly talk about cameras. Later on, Sajuna suggests that they check out the abandoned hospital that they'll be using for their group cosplay but...",
                image: "https://image.tmdb.org/t/p/original/eCXQtrSFR3sj1SVcmayumanw16E.jpg",
                videoUrl: "https://short.icu/IHGb8_5Hi"
            },
            {
                episodeNumber: 9,
                title: "A Lot Happened After I Saw That Photo",
                duration: "24m",
                description: "Gojo is able to complete the Black Lobelia and Black Lily cosplays thanks to Marin's help. Both Marin and Sajuna try on their cosplays and they're both excited about how nicely they turned out, and Marin is even more excited about their upcoming group cosplay. When the day finally arrives, Marin and Sajuna get an unexpected visitor.",
                image: "https://image.tmdb.org/t/p/original/7NP8lm9tKh1j6Se4leCdbjqHcph.jpg",
                videoUrl: "https://short.icu/YU-TkE-ol"
            },
            {
                episodeNumber: 10,
                title: "We've All Got Struggles",
                duration: "24m",
                description: "Wakana and Shinju's secret plan was a success, which added to the success of their first group cosplay photoshoot. As Juju and Shinju look through the photos from the photoshoot, the sisters find out how they both feel. Meanwhile, Marin and Wakana are enjoying their summer vacation. They were preparing Marin's cosplay for a fighting game character named Veronica-tya, but then a problem arises...",
                image: "https://image.tmdb.org/t/p/original/5gIuKHyeVYXLZDaDWb82An12dDM.jpg",
                videoUrl: "https://short.icu/cwD9cgcQp"
            },
            {
                episodeNumber: 11,
                title: "I Am Currently at a Love Hotel",
                duration: "24m",
                description: "Liz is a succubus who appears in one of Marin's favorite slice of life series, 'SuccIDK.' Marin had some interest in cosplaying Liz-kyun but didn't think she could pull it off until Wakana gave her a little push. With the cosplay ready, they head to a studio for a photoshoot, but the studio happened to be a rather unexpected location.",
                image: "https://image.tmdb.org/t/p/original/oI4JzPWg41rwfKnY9nFDQRfCEjU.jpg",
                videoUrl: "https://short.icu/z6Olbw5Axl"
            },
            {
                episodeNumber: 12,
                title: "My Dress-Up Darling",
                duration: "24m",
                description: "Summer vacation is coming to a close. Wakana received an SOS from Marin, who hadn't finished her homework, so he ended up helping her study at her house. They later realize that Marin had forgotten some math drills at school, so they go to get them. While alone at the school, Marin and Wakana make plans to go to a summer festival together. And when that day finally arrived...",
                image: "https://image.tmdb.org/t/p/original/iDV1nJ1wBzchT4LgpMaZ7HfHtpQ.jpg",
                videoUrl: "https://short.icu/igq4L2TFi"
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
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
                title: "The Long Bright Dark",
                duration: "57m",
                description: "Former Louisiana State CID partners Martin Hart and Rustin Cohle give separate statements to a pair of investigators about the murder of a prostitute, Dora Lange, 17 years earlier. As they look back, details of the crime, replete with occult overtones, are accompanied by insights into the detectives’ volatile partnership and personal lives.",
                image: "https://image.tmdb.org/t/p/original/lnludtHZ9CUbXvyFk1ZnoOsXp6o.jpg",
                videoUrl: "https://short.icu/xU60F_aar"
            },
            {
                episodeNumber: 2,
                title: "Seeing Things",
                duration: "56m",
                description: "Under pressure to land a suspect in the Lange murder, Quesada warns Hart and Cohle that they might be replaced by three detectives from a new task force. The pair lobbies for extra time to follow up on a lead that takes them from a rural cathouse to an incinerated church. With his marriage to Maggie already strained by work, Hart finds respite away from home.",
                image: "https://image.tmdb.org/t/p/original/wJktgRRI53VmbXCOLNFrePv9x62.jpg",
                videoUrl: "https://short.icu/DUsCYOZvv"
            },
            {
                episodeNumber: 3,
                title: "The Locked Room",
                duration: "56m",
                description: "A hidden image at the burned-out church leads Cohle and Hart to Joel Theriot, a tent-revival minister whose parishioners finger a scarred “tall man” seen with Dora Lange. Brought in for interrogation, a sex offender matching the description is quickly dismissed by Cohle, despite offering a confession. Hart gets sidetracked after Maggie sets Cohle up with a friend at a C&W bar. Looking to establish a pattern of murder, Cohle pores over old case files, finding a connection with a woman assumed to have drowned years earlier.",
                image: "https://image.tmdb.org/t/p/original/9Icv5WubrQ0Cs7nEUxQ4WtD86Zm.jpg",
                videoUrl: "https://short.icu/l1_MRs57E-"
            },
            {
                episodeNumber: 4,
                title: "Who Goes There?",
                duration: "55m",
                description: "Hart and Cohle hunt for their newly identified suspect, Reggie Ledoux, a meth cooker who shared a cell with Dora Lange's husband and recently skipped parole. As Hart's personal life collapses around him, Cohle immerses himself in an old criminal identity from his narco days, contacting an East-Texas biker gang known to deal with their primary suspect.",
                image: "https://image.tmdb.org/t/p/original/rxIdNZxiGOsw4AYmnWnBxlRr3uX.jpg",
                videoUrl: "https://short.icu/Ftent4wf8"
            },
            {
                episodeNumber: 5,
                title: "The Secret Fate of All Life",
                duration: "55m",
                description: "A violent denouement in the forest clears the Dora Lange case and turns Cohle and Hart into local heroes. Each man settles into a healthier rhythm of living as Hart returns to his family, and Cohle starts a relationship while gaining a reputation as a closer in interrogations. As time passes and his daughters grow older, Hart faces new tensions and temptations, and Cohle learns from a double-murder suspect that there could be much more to an old case than he'd once thought. In 2012, Gilbough and Papania put their cards on the table, presenting new intelligence that threatens Cohle and causes Hart to reassess everything he thought he knew about his former partner.",
                image: "https://image.tmdb.org/t/p/original/9DaqmdXaS6Yd5ubBx9WFrSSTaQG.jpg",
                videoUrl: "https://short.icu/qBj16385W"
            },
            {
                episodeNumber: 6,
                title: "Haunted Houses",
                duration: "56m",
                description: "Maggie reveals Cohle's activities in 2002, when his relationship with Hart fractured and he quit the force.",
                image: "https://image.tmdb.org/t/p/original/d37mf5zqg4qmjhW12YfJ2bKkJPs.jpg",
                videoUrl: "https://short.icu/nZTSJ4zVm"
            },
            {
                episodeNumber: 7,
                title: "After You've Gone",
                duration: "51m",
                description: "Hart and Cohle call a truce to investigate a series of disappearances that may be related to the Dora Lange murder and the Tuttle family.",
                image: "https://image.tmdb.org/t/p/original/cj7WwlFJ9oo4D4iK91s7ZygZixS.jpg",
                videoUrl: "https://short.icu/-USm2wYp9"
            },
            {
                episodeNumber: 8,
                title: "Form and Void",
                duration: "53m",
                description: "An overlooked detail provides Hart and Cohle with an important new lead in their 17-year-old case.",
                image: "https://image.tmdb.org/t/p/original/larzfSafxyBkcAZfNd0MSaGLRHK.jpg",
                videoUrl: "https://short.icu/LLhiBqcHJ"
            }
        ]
    },
    2: {
        season: 2,
        episodes: [
            {
                episodeNumber: 1,
                title: "The Western Book of the Dead",
                duration: "58m",
                description: "The disappearance of a city manager disrupts a lucrative land scheme and ignites an investigation involving three police officers and a career criminal who is moving into legitimate business.",
                image: "https://image.tmdb.org/t/p/original/hVvWMZgSpos5nY0xLBtfLGGxsN6.jpg",
                videoUrl: "https://short.icu/6m91kWnFM9"
            },
            {
                episodeNumber: 2,
                title: "Night Finds You",
                duration: "56m",
                description: "Ben Caspar's autopsy reveals the gruesome details of his demise, and Ray and Ani wonder if it has anything to do with his fondness for prostitutes. Meanwhile, Frank looks into what might have happened to his missing fortune.",
                image: "https://image.tmdb.org/t/p/original/emZ2bLfqyJHWMqx97BitVPIQ2SL.jpg",
                videoUrl: "https://short.icu/DmOSUFUQr"
            },
            {
                episodeNumber: 3,
                title: "Maybe Tomorrow",
                duration: "56m",
                description: "The repercussions from Caspar's murder are felt by Frank and the Vinci Mayor's office. Ray and Ani are involved in a close call with the killer.",
                image: "https://image.tmdb.org/t/p/original/tswWVWWhMiPTtmF3uUmvvPy4UXR.jpg",
                videoUrl: "https://short.icu/5Je2y-lrZ"
            },
            {
                episodeNumber: 4,
                title: "Down Will Come",
                duration: "53m",
                description: "The detail works a pawn-shop lead to close in on a suspect in the Caspere case. Frank revisits his past to pay for his present. Velcoro, Bezzerides and Woodrugh struggle to keep the case straight in the face of corruption.",
                image: "https://image.tmdb.org/t/p/original/1apWvj8wnkOJ2X8yD2v5xKpk0Sb.jpg",
                videoUrl: "https://short.icu/aK_ZdP5G9"
            },
            {
                episodeNumber: 5,
                title: "Other Lives",
                duration: "57m",
                description: "Ray and Frank contemplate new life choices. Ani and Paul follow a lead up the coast.",
                image: "https://image.tmdb.org/t/p/original/vrny7HHQiifh8CDIBUdzfEi3FCk.jpg",
                videoUrl: "https://short.icu/n0K_VKEA8"
            },
            {
                episodeNumber: 6,
                title: "Church in Ruins",
                duration: "57m",
                description: "Desperate to locate a missing woman with intel about Caspere, Frank meets with Mexican drug dealers; Ani infiltrates an exclusive inner circle, with Ray and Paul keeping close tabs.",
                image: "https://image.tmdb.org/t/p/original/eP2I0I4Dq67mr1xEQY1hgshA5TM.jpg",
                videoUrl: "https://short.icu/XRMdq9uje"
            },
            {
                episodeNumber: 7,
                title: "Black Maps and Motel Rooms",
                duration: "1h 2m",
                description: "Ray, Ani and Paul take precautionary measures to elude detection and untangle a dark mystery; Frank deals with the fallout of his betrayal.",
                image: "https://image.tmdb.org/t/p/original/pRNEDISAPtetUZn6jSWUfuJYTRQ.jpg",
                videoUrl: "https://short.icu/BYO23xQXm"
            },
            {
                episodeNumber: 8,
                title: "Omega Station",
                duration: "1h 27m",
                description: "Frank, Ray and Ani weigh their options as Caspere's killer and the scope of corruption is revealed.",
                image: "https://image.tmdb.org/t/p/original/vTfGacGuZJSyocSlfYeMa1uFHtv.jpg",
                videoUrl: "https://short.icu/VK7cJSw1v"
            }
        ]
    },
    3: {
        season: 3,
        episodes: [
            {
                episodeNumber: 1,
                title: "The Great War and Modern Memory",
                duration: "56m",
                description: "The disappearance of a young Arkansas boy and his sister in 1980 triggers vivid memories and enduring questions for retired detective Wayne Hays, who worked the case 35 years before with partner Roland West. What started as a routine case becomes a long journey to dissect and make sense of the crime.",
                image: "https://image.tmdb.org/t/p/original/69kaprzlFWYW3Mucs3iVVgkWVV9.jpg",
                videoUrl: "https://short.icu/cF2GfQzQf"
            },
            {
                episodeNumber: 2,
                title: "Kiss Tomorrow Goodbye",
                duration: "55m",
                description: "Hays looks back at the aftermath of the 1980 Purcell case in West Finger, Arkansas, including possible evidence left behind at the Devil's Den. As attention focuses on two conspicuous suspects--Brett Woodard, a solitary vet and trash collector, and Ted LaGrange, an ex-con with a penchant for children--the parents of the missing kids, Tom and Lucy Purcell, receive a cryptic note.",
                image: "https://image.tmdb.org/t/p/original/y288eNTTYo21xRxwMe5hjYD0Za5.jpg",
                videoUrl: "https://short.icu/QdB0CKtGA"
            },
            {
                episodeNumber: 3,
                title: "The Big Never",
                duration: "52m",
                description: "Hays recalls his early romance with Amelia, as well as cracks in their relationship that surfaced after they married and had children. Ten years after the Purcell crimes, new evidence emerges, giving him a second chance to vindicate himself and the investigation.",
                image: "https://image.tmdb.org/t/p/original/y6XAeDjuvITdzxBJfxUOf6vPr2P.jpg",
                videoUrl: "https://short.icu/HZQMTREJb"
            },
            {
                episodeNumber: 4,
                title: "The Hour and the Day",
                duration: "1h 4m",
                description: "Hays and West see a possible connection between the local church and the Purcell crimes. As the detectives search for one suspect and round up another for interrogation, Woodard is targeted by a vigilante group.",
                image: "https://image.tmdb.org/t/p/original/rqTEBDu8bOhq0mBlaD5abOUwuPy.jpg",
                videoUrl: "https://short.icu/sBXQKgvs5"
            },
            {
                episodeNumber: 5,
                title: "If You Have Ghosts",
                duration: "56m",
                description: "Wayne finds himself in a no-win situation as new clues emerge in the Purcell case. Roland wrestles with how to keep evidence secure as lawyers demand a new investigation. Amelia finds her relationship with Wayne imperiled by her writing aspirations and his jealousy.",
                image: "https://image.tmdb.org/t/p/original/5vAXu7Fgly2O7KEXQ3AOXtaQ6VX.jpg",
                videoUrl: "https://short.icu/mFKbu0AMM"
            },
            {
                episodeNumber: 6,
                title: "Hunters in the Dark",
                duration: "55m",
                description: "Wayne and Roland revisit discrepancies in the Purcell case that were hidden or forgotten over the years. Among those being reevaluated is Tom Purcell, as well as Lucy Purcell’s cousin, Dan O’Brien. The glitter of Amelia’s book release is tarnished by a voice from the past.",
                image: "https://image.tmdb.org/t/p/original/uyte3ROivDzGLz6Cpvbf6h6mkeR.jpg",
                videoUrl: "https://short.icu/RprpuRn1t"
            },
            {
                episodeNumber: 7,
                title: "The Final Country",
                duration: "55m",
                description: "Following up on new leads, Wayne and Roland track down a man who left the police force in the midst of the Purcell investigation. Meanwhile, Amelia visits Lucy Purcell’s best friend in hopes of gaining insights into the whereabouts of the mysterious one-eyed man.",
                image: "https://image.tmdb.org/t/p/original/7zybgu1RorDGIHktVV4GNyeoinm.jpg",
                videoUrl: "https://short.icu/DPajocZi7"
            },
            {
                episodeNumber: 8,
                title: "Now Am Found",
                duration: "1h 13m",
                description: "Wayne struggles to hold on to his memories, and his grip on reality, as the truth behind the Purcell case is finally revealed.",
                image: "https://image.tmdb.org/t/p/original/6RFGeFsZrlDd2TllfmTGksPUoo0.jpg",
                videoUrl: "https://short.icu/9qTuLBHnq"
            }
        ]
    },
    4: {
        season: 4,
        episodes: [
            {
                episodeNumber: 1,
                title: "Night Country: Part 1",
                duration: "59m",
                description: "When eight researchers at Tsalal Station vanish without a trace, Danvers orders a search. After handling a workplace dispute, Navarro tries to convince a skeptical Danvers that the men's disappearance is connected to the murder of a local activist.",
                image: "https://image.tmdb.org/t/p/original/xPa4lsWn8dVkgju3zTjby2cyqHG.jpg",
                videoUrl: "https://short.icu/k6wqdwpW2"
            },
            {
                episodeNumber: 2,
                title: "Night Country: Part 2",
                duration: "1h 3m",
                description: "As Danvers and Prior learn more about Tsalal – and find an unlikely location for the physical evidence – Captain Connelly threatens to move the case to Anchorage. Later, Navarro and Danvers find a connection between one of the Tsalal men and Annie.",
                image: "https://image.tmdb.org/t/p/original/oasmeDFjzqFMyT7n9XTkONMmR0N.jpg",
                videoUrl: "https://short.icu/MD75hZo1d"
            },
            {
                episodeNumber: 3,
                title: "Night Country: Part 3",
                duration: "59m",
                description: "While Hank leads the search for Clark, Prior asks Danvers about the murder-suicide case that drove a wedge between her and Navarro. Then, Navarro and Danvers seek out a local hairdresser for insight on Annie -- which leads to a tip.",
                image: "https://image.tmdb.org/t/p/original/nqrpahxwrfMzAHx0kIxIxuKT9JH.jpg",
                videoUrl: "https://short.icu/z-jDQwkMfC"
            },
            {
                episodeNumber: 4,
                title: "Night Country: Part 4",
                duration: "1h 1m",
                description: "When Julia's mental health struggles resurface, Navarro brings her to a local facility, promising that this time will be better. Later, Danvers and Navarro confirm the location of Annie's murder, and Danvers levies a harsh punishment on Leah.",
                image: "https://image.tmdb.org/t/p/original/tVGXg2x5PIOZFlBzBXbpgT07kr0.jpg",
                videoUrl: "https://short.icu/DXLYMQlBX"
            },
            {
                episodeNumber: 5,
                title: "Night Country: Part 5",
                duration: "1h 4m",
                description: "As Prior digs into the links between Tsalal and mining company Silver Sky, Navarro rescues Leah from a local protest that has turned violent. At a meeting with Silver Sky exec Kate McKitterick, Danvers is warned not to pursue the case any further.",
                image: "https://image.tmdb.org/t/p/original/lzoP47WoFLNDQJbmkHHeFlUOTRC.jpg",
                videoUrl: "https://short.icu/WAA6LkAFH7"
            },
            {
                episodeNumber: 6,
                title: "Night Country: Part 6",
                duration: "1h 16m",
                description: "In the midst of a brutal storm, Danvers and Navarro find themselves stuck at Tsalal with no electricity or means of contact. As the truth about what happened to Annie and the Tsalal men unfolds, Navarro and Danvers each confront the demons from their past.",
                image: "https://image.tmdb.org/t/p/original/24TSb2DLvvIhSw7dUs3UaCdtA2z.jpg",
                videoUrl: "https://short.icu/O9-vGoynP"
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
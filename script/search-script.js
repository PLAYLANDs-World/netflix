// TMDB API Configuration
const API_KEY = '9e7be42c1b75df5271d577d4b909b03e';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';
const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original';

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');
const suggestionsDropdown = document.getElementById('suggestions-dropdown');
const resultsContainer = document.getElementById('results-container');
const SearchTitle = document.getElementById('search-title');
const loader = document.getElementById('loader');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popup-close');
const mainHeader = document.getElementById('main-header');
const searchOverlay = document.getElementById('search-overlay');

// Server data variable
let serverData = [];

let genreMap = {};

fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        data.genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });
    });

// Event Listeners
searchBtn.addEventListener('click', function () {
    performSearch(); // Call the original function

    // Add your extra functionality here
    document.body.classList.remove('search-active');
    searchOverlay.classList.remove('active');
    suggestionsDropdown.classList.remove('visible');
    document.querySelector('.dropdown-container').style.display = ''; // Hide user menu
    resultsContainer.style.display = '';
    SearchTitle.style.display = '';
    unlockBody(); // Unfreeze background
});
searchInput.addEventListener('input', handleSearchInput);
searchInput.addEventListener('focus', () => {
    document.body.classList.add('search-active');
    searchOverlay.classList.add('active');
    searchBar.classList.add('focused');
    document.querySelector('.dropdown-container').style.display = 'none'; // Hide user menu
    resultsContainer.style.display = 'none';
    SearchTitle.style.display = 'none';
    lockBody(); // Freeze background
});
searchOverlay.addEventListener('click', () => {
    document.body.classList.remove('search-active');
    searchOverlay.classList.remove('active');
    suggestionsDropdown.classList.remove('visible');
    document.querySelector('.dropdown-container').style.display = ''; // Hide user menu
    resultsContainer.style.display = '';
    SearchTitle.style.display = '';
    unlockBody(); // Unfreeze background
});
popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
    document.body.classList.remove('search-active');
    searchOverlay.classList.remove('active');
    suggestionsDropdown.classList.remove('visible');
    document.querySelector('.dropdown-container').style.display = ''; // Hide user menu
    resultsContainer.style.display = '';
    SearchTitle.style.display = '';
    unlockBody(); // Unfreeze background
});
document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainHeader.classList.add('scrolled');
    } else {
        mainHeader.classList.remove('scrolled');
    }
});

// Fetch server data from JSON file
async function fetchServerData() {
    try {
        // In a real app, we would fetch from 'content-data.json'
        const response = await fetch('/data/content-data.json');
        serverData = await response.json();

        // For demo purposes, we'll use hardcoded data
        // Initialize with popular content
        displayPopularContent();
    } catch (error) {
        console.error('Error fetching server data:', error);
        resultsContainer.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h2>Error Loading Content</h2>
                        <p>Please try again later</p>
                    </div>
                `;
    }
}

// Debounce function for live search
let debounceTimer;
function handleSearchInput() {
    clearTimeout(debounceTimer);
    const query = searchInput.value.trim();

    if (query.length < 2) {
        suggestionsDropdown.classList.remove('visible');
        return;
    }

    // Show loading spinner in dropdown
    suggestionsDropdown.innerHTML = `
                <div class="suggestion-section">
                    <div class="loader-mini-container" style="display: flex; justify-content: center; padding: 30px;">
                        <div class="loader-mini"></div>
                    </div>
                </div>
            `;
    suggestionsDropdown.classList.add('visible');

    debounceTimer = setTimeout(() => {
        fetchSuggestions(query);
    }, 300);
}

// Fetch suggestions from TMDB
async function fetchSuggestions(query) {
    try {
        const url = `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        const data = await response.json();

        // Filter to only include movies and TV shows
        const results = data.results.filter(item =>
            (item.media_type === 'movie' || item.media_type === 'tv') &&
            item.poster_path
        );

        displaySuggestions(results, query);
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        suggestionsDropdown.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h3>Search Failed</h3>
                        <p>Please try again later</p>
                    </div>
                `;
    }
}

// Display suggestions in dropdown with sections
function displaySuggestions(results, query) {
    if (results.length === 0) {
        suggestionsDropdown.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>Oops! "${query}" is not currently available</h3>
                        <p>We are working hard to make your experience great. Sorry for the inconvenience.</p>
                    </div>
                `;
        return;
    }

    // Categorize results
    const available = [];
    const unavailable = [];

    results.forEach(item => {
        const isAvailable = serverData.content.some(content => content.tmdb_id === item.id);
        if (isAvailable) {
            available.push(item);
        } else {
            unavailable.push(item);
        }
    });

    suggestionsDropdown.innerHTML = '';

    // Available section
    if (available.length > 0) {
        const availableSection = document.createElement('div');
        availableSection.className = 'suggestion-section';
        availableSection.innerHTML = `
                    <div class="suggestion-header">
                        <i class="fas fa-check-circle"></i>
                        Available to Watch
                    </div>
                    <div class="suggestion-items">
                        ${available.map(item => createSuggestionHTML(item, true)).join('')}
                    </div>
                `;
        suggestionsDropdown.appendChild(availableSection);
    }

    // Unavailable section
    if (unavailable.length > 0) {
        const unavailableSection = document.createElement('div');
        unavailableSection.className = 'suggestion-section';
        unavailableSection.innerHTML = `
                    <div class="suggestion-header">
                        <i class="fas fa-clock"></i>
                        Not Currently Available
                    </div>
                    <div class="suggestion-items">
                        ${unavailable.map(item => createSuggestionHTML(item, false)).join('')}
                    </div>
                `;
        suggestionsDropdown.appendChild(unavailableSection);
    }

    // Add event listeners
    document.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function () {
            const tmdbId = parseInt(this.dataset.id);
            const isAvailable = this.dataset.available === 'true';

            if (isAvailable) {
                // Find the content in serverData and navigate to its URL
                const content = serverData.content.find(c => c.tmdb_id === tmdbId);
                if (content && content.url) {
                    // In a real app, we would navigate to the content URL
                    const currentUrl = new URL(window.location.href);

                    // Remove '/search' from path while preserving parent directories
                    const newPath = currentUrl.pathname.replace(/\/search\/?$/, '');

                    // Construct new URL using cleaned path and content URL
                    const targetUrl = `${currentUrl.origin}${newPath}/${content.url}`;

                    window.location.href = targetUrl;
                }
            } else {
                const item = results.find(r => r.id === tmdbId);
                if (item) {
                    showPopup(item);
                }
            }
            document.body.classList.remove('search-active');
            searchOverlay.classList.remove('active');
            suggestionsDropdown.classList.remove('visible');
        });
    });
}

// Create suggestion HTML
function createSuggestionHTML(item, isAvailable) {
    const title = item.title || item.name;
    const year = item.release_date ? item.release_date.substring(0, 4) :
        item.first_air_date ? item.first_air_date.substring(0, 4) : 'N/A';
    const type = item.media_type === 'movie' ? 'Movie' : 'TV';
    const posterPath = item.poster_path ? IMG_BASE_URL + item.poster_path : '';
    const description = item.overview ? item.overview : '';

    return `
                <div class="suggestion-item" data-id="${item.id}" data-available="${isAvailable}">
                    <div class="suggestion-poster">
                        <img src="${posterPath}" alt="${title}">
                    </div>
                    <div class="suggestion-info">
                        <div class="suggestion-title">${title}</div>
                                        <div class="suggestion-description">${description}</div>
                        <div class="suggestion-meta">
                              <div class="tmdb-logo">
                                    <div class="tmdb-main-line">
                                    <div class="tmdb-main">TMDB</div>
                                    <span class="suggestion-rating"> ${item.vote_average.toFixed(1)}</span>
                                    </div>
                              </div>
                            <span class="suggestion-year">${year}</span>
                            <span class="suggestion-type">${type}</span>
                        </div>
                    </div>
                                            <div class="suggestion-availability ${isAvailable ? '' : 'suggestion-unavailable'}">
                            ${isAvailable ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>` : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ban" viewBox="0 0 16 16">
                                                        <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
                                                        </svg>`}
                        </div>
                </div>
            `;
}

// Perform search
async function performSearch() {
    const query = searchInput.value.trim();
    if (!query) {
        // Show popular content if search is empty
        displayPopularContent();
        return;
    }

    // Hide suggestions
    suggestionsDropdown.classList.remove('visible');

    // Show loader
    loader.classList.add('active');
    resultsContainer.innerHTML = '';

    try {
        // Search TMDB
        const tmdbResults = await searchTMDB(query);

        // Filter to only available content
        const available = tmdbResults.filter(item =>
            serverData.content.some(content => content.tmdb_id === item.id)
        );

        // Display results
        if (available.length > 0) {
            displayResults('Search Results', available, true);
        } else {
            resultsContainer.innerHTML = `
                        <div class="empty-state">
                            <i class="fas fa-search"></i>
                            <h2>No Results Found</h2>
                            <p>Try searching for something else or request content that's not available</p>
                        </div>
                    `;
        }

    } catch (error) {
        console.error('Search error:', error);
        resultsContainer.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h2>Error Loading Results</h2>
                        <p>Please try again later</p>
                    </div>
                `;
    } finally {
        loader.classList.remove('active');
    }
}

// Search TMDB API
async function searchTMDB(query) {
    const url = `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();

    // Filter to only include movies and TV shows
    return data.results.filter(item =>
        (item.media_type === 'movie' || item.media_type === 'tv') &&
        item.poster_path
    );
}

// Display results in sections
function displayResults(title, items, isAvailable) {
    if (items.length === 0) return;

    const sectionHTML = `
                <div class="results-section">
                    <h2 class="section-title">
                        <i class="fas ${isAvailable ? 'fa-check-circle' : 'fa-clock'}"></i>
                        ${title}
                    </h2>
                    <div class="results-grid">
                        ${items.map(item => createCardHTML(item, isAvailable)).join('')}
                    </div>
                </div>
            `;

    resultsContainer.innerHTML = sectionHTML;

    // Add event listeners to cards
    items.forEach((item, index) => {
        const card = document.querySelectorAll('.result-card')[index];
        card.addEventListener('click', () => {
            // Find the content in serverData
            const content = serverData.content.find(
                c => c.tmdb_id === item.id
            );

            if (content && content.url) {
                const currentUrl = new URL(window.location.href);
                const newPath = currentUrl.pathname.replace(/\/search\/?$/, '');

                // Use content.url instead of item.url
                const targetUrl = `${currentUrl.origin}${newPath}/${content.url}`;

                window.location.href = targetUrl;
            }
        });
    });
}

// Create card HTML
function createCardHTML(item, isAvailable) {
    const title = item.title || item.name;
    const year = item.release_date ? item.release_date.substring(0, 4) :
        item.first_air_date ? item.first_air_date.substring(0, 4) : 'N/A';

    return `
                <div class="result-card">
                    
                    <div class="card-poster">
                        <img src="${IMG_BASE_URL}${item.poster_path}" alt="${title}">
                    </div>
                </div>
            `;
}

// Show popup for unavailable content
async function showPopup(item) {
    // Show loading state
    popup.classList.add('loading');

    // Determine media type and ID
    const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
    const itemId = item.id;

    // Fetch detailed information
    let detailedItem;
    try {
        const appendParams = 'images,release_dates,content_ratings,credits,genres';
        const url = `${BASE_URL}/${mediaType}/${itemId}?api_key=${API_KEY}&append_to_response=${appendParams}`;

        const response = await fetch(url);
        detailedItem = await response.json();
    } catch (error) {
        console.error('Error fetching item details:', error);
        detailedItem = item;
    }

    // Extract basic info
    const title = detailedItem.title || detailedItem.name;
    const year = detailedItem.release_date
        ? detailedItem.release_date.substring(0, 4)
        : detailedItem.first_air_date
            ? detailedItem.first_air_date.substring(0, 4)
            : 'N/A';
    const rating = detailedItem.vote_average?.toFixed(1) || 'N/A';
    const description = detailedItem.overview || 'No description available.';
    //    const mediaLabel = mediaType === 'movie' ? 'Movie' : 'TV';

    // 1. Logo with advanced fallback logic
    let logoUrl = '';
    let hasLogo = false;

    if (detailedItem.images?.logos?.length > 0) {
        // Find English logo first
        let logo = detailedItem.images.logos.find(logo => logo.iso_639_1 === 'en');

        // If no English logo, find any logo
        if (!logo) logo = detailedItem.images.logos[0];

        if (logo) {
            logoUrl = IMG_BASE_URL + logo.file_path;
            hasLogo = true;
        }
    }

    // If no logo found, use poster
    if (!hasLogo && detailedItem.poster_path) {
        logoUrl = IMG_BASE_URL + detailedItem.poster_path;
        hasLogo = true;
    }

    // If still no image, use title placeholder
    if (!hasLogo) {
        logoUrl = `https://via.placeholder.com/300x450?text=${encodeURIComponent(title)}`;
    }

    // 2. Backdrop with English text preference
    let backdropUrl = '';
    if (detailedItem.images?.backdrops?.length > 0) {
        // Find English backdrop first
        let backdrop = detailedItem.images.backdrops.find(b => b.iso_639_1 === 'en');

        // If no English backdrop, find any backdrop
        if (!backdrop) backdrop = detailedItem.images.backdrops[0];

        if (backdrop) {
            backdropUrl = BACKDROP_BASE_URL + backdrop.file_path;
        }
    }

    // Fallback to regular backdrop or poster
    if (!backdropUrl) {
        backdropUrl = detailedItem.backdrop_path
            ? BACKDROP_BASE_URL + detailedItem.backdrop_path
            : detailedItem.poster_path
                ? IMG_BASE_URL + detailedItem.poster_path
                : 'https://via.placeholder.com/1920x1080?text=No+Image';
    }


    let SecondbackdropUrl = '';
    if (detailedItem.images?.backdrops?.length > 0) {
        // First try to find a backdrop with no language (i.e. no text)
        let backdrop = detailedItem.images.backdrops.find(b => b.iso_639_1 === null);

        // If no textless backdrop, try English
        if (!backdrop) backdrop = detailedItem.images.backdrops.find(b => b.iso_639_1 === 'en');

        // If no English, pick the first available
        if (!backdrop) backdrop = detailedItem.images.backdrops[0];

        if (backdrop) {
            SecondbackdropUrl = BACKDROP_BASE_URL + backdrop.file_path;
        }
    }

    // Fallback to regular backdrop or poster
    if (!SecondbackdropUrl) {
        SecondbackdropUrl = detailedItem.backdrop_path
            ? BACKDROP_BASE_URL + detailedItem.backdrop_path
            : detailedItem.poster_path
                ? IMG_BASE_URL + detailedItem.poster_path
                : 'https://via.placeholder.com/1920x1080?text=No+Image';
    }



    // 3. Fixed runtime and age rating
    let runtime = 'N/A';
    if (detailedItem.runtime) {
        runtime = `${detailedItem.runtime} min`;
    } else if (detailedItem.episode_run_time?.length > 0) {
        runtime = `${detailedItem.episode_run_time[0]} min/ep`;
    }

    let ageRating = 'N/A';
    if (mediaType === 'movie') {
        const usRelease = detailedItem.release_dates?.results?.find(
            r => r.iso_3166_1 === 'US'
        );
        ageRating = usRelease?.release_dates[0]?.certification || 'N/A';
    } else {
        const usRating = detailedItem.content_ratings?.results?.find(
            r => r.iso_3166_1 === 'US'
        );
        ageRating = usRating?.rating || 'N/A';
    }

    // Set basic popup content
    const titleElement = document.getElementById('popup-title');
    titleElement.textContent = title;

    const logoElement = document.getElementById('popup-logo');
    logoElement.src = logoUrl;

    // Hide title text if we have a real logo
    if (hasLogo) {
        titleElement.style.display = 'none';
    } else {
        titleElement.style.display = 'block';
    }

    // Handle logo loading errors
    logoElement.onerror = function () {
        // Hide broken image and show title text
        this.style.display = 'none';
        titleElement.style.display = 'block';
    };

    //   document.getElementById('popup-badge').textContent = mediaLabel;
    document.getElementById('popup-rating').textContent = rating;
    const requestArea = document.getElementById('content-request-area');
    if (requestArea) {
        requestArea.textContent = title;
    } else {
        console.warn('#content-request-area not found');
    }
    document.getElementById('popup-year').textContent = year;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup-runtime').textContent = runtime;
    document.getElementById('popup-age').textContent = ageRating;
    document.getElementById('popup-second-backdrop').src = backdropUrl;

    // Set backdrop image
    const backdropImg = document.getElementById('popup-backdrop');
    backdropImg.src = SecondbackdropUrl;

    // 4. Fixed genres (max 3)
    const genresContainer = document.getElementById('popup-genres');
    genresContainer.innerHTML = '';
    const genresToShow = detailedItem.genres?.slice(0, 3) || [];
    if (genresToShow.length > 0) {
        genresToShow.forEach(genre => {
            const genreEl = document.createElement('div');
            genreEl.className = 'genre';
            genreEl.textContent = genre.name;
            genresContainer.appendChild(genreEl);
        });
    } else {
        genresContainer.innerHTML = '<div class="no-data">No genres available</div>';
    }

    // 5. Fixed cast (max 10)
    const castContainer = document.getElementById('popup-cast');
    castContainer.innerHTML = '';
    const castToShow = detailedItem.credits?.cast?.slice(0, 10) || [];
    if (castToShow.length > 0) {
        castToShow.forEach(person => {
            const actorEl = document.createElement('div');
            actorEl.className = 'cast-member';
            actorEl.textContent = person.name;
            castContainer.appendChild(actorEl);
        });
    } else {
        castContainer.innerHTML = '<div class="no-data">No cast information</div>';
    }

    // Hide loading state and show popup
    popup.classList.remove('loading');
    popup.classList.add('active');
}

// Display popular content from JSON data
function displayPopularContent() {
    // Shuffle the available content to show different items on each refresh
    const shuffledContent = [...serverData.content];
    for (let i = shuffledContent.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledContent[i], shuffledContent[j]] = [shuffledContent[j], shuffledContent[i]];
    }

    // Take the first 8 items
    const popularItems = shuffledContent.slice(0, 12);

    // Create HTML for popular content
    const cardsHTML = popularItems.map(item => {
        // Use the first poster from the posters array
        const posterUrl = item.posters ? item.posters[0] : 'https://via.placeholder.com/300x450?text=No+Image';

        return `
                    <div class="result-card">
                        <div class="card-poster">
                            <img src="${posterUrl}" alt="${item.title}">
                        </div>
                    </div>
                `;
    }).join('');

    resultsContainer.innerHTML = `
                <div class="results-section">
                    <h2 class="section-title">
                        <i class="fas fa-fire"></i>
                        Top Pick For You
                    </h2>
                    <div class="results-grid">
                        ${cardsHTML}
                    </div>
                </div>
            `;

    // Add event listeners to cards
    popularItems.forEach((item, index) => {
        const card = document.querySelectorAll('.result-card')[index];
        card.addEventListener('click', () => {
            if (item.url) {
                // In a real app, we would navigate to the content URL
                // Get current URL components
                const currentUrl = new URL(window.location.href);

                // Remove '/search' from the end of the current path
                const newPath = currentUrl.pathname.replace(/\/search\/?$/, '');

                // Construct new URL using origin, cleaned path, and item's relative URL
                const targetUrl = `${currentUrl.origin}${newPath}/${item.url}`;

                window.location.href = targetUrl;
            }
        });
    });
}

// Initialize the app
window.addEventListener('DOMContentLoaded', fetchServerData);
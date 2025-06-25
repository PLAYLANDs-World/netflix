// Function to get random movies
function getRandomMovies(content, count) {
    // Shuffle the array
    const shuffled = [...content].sort(() => 0.5 - Math.random());
    // Return the requested number of movies
    return shuffled.slice(0, count);
}

// Function to get a random poster from a movie's posters array
function getRandomPoster(movie) {
    if (movie.posters && movie.posters.length > 0) {
        const randomIndex = Math.floor(Math.random() * movie.posters.length);
        return movie.posters[randomIndex];
    }
    return '';
}

// Function to create a movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    card.onclick = () => {
        let targetUrl = movie.url;
        
        // Handle full URLs
        if (targetUrl.startsWith('http')) {
            window.location.href = targetUrl;
            return;
        }
        
        // Ensure URL starts with a slash
        if (!targetUrl.startsWith('/')) {
            targetUrl = '/' + targetUrl;
        }

        // Get current path and split into segments
        const currentPath = window.location.pathname;
        const pathSegments = currentPath.split('/').filter(segment => segment);
        
        // Preserve base path (all segments except last two)
        const baseSegments = pathSegments.slice(0, -2);
        const basePath = baseSegments.length > 0 ? '/' + baseSegments.join('/') : '';

        // Create new URL and navigate
        const newPath = basePath + targetUrl;
        window.location.href = window.location.origin + newPath;
    };

    // ... rest of your card creation code (poster, title, description, etc) ...
    const poster = document.createElement('img');
    poster.className = 'movie-poster';
    poster.src = getRandomPoster(movie);
    poster.alt = movie.title;

    const info = document.createElement('div');
    info.className = 'movie-info';

    const title = document.createElement('div');
    title.className = 'movie-title';
    title.textContent = movie.title;

    const meta = document.createElement('div');
    meta.className = 'movie-meta';
    meta.innerHTML = `
        <span>${movie.year}</span>
        <span>${movie.ageRating}</span>
        <span class="movie-rating">${movie.rating} <i class="fas fa-star"></i></span>
    `;

    const description = document.createElement('div');
    description.className = 'movie-description';
    description.textContent = movie.description;

    info.appendChild(title);
    info.appendChild(meta);
    info.appendChild(description);

    card.appendChild(poster);
    card.appendChild(info);

    return card;
}

// Function to populate a section with random movies
function populateSection(sectionId, content, count) {
    const container = document.getElementById(sectionId);
    container.innerHTML = '';

    const movies = getRandomMovies(content, count);
    movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

// Load JSON data from content-data.json
async function loadMovieData() {
    try {
        const response = await fetch('../../data/content-data.json');
        if (!response.ok) {
            throw new Error('Failed to load data');
        }
        const data = await response.json();

        // Get the content array
        const content = data.content || [];

        // Populate sections
        populateSection('featured-movies', content, 10);
        populateSection('top-picks', content, 10);
        populateSection('recently-added', content, 10);

    } catch (error) {
        console.error('Error loading movie data:', error);
        // Show error message
        document.querySelectorAll('.movies-container').forEach(container => {
            
            container.innerHTML = `<div class="error">Ops!.. Nothing here!...</div>`;
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', loadMovieData);
let scrollY = 0;

function lockBodyScroll() {
    scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('body-lock');
}

function unlockBodyScroll() {
    document.body.classList.remove('body-lock');
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('main-slideshow-container');
    let currentIndex = 0;
    let contentData = [];

    // Fetch JSON data
    fetch('data/content-data.json')
        .then(response => response.json())
        .then(data => {
            // Get last 5 items and reverse the array
            contentData = data.content.slice(-5).reverse();
            initializeSlideshow();
            startSlider();
        })
        .catch(error => console.error('Error:', error));

    function initializeSlideshow() {
        // Load first slide immediately
        container.innerHTML = generateSlideHTML(contentData[currentIndex]);

        // Preload next slide's images
        preloadNextImages();
    }

    function generateSlideHTML(item) {
        return `
        <div class="home-main-movie-display" 
             style="background: 
                linear-gradient(to top, #000000 10%, transparent 90%),
                linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url('${item.backdrops[0]}') no-repeat center center/cover;">
            <div class="home-main-movie-display-content">
                <img src="${item.posters[0]}" alt="${item.title}">
                <div class="home-main-movie-display-info">
                    <span class="home-main-movie-display-name">${item.title}</span>
                    <span class="home-main-movie-display-description">${item.description}</span>
                    <div class="home-main-movie-display-more-info">
                        <span class="imdb-logo">IMDb ${item.rating}</span>
                        <span class="tv-rating">${item.ageRating}</span>
                        <span class="rel-year">${item.year}</span>
                    </div>
                </div>
            </div>
            <div class="home-main-movie-display-control">
                <a class="watch-now-this" onclick="openstreamingpage('${item.url}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="play">
                        <path d="M4,20.4V3.6A1.457,1.457,0,0,1,6.1844,2.22l13.095,8.4a1.6811,1.6811,0,0,1,0,2.7594l-13.095,8.4A1.457,1.457,0,0,1,4,20.4Z"></path>
                    </svg>Watch Now
                </a>
            </div>
            <div class="left-border-smoke"></div>
            <div class="right-border-smoke"></div>
            <div class="top-border-smoke"></div>
        </div>`;
    }

    function preloadNextImages() {
        const nextIndex = (currentIndex + 1) % contentData.length;
        const nextItem = contentData[nextIndex];

        // Create hidden image elements to cache
        const bgPreload = new Image();
        bgPreload.src = nextItem.backdrops[0];

        const posterPreload = new Image();
        posterPreload.src = nextItem.posters[0];
    }

    function startSlider() {
        setInterval(() => {
            // Preload next images before transition
            preloadNextImages();

            // Update index and slide
            currentIndex = (currentIndex + 1) % contentData.length;
            container.innerHTML = generateSlideHTML(contentData[currentIndex]);
            triggerSlideAnimation();

        }, 8000); // 5-second interval
    }

    function triggerSlideAnimation() {
        const content = container.querySelector('.home-main-movie-display-content');
        content.classList.add('slide-entry');
        setTimeout(() => content.classList.remove('slide-entry'), 1000);
    }
});






























const spinner = document.getElementById('spinner');

function randomizeArc() {
    const styles = [
        { borderTopColor: '#e50914', borderRightColor: 'transparent' },  // standard
        { borderTopColor: '#e50914', borderRightColor: '#e50914' },      // semi
        { borderTopColor: 'transparent', borderRightColor: '#e50914' },  // quarter
        { borderTopColor: '#e50914', borderRightColor: '#e50914' },      // half
    ];

    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    spinner.style.borderTopColor = randomStyle.borderTopColor;
    spinner.style.borderRightColor = randomStyle.borderRightColor;


}

setInterval(randomizeArc, 1500); // update every 1.5s










async function fetchMovieData() {
    try {
        const response = await fetch('data/content-data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.content.slice(-50).reverse();
    } catch (error) {
        console.error('Error fetching movie data:', error);
        document.querySelector('.loading').innerHTML = `
                    <div style="text-align: center; padding: 20px; color: #e50914;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 15px;"></i>
                        <h2>Failed to load movies</h2>
                        <p>Please check the JSON file path and content</p>
                    </div>
                `;
        return [];
    }
}

// Function to initialize the app
async function initApp() {
    // Simulate loading with a delay for demo
    setTimeout(async () => {
        const movies = await fetchMovieData();

        // Remove loading indicator
        const loadingElement = document.querySelector('.loading');
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }

        // If no movies, show message
        if (!movies || movies.length === 0) {
            document.getElementById('main-container').innerHTML = `
                        <div style="text-align: center; padding: 50px; color: #aaa;">
                            <i class="fas fa-film" style="font-size: 3rem; margin-bottom: 20px;"></i>
                            <h2>No movies found</h2>
                            <p>Try refreshing the page or check your JSON file</p>
                        </div>
                    `;
            return;
        }

        // Process and display movies
        displayMovies(movies);
    }, 1500);
}

// Function to display movies by genre
function displayMovies(movies) {
    const mainContainer = document.getElementById('main-container');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.querySelector('.close-btn');
    const detailBackdrop = document.getElementById('detail-backdrop');
    const detailLogo = document.getElementById('detail-logo');
    const detailTitle = document.getElementById('detail-title');
    const detailYear = document.getElementById('detail-year');
    const detailRating = document.getElementById('detail-rating');
    const detailAge = document.getElementById('detail-age');
    const detailDescription = document.getElementById('detail-description');
    const detailGenres = document.getElementById('detail-genres');

    // Close overlay when clicking close button
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        overlay.classList.remove('active');
        unlockBodyScroll(); // Unfreeze background
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
            unlockBodyScroll(); // Unfreeze background
        }
    });

    // Close overlay when clicking outside the card
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            overlay.classList.remove('active');
            unlockBodyScroll(); // Unfreeze background
        }
    });

    // Create a map to group movies by genre
    const genresMap = new Map();
    const usedMovies = new Set();

    // Group movies by genre
    movies.forEach(movie => {
        for (const genre of movie.genre) {
            if (!genresMap.has(genre)) {
                genresMap.set(genre, []);
            }

            const genreMovies = genresMap.get(genre);
            // Only add movie if it hasn't been used and we have space
            if (!usedMovies.has(movie.id)) {
                if (genreMovies.length < 10) {
                    genreMovies.push(movie);
                    usedMovies.add(movie.id);
                    break; // Movie is added to one genre only
                }
            }
        }
    });

    // Create the genre sections
    genresMap.forEach((movies, genre) => {
        if (movies.length === 0) return;

        const genreSection = document.createElement('section');
        genreSection.className = 'genre-row';

        const genreTitle = document.createElement('h2');
        genreTitle.className = 'genre-title';
        genreTitle.innerHTML = `<i class="fas fa-tag"></i>${genre}`;

        const moviesContainer = document.createElement('div');
        moviesContainer.className = 'movies-container';

        movies.forEach((movie, index) => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.dataset.id = movie.id;
            movieCard.style.animationDelay = `${index * 0.05}s`;


            const img = document.createElement('img');
            img.src = movie.backdropswithtext[0] || 'https://source.unsplash.com/random/240x360/?movie';
            img.alt = movie.title;
            img.loading = 'lazy';

            const movieCardContent = document.createElement('div');
            movieCardContent.className = 'movie-card-content';

            const rating = document.createElement('div');
            rating.className = 'movie-rating';
            rating.innerHTML = `<i class="fas fa-star"></i> ${movie.rating}`;

            const title = document.createElement('div');
            title.className = 'movie-title';
            title.textContent = movie.title;

            const info = document.createElement('div');
            info.className = 'movie-info';
            info.innerHTML = `
                        <span class="movie-year">${movie.year}</span>
                        <span class="movie-age">${movie.ageRating}</span>
                    `;

            movieCardContent.appendChild(rating);
            movieCardContent.appendChild(title);
            movieCardContent.appendChild(info);

            // Create long press indicator
            const longpressIndicator = document.createElement('div');
            longpressIndicator.className = 'longpress-indicator';
            longpressIndicator.innerHTML = `
                        <div class="longpress-circle">
                            <div class="longpress-text">Hold</div>
                        </div>
                    `;

            movieCard.appendChild(img);
            movieCard.appendChild(movieCardContent);
            movieCard.appendChild(longpressIndicator);

            // Touch tracking variables
            let touchStartTime = 0;
            let touchStartX = 0;
            let touchStartY = 0;
            let longPressTriggered = false;
            let longPressTimer;
            let isTouchDevice = 'ontouchstart' in window;

            // Handle touch start
            const handleTouchStart = (e) => {
                touchStartTime = Date.now();
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                longPressTriggered = false;

                // Start long press timer
                longPressTimer = setTimeout(() => {
                    if (touchStartTime && !longPressTriggered) {
                        // Show long press indicator
                        longpressIndicator.style.opacity = '1';
                        longPressTriggered = true;
                        showMovieDetails(movie);
                        if (navigator.vibrate) navigator.vibrate(100);
                    }
                }, 800);
            };

            // Handle touch move
            const handleTouchMove = (e) => {
                if (!touchStartTime) return;

                const touch = e.touches[0];
                const deltaX = Math.abs(touch.clientX - touchStartX);
                const deltaY = Math.abs(touch.clientY - touchStartY);

                // If moved more than 10px, cancel long press
                if (deltaX > 10 || deltaY > 10) {
                    clearTimeout(longPressTimer);
                    touchStartTime = 0;
                    longpressIndicator.style.opacity = '0';
                }
            };

            // Handle touch end
            const handleTouchEnd = (e) => {
                clearTimeout(longPressTimer);
                touchStartTime = 0;
                longpressIndicator.style.opacity = '0';
            };

            // Mouse events for desktop hover
            if (!isTouchDevice) {
                let hoverTimer;

                movieCard.addEventListener('mouseenter', () => {
                    hoverTimer = setTimeout(() => {
                        showMovieDetails(movie);
                    }, 1000);
                });

                movieCard.addEventListener('mouseleave', () => {
                    clearTimeout(hoverTimer);
                });
            }

            // Touch events for mobile (only long press)
            if (isTouchDevice) {
                movieCard.addEventListener('touchstart', handleTouchStart, { passive: true });
                movieCard.addEventListener('touchmove', handleTouchMove, { passive: true });
                movieCard.addEventListener('touchend', handleTouchEnd);
                movieCard.addEventListener('touchcancel', handleTouchEnd);
            }

            // Prevent context menu on long press
            movieCard.addEventListener('contextmenu', (e) => e.preventDefault());

            movieCard.addEventListener('click', (e) => {
                if (!longPressTriggered && movie.url) {
                    window.location.href = movie.url; // open in same tab
                }
            });

            moviesContainer.appendChild(movieCard);
        });

        genreSection.appendChild(genreTitle);
        genreSection.appendChild(moviesContainer);
        mainContainer.appendChild(genreSection);
    });

    // Function to show movie details
    function showMovieDetails(movie) {
        const playBtnFormDetail = document.getElementById('play-btn-form-detail');
        detailBackdrop.src = movie.backdrops[0] || 'https://source.unsplash.com/random/800x450/?cinema';

        // Use logo if available, otherwise hide it
        if (movie.logo && movie.logo.length > 0 && movie.logo[0]) {
            detailLogo.src = movie.logo[0];
            detailLogo.style.display = 'block';
        } else {
            detailLogo.style.display = 'none';
        }

        playBtnFormDetail.innerHTML = `<button class="play-btn" onclick="openstreamingpage('${movie.url}')">
                                            <i class="fas fa-play"></i> Watch Now
                                        </button>`;
        detailTitle.textContent = movie.title;
        detailYear.textContent = movie.year;
        detailRating.textContent = movie.rating;
        detailAge.textContent = movie.ageRating;
        detailDescription.textContent = movie.description;

        // Add genres
        overlay.classList.add('active');
        lockBodyScroll(); // Freeze background
        detailGenres.innerHTML = '';
        movie.genre.forEach(genre => {
            const genreTag = document.createElement('span');
            genreTag.className = 'genre-tag';
            genreTag.textContent = genre;
            detailGenres.appendChild(genreTag);
        });

        overlay.classList.add('active');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);





function openstreamingpage(url) {
    window.location.href = url; // Opens the URL in the same tab
}
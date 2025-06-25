function resetNetflixHeader() {
    const headerDiv = document.querySelector('div.header');

    if (headerDiv) {
        headerDiv.innerHTML = `
                <a href="/"><img src="https://cdn.jsdelivr.net/gh/Unknownyy00/01-img-share@main/Netflix-Symbol-RGB.png" class="prime-logo"></a>
                <div class="user-menu">
                    <img src="https://cdn.jsdelivr.net/gh/Unknownyy00/01-img-share@main/profile-pic.jpg" alt="User Profile" class="net-user-icon">
                    <div class="dropdown-container">
                        <div class="user-info">
                            <img src="https://cdn.jsdelivr.net/gh/Unknownyy00/01-img-share@main/profile-pic.jpg" alt="User Profile">
                            <div class="user-name">Anonymous</div>
                        </div>
                            <ul class="dropdown-menu">
                                <li><a href=""><i class="fas fa-user"></i> My Profile</a></li>
                                <li><a href=""><i class="fas fa-cog"></i> Account Settings</a></li>
                                <li class="divider"></li>
                                <li><a href="/"><i class="fas fa-home"></i> Home</a></li>
                                <li><a href=""><i class="fas fa-film"></i> Movies</a></li>
                                <li><a href=""><i class="fas fa-tv"></i> TV Shows</a></li>
                                <li class="divider"></li>
                                <li><a href=""><i class="fas fa-sign-out-alt"></i> Sign out</a></li>
                            </ul>
                    </div>
                </div>
                <div class="smoke-effect-header"></div>
                `;

        // Reattach event listeners after resetting the header
        setupHeaderEvents();
    } else {
        console.warn('Header div not found. Make sure you have an element with class="header"');
    }
}

function setupHeaderEvents() {
    // Toggle dropdown menu
    const userMenu = document.querySelector('.user-menu');
    const dropdown = document.querySelector('.dropdown-container');

    if (userMenu && dropdown) {
        userMenu.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdown.classList.add('show');
            headerDiv.style.display = 'none';
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (dropdown && dropdown.classList.contains('show') &&
            !e.target.closest('.user-menu')) {
            dropdown.classList.remove('show');
        }
    });
}


// Initialize when DOM is loaded
window.addEventListener('DOMContentLoaded', function () {
    resetNetflixHeader();

    // Add Font Awesome if not already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }


    // Add scroll effect to header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
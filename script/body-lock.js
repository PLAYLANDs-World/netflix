let scrollY = 0;

function lockBody() {
    scrollY = window.scrollY;
    document.body.classList.add('body-locked');
    document.body.style.top = `-${scrollY}px`;
}

function unlockBody() {
    document.body.classList.remove('body-locked');
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
}

const homeScoreEl = document.querySelector('.home-section .score');
const guestScoreEl = document.querySelector('.guest-section .score');
const timeEl = document.querySelector('.timer .time');
let interval = null;

function addScore(team, score) {
    if (team === 'home') {
        homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + score;
    } else {
        guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + score;
    }
}

function newGame() {
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    timeEl.textContent = 0;
    // Reset timer
    clearInterval(interval);    
    setTimer();
}

function setTimer() {    
    let time = 0;
    interval = setInterval(() => {
        time += 1;
        timeEl.textContent = time;
    }, 1000);
}

// Make functions globally accessible
window.addScore = addScore;
window.newGame = newGame;
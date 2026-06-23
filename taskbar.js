function ToggleStartMenu() {
    const menu = document.getElementById('start-menu');
    menu.classList.toggle('active');
}

document.addEventListener('click', function(e) {
    const menu = document.getElementById('start-menu');
    const startButton = document.getElementById('start-btn');

    if (menu && startButton) {
        if (!menu.contains(e.target) && !startButton.contains(e.target)) {
            menu.classList.remove('active');
        }
    }
});


const shutdownBtn = document.getElementById('shutdown-btn');

if (shutdownBtn) {
    shutdownBtn.addEventListener('click', function() {
        const menu = document.getElementById('start-menu');
        if (menu) menu.classList.remove('active');
        
        const loginScreen = document.getElementById('login-screen');
        if (loginScreen) {
            loginScreen.style.display = 'flex';
        }

        const loginInput = document.getElementById('login-input');
        if (loginInput) {
            loginInput.value = '';
        }
    });
}
let highestZ = 10;

function updateClock() {
    const clockElement = document.getElementById('system-clock');
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();

function openWindow(appId) {
    if (document.getElementById(`window-${appId}`)) {
        return;
    }

    const desktop = document.getElementById('desktop');
    const windowDiv = document.createElement('div');
    
    windowDiv.id = `window-${appId}`;
    windowDiv.className = 'window';
    windowDiv.style.top = '100px';
    windowDiv.style.left = '100px';
    
   let content = '';

    if (appId === 'terminal') {
        content = `
            <div class="window-header">
                <span class="window-title">Terminal</span>
                <button class="close-btn" onclick="closeWindow('terminal')"></button>
            </div>
            <div class="window-content" id="terminal-body">
            </div>
        `;

    } else if (appId === 'app1') {
        content = `
            <div class="window-header">
                <span class="window-title">My documents</span>
                <button class="close-btn" onclick="closeWindow('app1')"></button>
            </div>
            <div class="window-content" id="explorer-body">
            </div>
        `;

    } else {
        content =`
        <div class="window-header">
            <span class="window-title">${appId.toUpperCase()}</span>
            <button class="close-btn" onclick="closeWindow('${appId}')"></button>
        </div>
        <div class="window-content">
            <p>Welcome to ${appId}. System environment loaded successfully.</p>
        </div>
        `;
    }
    windowDiv.innerHTML = content;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const header = windowDiv.querySelector('.window-header');

    header.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - windowDiv.offsetLeft;
        offsetY = e.clientY - windowDiv.offsetTop;
    });


    desktop.appendChild(windowDiv);

    if (appId === 'terminal') {
        initTerminal();
    }

    if (appId === 'app1') {
        initExplorer() ;
    }

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            windowDiv.style.left = (e.clientX - offsetX) + 'px';
            windowDiv.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function(e) {
        isDragging = false;
    });

    windowDiv.addEventListener('mousedown', function() {
        highestZ++;
        windowDiv.style.zIndex = highestZ;
    });
}

function closeWindow(appId) {
    const windowElement = document.getElementById(`window-${appId}`);
    if (windowElement) {
        windowElement.remove();
    }
}

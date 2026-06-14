const fileSystem = {

    root: [
        { name: 'Wallpapers', type:'folder' },
        { name: 'Icons', type:'folder' },
        { name: 'Projects', type:'folder' }
    ],

    Wallpapers: [
        {name: 'bliss.jpg', type: 'image', src: 'Wallpapers/bliss.jpg'}
    ],

    Icons: [
        {name: 'folder_icon_v4.svg', type: 'image', src: 'icons/folder_icon_v4.svg'},
        {name: 'terminal.png', type: 'image', src: 'icons/terminal.png'}
    ],

    Projects: [
        {name: 'WebOS1', type: 'link', url: 'https://github.com/otzpt/WebOS1'}
    ]
};

let currentFolder = 'root';

function initExplorer() {
    renderFolder('root');

}

function renderFolder(folderName) {

        currentFolder = folderName;

        const body = document.getElementById('explorer-body');
        const items = fileSystem[folderName];

        let html = '';

        if (folderName !== 'root') {
            html += `<div class="explorer-item" ondblclick="renderFolder('root')">
            <div class="explorer-icon">⬅️</div>
            <span>..</span>
            </div>`;
        }

        items.forEach(function(item) {
            let icon = '';

            if (item.type === 'folder') {
                icon = `<img src="icons/folder_icon_v4.svg">`;
            } else if (item.type === 'image') {
                icon = `<img src="${item.src}">`;
            } else if (item.type === 'link') {
                icon = `🔗`;
            }
            
             html += `<div class="explorer-item" ondblclick="handleItemOpen('${item.name}')">
            <div class="explorer-icon">${icon}</div>
            <span>${item.name}</span>
            </div>`;
        });

        body.innerHTML = html;

}

function handleItemOpen(itemName) {

    const items = fileSystem[currentFolder];

    const item = items.find(function(i) {
        return i.name === itemName;
    });

    if (item.type === 'folder') {
        renderFolder(itemName);
    } else if (item.type === 'image') {
        openImageViewer(item.name, item.src);
    } else if (item.type === 'link') {
        window.open(item.url, '_blank');
    }
}

function openImageViewer(name, src) {
    const desktop = document.getElementById('desktop');
    const windowDiv = document.createElement('div');

    const windowId = 'viewer-' + Date.now();

    windowDiv.id = windowId;
    windowDiv.className = 'window';
    windowDiv.style.top = (window.innerHeight / 2 - 150) + 'px';
    windowDiv.style.left = (window.innerWidth / 2 - 160) + 'px';
    windowDiv.style.width = '320px';

    windowDiv.innerHTML = `
        <div class="window-header">
            <span class="window-title">${name}</span>
            <button class="close-btn" onclick="document.getElementById('${windowId}').remove()"></button>
        </div>
        <div class="window-content" style="display:flex; justify-content:center;">
            <img src="${src}" style="max-width:100%; max-height:250px;">
        </div>
    `;

    desktop.appendChild(windowDiv);

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const header = windowDiv.querySelector('.window-header');

    header.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - windowDiv.offsetLeft;
        offsetY = e.clientY - windowDiv.offsetTop;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            windowDiv.style.left = (e.clientX - offsetX) + 'px';
            windowDiv.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function(e) {
        isDragging = false;
    });

    windowDiv.addEventListener('mousedown', function(e) {
        highestZ++;
        windowDiv.style.zIndex = highestZ;
    }); 
}
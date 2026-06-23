function getWelcomeContent() {
    return `
        <div class="window-header">
            <span class="window-title">Welcome</span>
            <button class="close-btn" onclick="closeWindow('welcome')"></button>
        </div>
        <div class="window-content" style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:20px;">
            <div style="font-size:80px;">☕</div>
            <h2 style="color:var(--text-color); font-size:16px;">CaffeineOS Lite</h2>
            <p style="text-align:center; opacity:0.7; font-size:13px;">Welcome to CaffeineOS Lite, my first ever WebOS.</p>
        </div>
    `;
}
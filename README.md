# CaffeineOS

A web-based desktop environment built with HTML, CSS, and JavaScript — my first JS project, made for the Hack Club Stardance Challenge.

🔗 **Live demo:** [webos1-otzpt.netlify.app](https://webos1-otzpt.netlify.app/)

## Features

- Draggable windows with focus (z-index) management
- Custom login screen — just asks for a username, no passwords
- Working terminal app with a real shell-like prompt (`user@webos:~$`)
  - Commands: `help`, `whoami`, `ls`, `pwd`, `clear`, `sudo`, `apt install <package>` (animated fake output), `neofetch`
- File explorer ("My Documents") with folder navigation and an image viewer
- Classic Windows XP "Bliss" wallpaper with a custom dark UI theme

## Tech

Pure HTML/CSS/JS, no frameworks or build tools. Everything runs client-side.

## Project structure
index.html

style.css

app.js          → window management, drag, z-index

login.js        → login screen logic

terminal.js     → terminal commands

explorer.js     → file explorer / image viewer

icons/          → custom SVG/PNG icons

Wallpapers/     → desktop wallpaper

## About

This is my first project in JavaScript. I came from PowerShell, HTML/CSS, Python, and C — built this step by step, learning JS concepts (DOM manipulation, events, closures) along the way as part of the Stardance Challenge.

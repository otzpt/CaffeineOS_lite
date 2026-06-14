function initTerminal() {
    const body = document.getElementById('terminal-body');
    
    body.innerHTML = `
        <div id="terminal-output"></div>
        <div id="terminal-input-line">
            <span id="terminal-prompt">${username}@webos:~$ </span>
            <input id="terminal-input" type="text" autocomplete="off" spellcheck="false">
        </div>
    `;

    const input = document.getElementById('terminal-input');
    input.focus();

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const cmd = input.value.trim();
            input.value = '';
            handleCommand(cmd);
        }
    });
}

function handleCommand(cmd) {
    const output = document.getElementById('terminal-output');
    
    const inputLine = document.createElement('div');
    inputLine.textContent = `${username}@webos:~$ ${cmd}`;
    output.appendChild(inputLine);

    const response = document.createElement('div');
    
    const args = cmd.split(' ');

    switch(args[0]) {
        case 'help':
            response.textContent = 'comandos: help, clear, whoami, ls, pwd, sudo, apt, neofetch';
            break;

        case 'whoami':
            response.textContent = username;
            break;

        case 'clear':
            output.innerHTML = '';
            return;

        case 'ls':
            response.textContent = 'documents  terminal  wallpapers';
            break;

        case 'pwd':
            response.textContent = '/home/' + username;
            break;

        case 'sudo':
            response.textContent = `${username} is not in the sudoers file. This incident will be reported.`;
            break;

        case '':
            return;

        case 'apt':
            if (args[1] === 'install' && args[2]) {
                output.appendChild(response);
                runAptInstall(args[2]);
                return;
            }
            response.textContent = 'uso: apt install <pacote>';
            break;

        case 'neofetch':
            output.appendChild(response);
            runNeofetch();
            return;

        default:
            response.textContent = `comando não encontrado: ${cmd}`;
    }

    output.appendChild(response);
}

function runAptInstall(pkg) {
    const output = document.getElementById('terminal-output');
    const lines = [
        `Reading packages list... Ready`,
        `Building dependecis tree... Ready`,
        `The next package will be installed: ${pkg}`,
        `0 updated, 1 new install, 0 removed`,
        `Obtaining: ${pkg}... 100%`,
        `Selecting package ${pkg} previously not selected`,
        `Preparing to unpack ${pkg}`,
        `Unpacking ${pkg}...`,
        `Configuring ${pkg}...`
    ];

    let i = 0;

    function printNext() {
        if (i < lines.length) {
            const line = document.createElement('div');
            line.textContent = lines[i];
            output.appendChild(line);
            output.scrollTop = output.scrollHeight;
            i++;
            setTimeout(printNext, 300);
        }
    }
    printNext();
}

function runNeofetch() {
    const output = document.getElementById('terminal-output');
    const info = [
        `${username}@webos`,
        `-----------------`,
        `OS: WebOS1`,
        `Host: Browser`,
        `Kernel: JavaScript ES6`,
        `Uptime: ${Math.floor(performance.now() / 1000)}s`,
        `Shell: webos-sh`,
        `Resolution: ${window.innerWidth}x${window.innerHeight}`,
        `Terminal: webos-terminal`
    ];

    info.forEach(line => {
        const div = document.createElement('div');
        div.textContent = line;
        output.appendChild(div);
    });
}
let username = '';

const loginScreen = document.getElementById('login-screen');
const loginInput = document.getElementById('login-input');
const loginBtn = document.getElementById('login-btn');

function dologin() {
    const val = loginInput.value.trim();
    if (val == '') return;
    username = val;
    loginScreen.style.display = 'none'; 
}

loginBtn.addEventListener('click', dologin);

loginInput.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') dologin();
});
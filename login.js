document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        sessionStorage.setItem('user', username);
        document.cookie = "lastLogin=" + new Date().toISOString() + "; path=/";
        window.location.href = "cadastro.html";
    } else {
        alert('Usuário ou senha inválidos!');
    }
});
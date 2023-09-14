const users = [];

function showRegister() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value;

    users.push({ username, password, email });
    alert('Registration Successful! You can now log in.');
    showLogin();
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login Successful!');
        window.location.href = `dashboard.html?username=${username}`;
    } else {
        alert('Login Failed. Invalid credentials.');
    }

}


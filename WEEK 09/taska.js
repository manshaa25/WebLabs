// Check if user is already logged in when the page loads
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showLogoutButton();
    }
}

// Function to handle user login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are correct (for simplicity, checking for a hardcoded value)
    if (username === 'aiman' && password === 'aa00dba') {
        // Store login status and credentials securely in Local Storage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        showLogoutButton();
    } else {
        alert('Invalid username or password');
    }
}

// Function to handle user logout
function logout() {
    // Remove login status and credentials from Local Storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    // Hide logout button and show login form
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';
}

// Function to show logout button and hide login form
function showLogoutButton() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn"); 

    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const logoutBtn = document.getElementById("logout-btn");

    if (isLoggedIn === "true") {
        if (loginBtn) loginBtn.style.display = "none"; 
        if (signupBtn) signupBtn.style.display = "none"; 
        if (logoutBtn) logoutBtn.style.display = "block"; 
    } else {
        if (loginBtn) loginBtn.style.display = "block"; 
        if (signupBtn) signupBtn.style.display = "block"; 
        if (logoutBtn) logoutBtn.style.display = "none"; 
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn"); 
            location.reload();
        });
    }
});


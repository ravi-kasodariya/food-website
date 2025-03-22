document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.querySelector("input[type='text']").value;
            const password = document.querySelector("input[type='password']").value;

            const validEmail = "user@example.com";
            const validPassword = "password123";

            if (email === validEmail && password === validPassword) {
                localStorage.setItem("isLoggedIn", "true"); 
                alert("Login Successful!");
                window.location.href = "index.html"; 
            } else {
                alert("Invalid email or password!");
            }
        });
    }
});

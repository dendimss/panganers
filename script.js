const USERNAME = "dendims";
const PASSWORD = "swasembada";

/* LOGIN */

function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === USERNAME && password === PASSWORD) {

        sessionStorage.setItem("loggedIn", "true");

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("errorMessage").innerText =
            "Username atau password salah!";

    }

}

/* CEK LOGIN */

if(window.location.pathname.includes("dashboard.html")) {

    if(sessionStorage.getItem("loggedIn") !== "true") {

        window.location.href = "index.html";

    }

}

/* LOGOUT */

function logout() {

    sessionStorage.removeItem("loggedIn");

    window.location.href = "index.html";

}
const SUPABASE_URL = "https://eqyagkxpojaffrflvice.supabase.co";
const SUPABASE_KEY = "sb_publishable_WP-KLksL6oIksMNszZCdrA_sYWQG2AT";

const supabaseClient = supabase.createClient (
    SUPABASE_URL,
    SUPABASE_KEY
);

/* LOGIN */

async function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabaseClient
        .from("users")
        .select("*")
        .eq("username", username)
        .eq("password", password);

    if(data.length > 0) {

        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("username", username);

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("errorMessage").innerText =
            "Username atau password salah!";

    }

}

/* LOGIN DENGAN ENTER */

if(document.getElementById("loginPage")) {

    document.addEventListener("keydown", function(event) {

        if(event.key === "Enter") {

            login();

        }

    });

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


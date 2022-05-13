
const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // opreste formularul de la submit pentru a fii procesat
    let email = form.elements["email"].value;
    let password = form.elements["password"].value;

    const isValidEmail = validateEmail(form.elements.email);

    if (
        !isValidEmail 
    ) {
        e.preventDefault();
    }

    let user = fetchUser(email);

    if (user !== undefined) {
        if (user.password === password) {
            localStorage.setItem("userLogin", email);
            window.location.href = 'home.html';
        } else {
            showError("Datele de logare nu sunt bune", form.elements["password"]);
        }
    } else {
        showError("Datele de logare nu sunt bune", form.elements["password"]);
    }
});


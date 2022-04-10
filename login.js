const user1 = {
    fistName: "john",
    lastName: "doe",
    password: "test",
    email: "ene.2456@gmail.com",
    country: "Bucuresti",
    city: "Bragadiru"
}

const user2 = {
    fistName: "ene",
    lastName: "george",
    password: "test",
    email: "ene@gmail.com",
    country: "Bucuresti",
    city: "Bragadiru"
}

// addUser(user1);
//   addUser(user2);

const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // opreste formularul de la submit pentru a fii procesat
    let email = form.elements["email"].value;
    let password = form.elements["password"].value;

    if(!validateEmail(email) || isInputEmpty(password)){
        addInputMessage(form.elements["password"],INVALID_LOGIN);
    }

    let user = fetchUser(email);

    if (user !== undefined) {
        if (user.password === password) {
            localStorage.setItem("userLogin", email);
            window.location.href = 'home.html';
        } else {
            addInputMessage(form.elements["password"],INVALID_LOGIN);
        }
    } else {
        addInputMessage(form.elements["password"],INVALID_LOGIN);
    }
});



//adauga useri la inregistrare
function addUser(userDetails) {
    let users = JSON.parse(localStorage.getItem('users') || "[]");

    users.push(userDetails);
    localStorage.setItem("users", JSON.stringify(users));
}

function updateUser(userDetails,userEmail){
    let users = JSON.parse(localStorage.getItem('users') || "[]");

    const index = users.findIndex(email => email == userEmail);
    users.splice(index, 1);
    users.push(userDetails);
    localStorage.setItem("users", JSON.stringify(users))
}

function fetchUser(email) {
    let user = {};

    let users = JSON.parse(localStorage.getItem('users') || "[]");
    if (users.length !== 0) {
        user = users.find(e => e.email === email);
    }

    return user;
}

function fetchUserLogin() {
    let email = localStorage.getItem("userLogin");

    return fetchUser(email);
}

function appendUserDetails() {
    let user = fetchUserLogin();
    if (user !== undefined) {
        let text = user.fistName + ' ' + user.lastName;
        let userContainer = document.getElementById('user-container');
        let countCart = user.products.length;
        let cartCountElement = document.getElementById('cartCount');

        cartCountElement.append('('+countCart+')')
        if (userContainer !== null) {
            userContainer.append(text);
            document.getElementById('user-login-details').classList.add('display-none');
            document.getElementById('user-logout').classList.remove('display-none');
        }
    }
}

function checkUserLogIn(){
    let user = fetchUserLogin();
    if (user === undefined || Object.keys(user).length ===  0) {
        window.location.href = 'index.html'
    }
}

function logout(){
    localStorage.removeItem('userLogin');
    window.location.href = 'index.html'
}

function addToCart(productId){
    let user = fetchUserLogin();
    if (user !== undefined ||  Object.keys(user).length !==  0) {
        console.log(productId)
        if (!user.products.includes(productId)){
            user.products.push(productId);
            updateUser(user,user.email)
        }
    }
}

function validatePassword(password) {
    removeError(password);
    const specialChars = ["@", "#", "$", ".", "!","?"];
    if (password.value.length < 8) {
      showError(
        "Parola trebuie sa contina cel putin 8 caractere",
        password
      );
      return false;
    }
    let hasSpecialChar = false;
    for (let specialChar of specialChars) {
      if (password.value.includes(specialChar)) {
        hasSpecialChar = true;
      }
    }
    if (!hasSpecialChar) {
      showError(
        "Parola trebuie sa contina cel putin un caracter special "+ specialChars,
        password
      );
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    removeError(email);
    const allowedDomains = ["yahoo.com", "gmail.com", "outlook.com"];
    const characterCount = email.value
      .split("")
      .filter((character) => character === "@").length;
    if (characterCount !== 1) {
      showError("Adresa de email invalida", email);
      return false;
    }
    const [, domain] = email.value.split("@");
    if (!allowedDomains.includes(domain)) {
      showError("Email is not valid", email);
      return false;
    }

    return true;
  }

  function validateName(field, errorName) {
    removeError(field);

    if (field.value.length === 0) {
      showError("Campul este obligatoriu", field);
      return false;
    }
    if (field.value.length < 2) {
      showError("Campul trebuie sa contina cel putin 2 caractere", field);
      return false;
    }
    if (field.value[0].toUpperCase() !== field.value[0]) {
      showError("Campul trebuie sa inceapa cu o majuscula", field);
      return false;
    }
    return true;
  }

  function showError(message, field) {
    const error = field.parentNode.querySelector("small");;
    error.textContent = message;
    field.parentElement.appendChild(error);
    field.classList.add("invalid");
  }

  function removeError(field) {
    const error = field.parentNode.querySelector("small");
    error.innerText = '';
    field.classList.remove("invalid");
  }

///////////////////////
//checkUserLogIn();
appendUserDetails();

/////////////////////////
// vizibiliti password
function finputPassword() {
    const inputPassword = document.getElementById("password");
    if (inputPassword.type === "password") {
         inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
}
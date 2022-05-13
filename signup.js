const form = document.getElementById('signup');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var select = document.getElementById('country');
    const user = {
        fistName: form.elements.first_name.value,
        lastName: form.elements.last_name.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        country: select.options[select.selectedIndex].value,
        city: form.elements.city.value
    }

    console.log(user);

    const isValidPassword = validatePassword(form.elements.password);
    const isValidFirstName = validateName(form.elements.first_name);
    const isValidLastName = validateName(form.elements.last_name);
    const isValidEmail = validateEmail(form.elements.email);

    if (
        isValidPassword &&
        isValidEmail &&
        isValidFirstName &&
        isValidLastName
    ) {
       addUser(user);
       window.location.href = 'index.html';
    }
 
});


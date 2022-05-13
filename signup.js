const form = document.getElementById('signup');

form.addEventListener("submit", function (e) {
    const user = {
        fistName: form.elements.first_name.value,
        lastName: form.elements.last_name.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        country: form.elements.country.selectedIndex,
        city: form.elements.city.value
    }

    // const isValidPassword = validatePassword(user.password);
    // const isValidFirstName = validateName(user.fistName);
    // const isValidLastName = validateName(user.lastName);
    // const isValidEmail = validateEmail(user.email);

    // if (
    //     !isValidPassword ||
    //     !isValidEmail ||
    //     !isValidFirstName ||
    //     !isValidLastName
    // ) {
    //     console.log('asd');
    //     e.preventDefault();
    // }
    e.preventDefault();
});


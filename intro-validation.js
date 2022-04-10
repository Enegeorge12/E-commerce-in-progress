// let validForm = false;
//
// function validateEmail(email) {
//     document.getElementById(email).addEventListener('input', function (event) {
//         let camp = event.target;
//         let valid = document.getElementById('emailMsg');
//
//         let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//         if (emailRegex.test(camp.value)) {
//             validForm = true;
//             valid.innerText = "Email adress validated !";
//         } else {
//             camp.classList.add("invalid-input");
//             valid.innerText = "Email adress is not  validated !";
//         }
//     });
// }
//
// function validatePassword(password) {
//     document.getElementById(password).addEventListener('input', function (event) {
//         input = event.target;
//         //Minimum eight characters, at least one letter, one number and one special character
//         passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;
//         if (passwordRegex.test(input.value)) {
//             validForm = true;
//         } else {
//             input.classList.add("invalid-input");
//         }
//     });
// }
//
// function checkEmptyInput(inputId) {
//     document.getElementById(inputId).addEventListener('input', function (event) {
//         let input = event.target;
//         if (input.value.trim()  !== '') {
//             console.log(input.id);
//             validForm = true;
//         }
//     });
// }
//
// function activateRegisterBtn(inputId) {
//     document.getElementById(inputId).addEventListener('input', function (event) {
//         console.log('asdss');
//         btn = document.getElementById('creatAccount')
//         console.log(validForm);
//         if (validForm === true) {
//             btn.classList.remove("disabledBtn");
//         }
//     });
// }
//
// ////////////////////////////////////////////////////////
// activateRegisterBtn('formValidation');
// checkEmptyInput('first_name');
// checkEmptyInput('last_name');
// checkEmptyInput('city');
// // checkEmptyInput('country');
// // validateEmail('email');
// // validatePassword('password');
// ////////////////////////////////////////////////////////
//

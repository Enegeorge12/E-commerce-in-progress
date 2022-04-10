const form = document.getElementById('signup');
let validForm = false;

for (let element of form.elements) {
    isInputValid(element);
}

if(validForm){
    document.getElementById('creatAccount').classList.remove("disabledBtn");
}

function isInputValid(input) {
    input.addEventListener('input', function (event) {
        let target = event.target;
        if (!isInputEmpty(target)) {
            validForm = true
            if (target.id === 'email') {
                console.log(!validateEmail(target.value));
                if (!validateEmail(target.value)) {
                    addInputMessage(target, INVALID_EMAIL);
                } else {
                    removeInputMessage(target)
                }
            } else if (target.id === 'password') {
                if (!validatePassword(target.value)) {
                    addInputMessage(target, INVALID_PASSWORD);
                } else {
                    removeInputMessage(target)
                }
            }
        }else {
        }
    });
}
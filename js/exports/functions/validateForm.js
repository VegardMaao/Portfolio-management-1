export function validateTextInputLength(input, minLength, maxLength) {
    input.minLength = minLength;
    input.maxLength = maxLength;
    if (input.validity.valid) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
};

export function emailRegExTest(emailInput) {
    const mailValue = emailInput.value;
    const emailRegEx = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
    const test = emailRegEx.test(mailValue);
    if (test === true) {
        emailInput.classList.remove("invalid");
        emailInput.classList.add("valid");
    } else {
        emailInput.classList.remove("valid");
        emailInput.classList.add("invalid");
    }
}

export function validateAllInputs(inputs, btn) {
    let arrayOfBooleans = [];
    for (let i = 0; i < inputs.length; i++) {
        let singleInput = inputs[i];
        arrayOfBooleans.push(singleInput.validity.valid);
        let checker = arrayOfBooleans.every(Boolean);
        if (checker === true) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }
}
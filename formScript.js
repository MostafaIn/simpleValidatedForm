"use strict"

const allInputs = document.querySelectorAll('input');
const errorMsg = document.querySelectorAll('p');
const submitBtn = document.querySelector('.submitBtn');

const patterns = {
    fname: /^[a-zA-Z]{3,15}$/,
    lname: /^[a-zA-Z]{3,15}$/,
    age: /^(1[8-9]|[2-5][0-9]|6[0-5])$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    mobile: /^([0][4|5][0-9]{1})[-\s]?([0-9]{3}[-\s]?[0-9]{4})$/
};

// validation function
function validation(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

allInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        console.log(e.target.value);
        console.log(e.target.attributes.name.value);
        validation(e.target, patterns[e.target.attributes.name.value]);
    });
});


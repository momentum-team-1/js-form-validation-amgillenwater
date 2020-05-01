  
let form = document.querySelector('#parking-form')
let formIsValid
let alphabetic = /^[A-Za-z\'\s\.\,]+$/
//this is an expression that means only letters of the alphabet, declared the alphabetic variable to use as a condition in validation if/else statements, found here: https://www.w3resource.com/javascript/form/all-letters-field.php

form.addEventListener('submit', function (event) {
    formIsValid = true
    event.preventDefault()
//need to add something that resets everything to invalid unless there is a value in it, right now just submitting a blank page will return that the name is valid--a note: this might not be a global type of thing but needs to be included in each validation
//all validation functions will go here
    validateName()

})

function validateName () {
let nameInput = document.querySelector('#name');
let nameValue = nameInput.value;
let nameLength = nameValue.length;
let parentName = nameInput.parentElement;
//if the string has at least one charcter in it and all of it's characters are alphabetic, the name is valid, if not it is invalid
    if (nameLength >= 1 && nameValue.match(alphabetic)){
        console.log("Name is valid")
        parentName.classList.remove('input-invalid')
        parentName.classList.add('input-valid')
    } else {
        console.log("Name is not valid")
        parentName.classList.remove('input-valid')
        parentName.classList.add('input-invalid')
        formIsValid=false

    }
}

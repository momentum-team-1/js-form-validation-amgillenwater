  
let form = document.querySelector('#parking-form')
let formIsValid
let alphabetic = /^[A-Za-z]+$/

form.addEventListener('submit', function (event) {
    formIsValid = true
    event.preventDefault()
//need to add something that resets everything to invalid unless there is a value in it, right now just submitting a blank page will return that the name is valid
//all validation functions will go here
    validateName()

})

function validateName () {
let nameInput = document.querySelector('#name');
let nameValue = nameInput.value;
let nameLength = nameValue.length;
let parentName = nameInput.parentElement;
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
//need to figure out how to tell it the string needs to be alphabetic characters


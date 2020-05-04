  
let form = document.querySelector('#parking-form')
let formIsValid
let alphabetic = /^[A-Za-z\'\s\.\,]+$/
//this is an expression that means only letters of the alphabet, declared the alphabetic variable to use as a condition in validation if/else statements, found here: https://www.w3resource.com/javascript/form/all-letters-field.php
let numeric = 

form.addEventListener('submit', function (event) {
    formIsValid = true
    event.preventDefault()
//need to add something that resets everything to invalid unless there is a value in it, right now just submitting a blank page will return that the name is valid--a note: this might not be a global type of thing but needs to be included in each validation
//all validation functions will go here
    validateName()
    validateCarYear()
    validateCarMake()
    validateCarModel()
})



function validateName () {
let nameInput = document.querySelector('#name');
let nameValue = nameInput.value;
let nameLength = nameValue.length;
let parentName = nameInput.parentElement;
let nameAlert = document.createElement("P")
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
        nameAlert.innerText = "Name is required!"
        document.getElementById("name-field").appendChild(nameAlert)
    }
}

//car functions

function validateCarYear () {
    let yearInput = document.querySelector('#car-year');
    let yearValue = yearInput.value;
    let yearLength = yearValue.length;
    let yearParent = yearInput.parentElement;

    if (yearLength === 4 && yearValue.match(numeric)) {
        console.log("Year is valid");
        yearParent.classList.remove ('input-invalid');
        yearParent.classList.add ('input-valid');
    } else {
        console.log("Year is invalid");
        yearParent.classList.remove('input-valid');
        yearParent.classList.add('input-invalid');
    }
//needs more validation for a range of years
}

function validateCarMake () {
    let  makeInput = document.querySelector('#car-make')
    let makeValue = makeInput.value;
    let makeLength = makeValue.length;
    let makeParent = makeInput.parentElement;

    if (makeLength >= 1){
        console.log ("Make is valid");
        makeParent.classList.remove('input-invalid');
        makeParent.classList.add
        ('input-valid');
    } else {
        console.log("Make is invalid");
        makeParent.classList.remove ('input-valid')
        makeParent.classList.add('input-invalid')
    }
}

function validateCarModel () {
    let  modelInput = document.querySelector('#car-model')
    let modelValue = modelInput.value;
    let modelLength = modelValue.length;
    let modelParent = modelInput.parentElement;

    if (modelLength >= 1){
        console.log ("Model is valid");
        modelParent.classList.remove('input-invalid');
        modelParent.classList.add
        ('input-valid');
    } else {
        console.log("Model is invalid");
        modelParent.classList.remove ('input-valid')
        modelParent.classList.add('input-invalid')
    }
}
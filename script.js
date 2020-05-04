//stuck on validating mm-dd-yyy
//need to figure out how to make error alert box go away when refreshing, right now they just pile up!   



let form = document.querySelector('#parking-form')
let formIsValid
let alphabetic = /^[A-Za-z\'\s\.\,]+$/
//this is an expression that means only letters of the alphabet, declared the alphabetic variable to use as a condition in validation if/else statements, found here: https://www.w3resource.com/javascript/form/all-letters-field.php

form.addEventListener('submit', function (event) {
    formIsValid = true
    event.preventDefault()
//need to add something that resets everything to invalid unless there is a value in it, right now just submitting a blank page will return that the name is valid--a note: this might not be a global type of thing but needs to be included in each validation
//all validation functions will go here
    validateName();
    validateCarYear();
    validateCarMake();
    validateCarModel();
    validateNumDays();
    validateCardNumber();
    validateDate();

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
        nameAlert.innerText = "Valid name is required"
        document.getElementById("name-field").appendChild(nameAlert)
    }
}

//car functions
function validateCarYear () {
    let yearInput = document.querySelector('#car-year');
    let yearValue = yearInput.value;
    let yearLength = yearValue.length;
    let yearParent = yearInput.parentElement;
    let carAlert = document.createElement("P")
//is there a way to have a dynamic date? 2021 model year cars come out soon and the way i have done it would need to be manually updated each year :/
    if (yearLength === 4 && yearValue >= 1900 && yearValue <= 2020) {
        console.log("Year is valid");
        yearParent.classList.remove ('input-invalid');
        yearParent.classList.add ('input-valid');
    } else {
        console.log("Year is invalid");
        yearParent.classList.remove('input-valid');
        yearParent.classList.add('input-invalid');
       carAlert.innerText = "Valid car year is required"
        document.getElementById("car-field").appendChild(carAlert)
    }
//needs more validation for a range of years
}

function validateCarMake () {
    let  makeInput = document.querySelector('#car-make')
    let makeValue = makeInput.value;
    let makeLength = makeValue.length;
    let makeParent = makeInput.parentElement;
    let carAlert = document.createElement("P")

    if (makeLength >= 1){
        console.log ("Make is valid");
        makeParent.classList.remove('input-invalid');
        makeParent.classList.add
        ('input-valid');
    } else {
        console.log("Make is invalid");
        makeParent.classList.remove ('input-valid')
        makeParent.classList.add('input-invalid')
        carAlert.innerText = "Valid car make is required"
        document.getElementById("car-field").appendChild(carAlert)
    }
}

function validateCarModel () {
    let  modelInput = document.querySelector('#car-model')
    let modelValue = modelInput.value;
    let modelLength = modelValue.length;
    let modelParent = modelInput.parentElement;
    let carAlert = document.createElement("P")

    if (modelLength >= 1){
        console.log ("Model is valid");
        modelParent.classList.remove('input-invalid');
        modelParent.classList.add
        ('input-valid');
    } else {
        console.log("Model is invalid");
        modelParent.classList.remove ('input-valid')
        modelParent.classList.add('input-invalid')
        carAlert.innerText = "Valid car model is required"
        document.getElementById("car-field").appendChild(carAlert)
    }
}

function validateDate (){
    let dateInput = document.querySelector("#start-date");
    let dateValue = dateInput.value;
    let todayDate = new Date();
    dateValue = new Date(dateValue);
    let parkDate = dateInput.valueAsNumber;
    let dateParent = dateInput.parentElement;

    if (dateValue >= todayDate){
        console.log("Date is valid")
        dateParent.classList.remove('input-invalid');
        dateParent.classList.add
        ('input-valid');
    } else {
        console.log("Date is invalid")
        dateParent.classList.remove ('input-valid')
        dateParent.classList.add('input-invalid')
        dateAlert.innerText = "Pick a date in the future."
        document.getElementById("start-date").appendChild(dateAlert)
    }

    // console.log(dateValue)
    // console.log(todayDate)
    // console.log(parkDate)

//if dateValue and todayDate are
}


function validateNumDays () {
    let daysInput = document.querySelector('#days');
    let daysValue = daysInput.value;
    let parentName = daysInput.parentElement;
    let daysAlert = document.createElement("P");

        if (daysValue > 0 && daysValue < 31) {
            console.log("Days are valid")
            parentName.classList.add('input-valid')
        } else {
            console.log("Days are not valid")
            parentName.classList.remove('input-valid')
            parentName.classList.add('input-invalid')
            formIsValid=false
            daysAlert.innerText = "You can only reserve parking for up to 30 days."
            document.getElementById("days-field").appendChild(daysAlert)
        }
}

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;
        consolelog("Invalid Card")

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
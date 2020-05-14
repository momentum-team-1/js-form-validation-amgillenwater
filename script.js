let form = document.querySelector('#parking-form')
let formIsValid
let alphabetic = /^[A-Za-z\'\s\.\,]+$/

let nameAlert = document.createElement("div");
let parentName = document.getElementById("name-field")
nameAlert.className = "error"
parentName.appendChild(nameAlert);

let carAlert = document.createElement("div")
let parentCar = document.getElementById("car-field")
carAlert.className = "error"
parentCar.appendChild(carAlert);

let carMakeAlert = document.createElement("div")
carMakeAlert.className = "error"
parentCar.appendChild(carMakeAlert)

let carModelAlert = document.createElement("div")
carModelAlert.className = "error"
parentCar.appendChild(carModelAlert)

let dateAlert = document.createElement("div");
let parentDate = document.getElementById("start-date-field")
dateAlert.className = "error"
parentDate.appendChild(dateAlert);

let numDaysAlert = document.createElement("div");
let parentNumDays = document.getElementById("days-field")
numDaysAlert.className = "error"
parentNumDays.appendChild(numDaysAlert);

let creditAlert = document.createElement("div");
let parentCredit = document.getElementById("credit-card-field")
creditAlert.className = "error"
parentCredit.appendChild(creditAlert);

let cvvAlert = document.createElement("div");
let parentCvv = document.getElementById("cvv-field")
cvvAlert.className = "error"
parentCvv.appendChild(cvvAlert);

let expiryAlert = document.createElement("div");
let parentExpiry = document.getElementById("expiration-field")
expiryAlert.className = "error"
parentExpiry.appendChild(expiryAlert);

let costAlert = document.createElement("div");
let parentCost = document.getElementById("parking-form")
costAlert.id = "cost-display"
parentCost.appendChild(costAlert)

form.addEventListener('submit', function (event) {
    formIsValid = true
    event.preventDefault()
    validateName();
    validateCarYear();
    validateCarMake();
    validateCarModel();
    validateNumDays();
    validateCC();
    validateDate();
    validateCvv();
    validateExp();
    calcCost ();
})

function validateName () {
let nameInput = document.querySelector('#name');
let nameValue = nameInput.value;
let nameLength = nameValue.length;

//if the string has at least one charcter in it and all of it's characters are alphabetic, the name is valid, if not it is invalid
    if (nameLength >= 1 && nameValue.match(alphabetic)){
        console.log("Name is valid")
        parentName.classList.remove('input-invalid')
        parentName.classList.add('input-valid')
        nameAlert.innerHTML = ""

    } else {
        console.log("Name is not valid")
        parentName.classList.remove('input-valid')
        parentName.classList.add('input-invalid')
        formIsValid=false
        nameAlert.innerHTML = "Name is not valid"
    }
}

//car functions
function validateCarYear () {
    let yearInput = document.querySelector('#car-year');
    let yearValue = yearInput.value;
    let yearLength = yearValue.length;
    let yearParent = yearInput.parentElement;
//is there a way to have a dynamic date? 2021 model year cars come out soon and the way i have done it would need to be manually updated each year :/
    if (yearLength === 4 && yearValue >= 1900 && yearValue <= 2020) {
        console.log("Year is valid");
        yearParent.classList.remove ('input-invalid');
        yearParent.classList.add ('input-valid');
        carAlert.innerHTML = ""
    } else {
        console.log("Year is invalid");
        yearParent.classList.remove('input-valid');
        yearParent.classList.add('input-invalid');
        carAlert.innerHTML = "Car Year is invalid"
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
        carMakeAlert.innerHTML = ""
    } else {
        console.log("Make is invalid");
        makeParent.classList.remove ('input-valid')
        makeParent.classList.add('input-invalid')
        carMakeAlert.innerHTML = "Car Make is invalid"

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
        carModelAlert.innerHTML = ""
    } else {
        console.log("Model is invalid");
        modelParent.classList.remove ('input-valid')
        modelParent.classList.add('input-invalid')
        carModelAlert.innerHTML = "Car Model is invalid"

    }
}

function validateDate (){
    let dateInput = document.querySelector("#start-date");
    let dateValue = dateInput.value;
    let todayDate = new Date();
    dateValue = new Date(dateValue);
    let parkDate = dateInput.valueAsNumber;
    let dateParent = dateInput.parentElement;

    if (parkDate >= todayDate){
        console.log("Date is valid")
        dateParent.classList.remove('input-invalid');
        dateParent.classList.add
        ('input-valid');
        dateAlert.innerHTML = ""
    } else {
        console.log("Date is invalid")
        dateParent.classList.remove ('input-valid')
        dateParent.classList.add('input-invalid')
        dateAlert.innerHTML = "Pick a date in the future"

    }
}


function validateNumDays () {
    let daysInput = document.querySelector('#days');
    let daysValue = daysInput.value;
    let parentName = daysInput.parentElement;

        if (daysValue > 0 && daysValue < 31) {
            console.log("Days are valid")
            parentName.classList.add('input-valid')
            numDaysAlert.innerText = ""
        } else {
            console.log("Days are not valid")
            parentName.classList.remove('input-valid')
            parentName.classList.add('input-invalid')
            formIsValid=false
            numDaysAlert.innerText = "You must reserve parking for 1 to 30 days."
        }
}

function validateCC(){
    let cardInput = document.querySelector('#credit-card')
    let cardValue = cardInput.value
    let parentCard = cardInput.parentElement
    let cardRegex = new RegExp ('^[0-9]{16}$')
    document.getElementsByTagName('label')[4].setAttribute('id', 'CC-label')

    if(cardValue && cardRegex.test(cardValue) && luhnCheck(cardValue)){
        console.log("credit card is valid")
        parentCard.classList.add('input-valid')
        creditAlert.innerText = ""


    }else{
        console.log("credit card number is not valid")
        parentCard.classList.remove('input-valid')
        parentCard.classList.add('input-invalid')
        formIsValid=false
        creditAlert.innerText = "Please enter a valid credit card number"
    }
   
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

function validateCvv(){
    let cvvInput = document.querySelector('#cvv');
    let cvvValue = cvvInput.value;
    let cvvLength = cvvValue.length;
    let parentCvv = cvvInput.parentElement;

    if (cvvLength === 3){
        console.log("Valid CVV")
        parentCvv.classList.remove("input-invalid")
        parentCvv.classList.add('input-valid')
        cvvAlert.innerText = ""

    } else {
        console.log("CVV is invalid")
        parentCvv.classList.remove("input-valid")
        parentCvv.classList.add('input-invalid')
        formIsValid=false
        cvvAlert.innerText = "CVV is invalid"
    }
}

function validateExp() {
    let expInput = document.querySelector("#expiration")
    let expValue = expInput.value 
    let parentExp = expInput.parentElement

    let today = new Date();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear() % 100;

    let monthValidate = expValue.substring(0, 2);
    let yearValidate = expValue.substring(3);

    if (yearValidate >= todayYear && monthValidate >= todayMonth) {
        console.log("Expiration Date valid")
        parentExp.classList.remove("input-invalid")
        parentExp.classList.add('input-valid')
        expiryAlert.innerHTML = ""


    } else {
        console.log("Expiration Date invalid")
        parentExp.classList.remove("input-valid")
        parentExp.classList.add('input-invalid')
        formIsValid=false
        expiryAlert.innerHTML = "Expiration date is invalid"
    }
}

function calcCost() {
    let dateInput = document.querySelector("#start-date")
    let dateInfo = dateInput.valueAsNumber 

    let day = new Date(dateInfo).getDay();
    //[Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
    let daysInput = document.querySelector("#days")
    let daysInfo = daysInput.value

    dateInfo = new Date(dateInfo);
    let cost = 0
        for (let i = 0; i < daysInfo; i++) {
            if (day === 5 || day === 6) {
                cost += 7;
            }else {
                cost += 5;
            }
            console.log(cost)
             day = (day % 7) + 1;
        }
        if (cost > 0){ 
            costAlert.innerHTML = `Your total is $${cost}.`
        } else {
            costAlert.innerHTML = ""
        }
    }
  
let form = document.querySelector('#parking-form')

form.addEventListener('submit', function (event) {
  event.preventDefault()
//all validation functions will go here
//need to add something that resets everything to invalid unless there is a value in it, right now just submitting a blank page will return that the name is valid
  validateName()

})

function validateName () {
let nameInput = document.querySelector('#name');
let nameValue = nameInput.value;
let parentName = nameInput.parentElement;
    if (nameInput){
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
//need to figure out how to tell it if there is an alphabetical string there, it is valid

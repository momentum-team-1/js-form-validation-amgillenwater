  
let form = document.querySelector('#parking-form')

form.addEventListener('submit', function (event) {
  event.preventDefault()
})

removeErrorMessage()
formIsValid = true
//these two give us a "clean slate" to work from--not quite sure the actual mechanics of this, come back and learn more later


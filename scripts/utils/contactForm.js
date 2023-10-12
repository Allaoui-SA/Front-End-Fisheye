function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


const formSubmit = document.getElementById("contact_submit")
formSubmit.addEventListener('click', function(e) {
    let formFirstName = document.getElementById("firstname").value
    let formLastName = document.getElementById("lastname").value
    let formEmail = document.getElementById("email").value
    let formMessage = document.getElementById("message").value
    
    e.preventDefault()
    console.log(formFirstName+'\n'+formLastName+'\n'+formEmail+'\n'+formMessage)
    
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.getElementById("firstname").value = ""
    document.getElementById("lastname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""
})

// console.log(formSubmit)
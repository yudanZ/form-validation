const form = document.getElementById('form');
const password1EL = document.getElementById('password1');
const password2EL = document.getElementById('password2');

const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
let isValid = false;
let passwordsMatch = false;
function validateForm(){
    //Using Contraint API

    isValid = form.checkValidity();
    
    // Style main message for an error
    messageContainer.style.display ='flex';
    if( ! isValid){
        
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    if( password1EL.value === password2EL.value){
        passwordsMatch = true;
        password1EL.style.borderColor = 'green';
        password2EL.style.borderColor = 'green';
    }else {
        passwordsMatch = false;
        message.textContent = 'Password did not match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1EL.style.borderColor = 'red';
        password2EL.style.borderColor = 'red';
        return;
    }

    if( isValid && passwordsMatch){
        message.textContent = 'Successfully Registered!';

        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
    
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.url.value,
        password: form.password2.value
    };
    localStorage.setItem('user', JSON.stringify(user));
}
function processFormData( event ){
    event.preventDefault();
    //console.log(event);
    // Validate Form
    validateForm();

    if(isValid & passwordsMatch){
        storeFormData();
        console.log(JSON.parse(localStorage.getItem('user')))
    }
}

//Event Listener

form.addEventListener('submit', processFormData);
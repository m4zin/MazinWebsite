/* for of loop to check if fields are less than 1 */
function isEmpty(inputArr) {
    for(const input of inputArr) {  
        if(input.length < 1) {    
            return true;
        }
    }
    return false;
}

function validateName(str) {       
    const regex = /^[a-zA-Z ]+$/;
    return regex.test(str);
}

function validateEmail(str) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(str);
}

function validatePhone(str) {
    const regex = /^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/;
    return regex.test(str);
}

function validateMessage(str) {
    if(str.length > 500) {
        return false;
    }

    return true
}

function validate() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;

    /* array of fields */
    let inputArr = [name, email, message, phone];
    const empty = isEmpty(inputArr);

    if(empty) {
        alert('Please fill out all fields');
        return false;
    }

    const nameValid = validateName(name);
    if(!nameValid) {
        alert('Please enter a valid name');
        return false;
    }

    const emailValid = validateEmail(email);
    if(!emailValid) {
        alert('Please enter a valid email');
        return false;
    }

    const phoneValid = validatePhone(phone);
    if(!phoneValid) {
        alert('Please enter a valid phone number');
        return false;
    }

    const messageValid = validateMessage(message);
    if(!messageValid) {
        alert('Please enter a valid message');
        return false;
    }

    alert("Thank you for your message");
    return true;
}
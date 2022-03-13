async function getRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

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

function validate(name, email, phone) {

    /* array of fields */
    let inputArr = [name, email, phone];
    let errorMessage = [];
    const empty = isEmpty(inputArr);

    if(empty) {
        errorMessage.push('All fields are required');
    }

    const nameValid = validateName(name);
    if(!nameValid) {
        errorMessage.push("Please enter a valid name")
    }

    const emailValid = validateEmail(email);
    if(!emailValid) {
        errorMessage.push("Please enter a valid email")
    }

    const phoneValid = validatePhone(phone);
    if(!phoneValid) {
        errorMessage.push("Please enter a valid phone number")
    }

    return errorMessage;
}

module.exports = {
    getRandomString,
    validate
}
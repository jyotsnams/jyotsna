//email validation
let signupEmail = document.getElementById("signup-email");
let emailError = document.getElementById("email-error");
//password validation
let signupPassword1 = document.getElementById("signup-password1");
let passwordError1 = document.getElementById("password-error1");
let signupPassword2 = document.getElementById("signup-password2");
let passwordError2 = document.getElementById("password-error2");
//phone validation
let signupPhone = document.getElementById("signup-phone");
let phoneError = document.getElementById("phone-error");
//username
let signupUsername = document.getElementById("signup-username");
let usernameError = document.getElementById("username-error");

function signupValidate(){
    //email validation
    let emailRegexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    //password validation
    let passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
    //phone number validation
    let phoneRegexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    //email
    if(!emailRegexp.test(signupEmail.value)){
        emailError.innerHTML = "Invalid Email id!";
        emailError.style.color = "red";
        return false;
    }
    //phone number
    else if(!phoneRegexp.test(signupPhone.value)){
        phoneError.innerHTML = "Invalid format!";
        phoneError.style.color = "red";
        return false;
    }
    //username
    else if(signupUsername.value.length == 0){
        usernameError.innerHTML = "Enter a Username!";
        usernameError.style.color = "red";
        return false;
    }
    //password
    else if(!passwordRegexp.test(signupPassword1.value)){
        passwordError1.innerHTML = "Invalid Password!";
        passwordError1.style.color = "red";
        return false;
    }
    else if(!passwordRegexp.test(signupPassword2.value)){
        passwordError2.innerHTML = "Invalid Password!";
        passwordError2.style.color = "red";
        return false;
    }
    else if(signupPassword2.value != signupPassword1.value){
        passwordError2.innerHTML = "Password not matching!";
        passwordError2.style.color = "red";
        return false;
    }

    //final
    if(emailRegexp.test(signupEmail.value) && passwordRegexp.test(signupPassword1.value) &&  passwordRegexp.test(signupPassword2.value) && phoneRegexp.test(signupPhone.value)){
        //password strength
        if(signupPassword1.value.length >= 12){
            signupPassword1.style.borderColor = "green";
        }
        else if (signupPassword1.value.length >8){
            signupPassword1.style.borderColor = "orange";
        }
        else{
            signupPassword1.style.borderColor = "red";
        }

        emailError.innerHTML = "Valid email id";
        passwordError1.innerHTML = "Valid Password";
        passwordError2.innerHTML = "Valid Password";
        usernameError.innerHTML = "Valid username";
        phoneError.innerHTML = "Valid phone number";
        phoneError.style.color = "green";
        emailError.style.color = "green";
        passwordError1.style.color = "green";
        passwordError2.style.color = "green";
        usernameError.style.color = "green";
        return true;
    }
}





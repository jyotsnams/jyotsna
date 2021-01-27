
//email validation
let loginEmail = document.getElementById("login-email");
let emailError = document.getElementById("email-error");
//password validation
let loginPassword = document.getElementById("login-password");
let passwordError = document.getElementById("password-error");

function loginValidate(){
    //email validation
    let emailRegexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    //password validation
    let passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
    if(!emailRegexp.test(loginEmail.value)){
        emailError.innerHTML = "Invalid Email id!";
        emailError.style.color = "red";
        return false;
    }
    else if(!passwordRegexp.test(loginPassword.value)){
        passwordError.innerHTML = "Invalid Password!";
        passwordError.style.color = "red";
        return false;
    }

    else if(emailRegexp.test(loginEmail.value) && passwordRegexp.test(loginPassword.value)){
        emailError.innerHTML = "Valid email id";
        passwordError.innerHTML = "Valid Password";
        emailError.style.color = "green";
        passwordError.style.color = "green";
        return true;
    }
}





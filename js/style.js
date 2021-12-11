const sign_in_btn = document.querySelector("#sign-in-button");
const sign_up_btn = document.querySelector("#sign-up-button");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});
sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

const inputElement = document.getElementsByTagName("input");

const name= inputElement[0];
const title = inputElement[1];
const passwordInput = document.getElementById("passwordInput");
const rtpassword = document.getElementById("repeatPassword");
const emailInput = document.getElementById("emailInput");
const date = document.getElementById("userDate");
const phone = document.getElementById("phoneNumber");
const add= inputElement[11];

const errorUsername = document.getElementById("Username");
const errorTitle = document.getElementById("Title");
const errorPassword = document.getElementById("psw");
const errorRepeatPassword = document.getElementById("psw-repeat");
const errorEmail = document.getElementById("err-email");
const errorDate = document.getElementById("UserBirthDate");
const errorPhone = document.getElementById("PhoneNumber");


function onBlurEmail(){
    const emailValue = emailInput.value;
    if (!kiemtraEmail(emailValue)){
        errorEmail.innerHTML = "Email không hợp lệ!!";
    } else{
        errorEmail.innerHTML = "";
    }
}

function onBlurPassword(){
    const passwordValue = passwordInput.value ;
    if(!kiemtramatkhau(passwordValue)){
        errorPassword.innerHTML = "Mật khẩu từ 6 kí tự!";
    } else {
        errorPassword.innerHTML = "";
    }
}
function onBlurRepeatPassword(){
    const repeatPasswordValue = rtpassword.value;
    const passwordValue = passwordInput.value;
    if(!kiemtranhaplaimatkhau(passwordValue, repeatPasswordValue)){
        errorRepeatPassword.innerHTML = "Mật khẩu không khớp";
    } else {
        errorRepeatPassword.innerHTML = "";
    }
}

function onBlurPhone(){
    const phoneNumberValue = phoneNumber.value;
    if(!kiemtrasodienthoai(phoneNumberValue)){
        errorPhone.innerHTML = "Số điện thoại không hợp lệ";
    } else{
        errorPhone.innerHTML = "";
    }
}
function onFormSubmit(){
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const repeatPasswordValue = rtpassword.value;
    const phoneNumberValue = phoneNumber.value;
    const isValidParams = kiemtraEmail(emailValue) && kiemtramatkhau(passwordValue) 
    && kiemtranhaplaimatkhau(passwordValue,repeatPasswordValue) && kiemtrasodienthoai(phoneNumberValue);
    if (isValidParams){
        //cac params deu hop le
        email.value = "";
        password.value = "";
        rtpassword.value = "";
        phoneNumber.value ="";
        const toast = document.getElementById("login-toast");
        toast.style.display = "unset"; 
        setTimeout(function(){
            toast.style.display = "none";
        }, 3000);
    }
}
function kiemtraEmail(emailValue){
    let vitri = -1;
    for (let i in emailValue){
        if (emailValue[i]==='@'){
            if(vitri !== -1){
                return false;
            }
            vitri = i;
        }
    }
    if (vitri===-1 || vitri === 0 || vitri === emailValue.length -1){
        return false;
    }
    return true;
}
function kiemtramatkhau(passwordValue){
    if( passwordValue.length < 6){
        return false;
    }
    let coKiTuDacBiet = false;
    let coKiTuHoa = false;
    let coKiTuSo = false;
    for (let kitu of passwordValue){
        if(kitu >= 'A' && kitu <= 'Z'){
            coKiTuHoa = true;
        }
        else if (kitu >= '0'&& kitu <= '9'){
            coKiTuSo = true;
        }
        else if(!(kitu >= 'a' && kitu <= 'z' )){
            coKiTuDacBiet = true;
        }
    }
    return coKiTuDacBiet && coKiTuHoa && coKiTuSo;
}
function kiemtranhaplaimatkhau(passwordValue, repeatPasswordValue){
    return passwordValue === repeatPasswordValue;
}
function kiemTraNamSinh(yearValue) {
    return yearValue && (parseInt((new Date()).getFullYear(), 10) - yearValue >= 18);
}
function kiemtrasodienthoai(phoneNumberValue)
{
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(phoneNumberValue.match(phoneno)){
        return true;
    } else {
        return false;
    }
}

/*scipts*/
export

const btnSignup=document.querySelector<HTMLButtonElement>("#btnSignup")!;
const btnReset =document.querySelector<HTMLButtonElement>("#btnCancel")!;
const btnLoginPage=document.querySelector<HTMLButtonElement>("#btnLoginPage")!;

const txtSingupEmail=document.querySelector<HTMLInputElement>("#txtEmail")!;
const txtSingupPassword=document.querySelector<HTMLInputElement>("#txtPassword")!;
const txtSingupConfirmPassword=document.querySelector<HTMLInputElement>("#txtConfirmPassword")!;



let emailValidationRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let passwordValidationRegEx=/([A-Za-z0-9 ])+/;

btnSignup.addEventListener('click',ev => {
    if(emailValidation(txtSingupEmail.value) && passwordValidation(txtSingupPassword.value) && txtSingupPassword.value===txtSingupConfirmPassword.value){
        /*end request*/
    }else{
        txtSingupEmail.value="";
        txtSingupPassword.value="";
        txtSingupConfirmPassword.value="";

    }


});

btnReset.addEventListener('click',ev => {
    txtSingupEmail.value="";
    txtSingupPassword.value="";
    txtSingupConfirmPassword.value="";

});

btnLoginPage.addEventListener('click',ev => {
    window.location.href = "index.html";
});


function emailValidation(email: string): boolean {
    if (emailValidationRegEx.test(email)) {
        return true;
    } else {
        return false;
    }
}

function passwordValidation(name:string):boolean{
    if(passwordValidationRegEx.test(name)){
        return true;
    }else {
        return false;
    }
}






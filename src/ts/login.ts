export
/*scripts*/
const btnLogin = document.querySelector<HTMLButtonElement>('#btnLogin')!;
const txtEmail = document.querySelector<HTMLInputElement>('#txtEmail')!;
const txtPassword = document.querySelector<HTMLInputElement>('#txtPassword')!;
const btnNewUser=document.querySelector<HTMLButtonElement>('#btnNewUser')!;
const btnCancel=document.querySelector<HTMLButtonElement>('#btnCancel')!;
const loginBox = document.querySelector<HTMLElement>('#loging-box')!;

let emailValidationRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let passwordValidationRegEx=/([A-Za-z0-9 ])+/;



btnLogin.addEventListener('click',(e)=> {
        if(emailValidation(txtEmail.value) && passwordValidation(txtPassword.value)){
            /*send login request*/
        }else{
           txtEmail.value="";
           txtPassword.value="";

        }
});

btnCancel.addEventListener('click',(e) => {
    txtEmail.value="";
    txtPassword.value="";
});

btnNewUser.addEventListener('click',(e)=>{
    window.location.href = "signup.html";
});



/*functions*/

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




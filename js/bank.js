document.getElementById('login-btn').addEventListener('click',function(){
const useremail = document.getElementById('user-email');
const inputField = useremail.value;
// get user password
const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;

if( inputField== 'new@do.com' &&  userPassword == 'secret'){
    
    console.log('valid');
    window.location.href ='banking.html';

}
})
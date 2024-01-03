let userName = 'Alex'
let userEmail = 'a.gmail.com'
let userPassword = 'Alex22'
let userConfirmPassword = 'alex22'

//Check if the userName length bigger than 3 chr.
let validUserNameLength = userName.length > 3;
//Check if the userEmail length bigger than 12 chr and includes @.
let validUserEmailLength = userEmail.length > 12 && userEmail.includes("@");
//Check if the userPassword length bigger than 5 chr.
let validUserPasswordLength = userName.length > 5
//Check if the userConfirmPassword equal to userPassword.
let validUserPassword = userPassword === userConfirmPassword;

//If Not valid ==> output ==> print 'Validation error message'.
//If success ==> output ==> print 'The user data are valid'.

if(validUserNameLength && validUserEmailLength && validUserPasswordLength && validUserPassword ){
    console.log('The user data are valid');
}else{
    console.log('Validation error message');
}
let userName = 'Alex'
let userEmail = 'ahmetmehmet@gmail.com'
let userPassword = 'Alex22'
let userConfirmPassword = 'Alex22'

//Check if the userName length bigger than 3 chr.
let validUserNameLength = userName.length > 3;
//Check if the userEmail length bigger than 12 chr and includes @.
let validUserEmailLength = userEmail.length > 12 && userEmail.includes("@");
//Check if the userPassword length bigger than 5 chr.
let validUserPasswordLength = userPassword.length > 5
//Check if the userConfirmPassword equal to userPassword.
let validUserPassword = userPassword === userConfirmPassword;

//If Not valid ==> output ==> print 'Validation error message'.
//If success ==> output ==> print 'The user data are valid'.

if(validUserNameLength && validUserEmailLength && validUserPasswordLength && validUserPassword ){
    console.log('The user data are valid');
}else{
    console.log('Validation error message');
}

/*
const _ = require('lodash');
const obj1 = { key: 'value' }; 
const obj2 = { key: 'value' }; 
console.log(_.isEqual(obj1, obj2)); // Outputs true
*/
//isEqual() methodu lodash kütüphanesi oldugu icin kullaniliyor
// _ isareti ise isim yerine kullanilmistir 
//Bu, nesnelerin içindeki alt nesnelerin, dizilerin ve diğer karmaşık veri tiplerinin de eşit olup olmadığını kontrol etmek için kullanışlı bir yöntemdir. === operatörü ise sadece referansları karşılaştırdığı için bu tür derinlemesine karşılaştırmalarda kullanılamaz.
//Deep Comparison: You can use external libraries like lodash's isEqual or write your own deep comparison function. (by Saliha Oguz)
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var result = '';
    var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var specialCharacters = ' !?#$%^&*~`+-=_./:;\<>@';
    var numberCharactrers = '0123456789';

    // var lowerCaseConfirm = confirm('Would you like Lowercase Characters included?');
    // var upperCaseConfirm = confirm('Would you like Uppercase Characters included?');
    // var specialConfirm = confirm('Would you like Special Characters included?');
    // var numberConfirm = confirm('Would you like Numerical Characters included?');
    var passwordLength = prompt('Please pick a Password Length between 8 and 128.');

    if (Number(passwordLength) >= 8 && Number(passwordLength) <= 128){
      alert('Your password length meets the critera!');
    } else {
      alert('Your length does not meet the criteria! Try again!');
    };

    console.log(lowerCaseConfirm);
    console.log(upperCaseConfirm);
    console.log(specialConfirm);
    console.log(numberConfirm);
    console.log(passwordLength);
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

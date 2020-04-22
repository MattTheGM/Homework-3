// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    const randomPass = {
      lower: randomLower,
      upper: randomUpper,
      number: randomNumber,
      symbol: randomSymbol,
    };
    
    const hasLower = confirm('Would you like Lowercase Characters included?');
    const hasUpper = confirm('Would you like Uppercase Characters included?');
    const hasSymbol = confirm('Would you like Special Characters included?');
    const hasNumber = confirm('Would you like Numerical Characters included?');
    const length = prompt('Please pick a Password Length between 8 and 128.');
    
    var thePassWord = passGen(hasLower, hasUpper, hasSymbol, hasNumber, length);
    
    function passGen(lower, upper, symbol, number, length) {
      var result = '';
      const typesCount = lower + upper + symbol + number;
      const typesArr = [{lower}, {upper}, {symbol}, {number}].filter
      (
        item => Object.values(item)[0]
      );

      if (typesCount === 0) {
        alert('You must select at least one criteria!');
        return '';
      }

      if (length >= 8 && length <= 128) {
        for(var i = 0; i < length; i+= typesCount) {
          typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            result += randomPass[funcName]();
          });
        }
      } else {
        alert('You must select a length between 8 and 128! Try again!');
        return '';
      }
      const finalPassword = result.slice(0, length);
      return finalPassword;
    }

    function randomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function randomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function randomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    function randomSymbol() {
      const symbols = '!?#$%^&*~`+-=_./:;\<>@';
      return symbols[Math.floor(Math.random() * symbols.length)];
    }
    return thePassWord;
  }
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

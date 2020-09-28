

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {\

  // Get the password length from user
  // Make sure input is a number between 8 and 128
  var charChecked = false;
  var charLength = ''

  while (charChecked != true){
    charLength = parseInt(prompt("Number of characters? (Choose a number between 8 and 128"))
    if ((isNaN(charLength)) || (charLength >= 8 && charLength <= 128)) {
      carChecked = false;
    } else {
      return charLength;
      carChecked = true;
    }
  }

  // Does password contain uppercase?
  
  // Does password contain lowercase

  // Does password contain numbers?

  // Does password special characters?


  // Is at least one of the following true? contains-upper contains-lower contains-num contains-spec

  // for i in charLength
  //  Choose a random var x = [uppercase lowercase number specialchar ]
  //  Choose a random number between 0 and (x.length() - 1)
  //  return character


  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

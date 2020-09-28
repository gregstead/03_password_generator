

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {

  // Get the password length from user
  // Make sure input is a number between 8 and 128
  var charLength = ''
  var charChecked = false;
  
  while (charChecked != true) {
    charLength = parseInt(prompt("Number of characters? (Choose a number between 8 and 128"))
    if ((isNaN(charLength)) || !(charLength >= 8 && charLength <= 128)) {
      charChecked = false;
    } else {
      charLength = charLength;
      charChecked = true;
    }
  }
  
  characterPool = ''
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = lowerCase.toUpperCase();
  var allNumbers = "0123456789";
  var allSpecialChars = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/"

  // Does password contain uppercase?
  var containsUpperCase = confirm("Password contains uppercase letters? \n\n OK - Yes \n Cancel - No");
  if (containsUpperCase){
    characterPool += upperCase;
  };
  // Does password contain lowercase
  var containsLowerCase = confirm("Password contains lowercase letters? \n\n OK - Yes \n Cancel - No");
  if (containsLowerCase) {
    characterPool += lowerCase;
  };
  // Does password contain numbers?
  var containsNumbers = confirm("Password contains numbers? \n\n OK - Yes \n Cancel - No");
  if (containsNumbers) {
    characterPool += allNumbers;
  };
  // Does password special characters?
  var containsSpecialChars = confirm("Password contains special characters? \n\n OK - Yes \n Cancel - No");
  if (containsSpecialChars){
    characterPool += allSpecialChars;
  };
  
  // Is at least one of the following true? contains-upper contains-lower contains-num contains-spec

  // for i in charLength
  //  Choose a random var x = [uppercase lowercase number specialchar ]
  //  Choose a random number between 0 and (x.length() - 1)
  //  return character

  var password = '';
  for (i=0; i < charLength; i++){
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
  };

  return password;


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

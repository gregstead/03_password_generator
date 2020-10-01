

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
    charLength = parseInt(prompt("Number of characters? (Choose a number between 8 and 128"));
    console.log(charLength);
    if ((isNaN(charLength)) || !(charLength >= 8 && charLength <= 128)) {
      charChecked = false;
    } else {
      charLength = charLength;
      charChecked = true;
    }
  }
  
  // Use an object to clean up code?
  // var charArray = {
  //   "lowercase" : "abcdefghijklmnopqrstuvwxyz",
  //   "uppercase" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  //   "numbers" : "0123456789",
  //   "specialChar" : "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/",
  // };


  var charSelected = false;

  characterPool = ''
  var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseList = lowercaseList.toUpperCase();
  var numbersList = "0123456789";
  var specialCharList = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/"

  while (charSelected == false) {

    // Does password contain uppercaseList?
    var uppercaseConfirm = confirm("Password contains uppercase letters? \n\n OK - Yes \n Cancel - No");
    if (uppercaseConfirm){
      characterPool += uppercaseList;
      charSelected = true;
    };
    // Does password contain lowercaseList
    var lowercaseConfirm = confirm("Password contains lowercase letters? \n\n OK - Yes \n Cancel - No");
    if (lowercaseConfirm) {
      characterPool += lowercaseList;
      charSelected = true;
    };
    // Does password contain numbers?
    var numbersConfirm = confirm("Password contains numbers? \n\n OK - Yes \n Cancel - No");
    if (numbersConfirm) {
      characterPool += numbersList;
      charSelected = true;
    };
    // Does password special characters?
    var specialCharConfirm = confirm("Password contains special characters? \n\n OK - Yes \n Cancel - No");
    if (specialCharConfirm){
      characterPool += specialCharList;
      charSelected = true;
    };
  };
  // Is at least one of the following true? contains-upper contains-lower contains-num contains-spec


  // for i in charLength
  //  Choose a random var x = [uppercaseList lowercaseList number specialchar ]
  //  Choose a random number between 0 and (x.length() - 1)
  //  return character

  var password = '';
  
  // does password contain one of each character type requested?
  
  for (i=0; i < charLength; i++){
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
  };

  return password;

};

// Takes a String and returns a Boolean
function passwordCheck(password) {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

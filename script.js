

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


  var charSelected = false; // to make sure at least one character list is chosen
  var characterPool = '' // makes a superstring of all character lists 
  var charsToCheck = []; // This will be used before returning the password to make sure password contains chosen character types

  // Character lists 
  var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseList = lowercaseList.toUpperCase();
  var numbersList = "0123456789";
  var specialCharList = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/"

  while (charSelected == false) {

    // Does password contain uppercaseList?
    var uppercaseConfirm = confirm("Password contains uppercase letters? \n\n OK - Yes \n Cancel - No");
    if (uppercaseConfirm){
      characterPool += uppercaseList; 
      charsToCheck.push(uppercaseList);
      charSelected = true;
    };
    // Does password contain lowercaseList
    var lowercaseConfirm = confirm("Password contains lowercase letters? \n\n OK - Yes \n Cancel - No");
    if (lowercaseConfirm) {
      characterPool += lowercaseList;
      charsToCheck.push(lowercaseList);
      charSelected = true;
    };
    // Does password contain numbers?
    var numbersConfirm = confirm("Password contains numbers? \n\n OK - Yes \n Cancel - No");
    if (numbersConfirm) {
      characterPool += numbersList;
      charsToCheck.push(lowercaseList);
      charSelected = true;
    };
    // Does password special characters?
    var specialCharConfirm = confirm("Password contains special characters? \n\n OK - Yes \n Cancel - No");
    if (specialCharConfirm){
      characterPool += specialCharList;
      charsToCheck.push(specialCharList);
      charSelected = true;
    };
  };
  // Is at least one of the following true? contains-upper contains-lower contains-num contains-spec

  console.log(charsToCheck)
  var passwordChecked = false;
  // does password contain one of each character type requested?
  
  while (passwordChecked == false) {
    var password = '';
    // Generates random string until passwordChecked == true
    for (i=0; i < charLength; i++){
      password += characterPool[Math.floor(Math.random() * characterPool.length)];
    };
    if (passwordCheck(password, charsToCheck)) {
      passwordChecked = true;
    } 
  };

  return password;

};

// Takes a String and an Array; returns a Boolean
function passwordCheck(password, pwCheckArray) {
  //test each letter in pw to make sure it is in at least one of the char lists
  
  // something like this
  // for (var i=0; i < pwCheckArray.length; i++) {
  //   for (var j=0; j < password.length; j++) {
  //     if (pwCheckArray[i].includes(password[j])){
  //       console.log()
  //     }
  //   }
  // }

  return true;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

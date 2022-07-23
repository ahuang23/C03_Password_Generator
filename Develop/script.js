// Captures length of Password from User Input
var pwlength;

// Stores available values
var numbers = [0,1,2,3,4,5,6,7,8,9];
var alphabetLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","/","?",";",":"];

// Stores confirmations from User Input
var confirmNumbers;
var confirmAlphabetLow;
var confirmAlphabetUp;
var confirmSpecialChar;
var confirmed;


// Collects User Inputs
function generatePassword() {
  pwlength = parseInt(prompt("Select a value between 8 and 128"));
  if (!pwlength) {
    alert("Please enter a value");
  }
  else if (pwlength < 8 || length > 128) {
    alert("Value must be between 8 and 128");
  }
  else {
    confirmNumbers = confirm("Do you want to include numbers?");
    confirmAlphabetLow = confirm("Do you want to include lower case letters?");
    confirmAlphabetUp = confirm("Do you want to include upper case letters? ");
    confirmSpecialChar = confirm("Do you want to include special characters?");
  };
  
  if (!confirmNumbers && !confirmAlphabetLow && !confirmAlphabetUp && !confirmSpecialChar) {
    alert("Please choose a criteria");
  }

  else if (confirmNumbers && confirmAlphabetLow && confirmAlphabetUp && confirmSpecialChar) {
    confirmed = numbers.concat(alphabetLow,alphabetUp,specialChar);
  }

  else if (confirmNumbers && confirmAlphabetLow && confirmAlphabetUp) {
    confirmed = numbers.concat(alphabetLow,alphabetUp);
  }

  else if (confirmNumbers && confirmAlphabetLow && confirmSpecialChar) {
    confirmed = numbers.concat(alphabetLow,specialChar);
  }

  else if (confirmNumbers && confirmAlphabetUp && confirmSpecialChar) {
    confirmed = numbers.concat(confirmAlphabetUp, specialChar);
  }

  else if (confirmAlphabetLow && confirmAlphabetUp && confirmSpecialChar) {
    confirmed = alphabetLow.concat(alphabetUp,specialChar);
  }

  else if (confirmAlphabetLow && confirmAlphabetUp) {
    confirmed = alphabetLow.concat(alphabetUp);
  }

  else if (confirmAlphabetLow && confirmNumbers) {
    confirmed = alphabetLow.concat(numbers);
  }

  else if (confirmAlphabetLow && confirmSpecialChar) {
    confirmed = alphabetLow.concat(specialChar);
  }

  else if (confirmAlphabetUp && confirmNumbers) {
    confirmed = alphabetUp.concat(numbers);
  }

  else if (confirmAlphabetUp && confirmSpecialChar) {
    confirmed = alphabetUp.concat(specialChar);
  }

  else if (confirmNumbers && confirmSpecialChar) {
    confirmed = numbers.concat(specialChar);
  }

  else if (confirmNumbers) {
    confirmed = numbers;
  }

  else if (confirmSpecialChar) {
    confirmed = specialChar;
  }

  else if (confirmAlphabetLow) {
    confirmed = alphabetLow;
  }

  else if (confirmAlphabetUp) {
    confirmed = alphabetUp;
  };

// Stores randomized values in a new array  
var newPW = [];

// Randomizes values based on User Input
for (var i = 0; i < pwlength; i++) {
  var selectedCrit = confirmed[Math.floor(Math.random() * confirmed.length)];
  newPW.push(selectedCrit);
};

// Removes commas from new array
newPW = newPW.join('');

return newPW;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

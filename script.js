// Assignment Code
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var upercase = lowercase.toUpperCase();
var number = "123456789";
var specialchar = "!@#$%^&*()_+/?><";
var lowercaseArr = lowercase.split('');
var upercaseArr = upercase.split('');
var numberArr = number.split('');
var specialcharArr = specialchar.split('');

console.log(lowercaseArr);

var generateBtn = document.querySelector("#generate");
function randchar(arr) {
  return arr[Math.floor(Math.random() * arr.length )];
}

function generatePassword() {
  var passwordcharArr = []
  var passwordstring = ""
  var lowercase = window.confirm("Do you like password contain lowercase?");
  if (lowercase) {
    passwordcharArr = passwordcharArr.concat(lowercaseArr);
   // passwordstring += randchar(lowercaseArr);
  }
  console.log(passwordcharArr)

  var upercase = window.confirm("Do you like password contain upercase?");
  if (upercase) {
   passwordcharArr =  passwordcharArr.concat(upercaseArr);
   // passwordstring += randchar(upercaseArr);
  }
  console.log(passwordcharArr)
  var number = window.confirm("Do you like password contain number?");
  if (number) {
    passwordcharArr =passwordcharArr.concat(numberArr);
   // passwordstring += randchar(numberArr);
  }
  console.log(passwordcharArr)

  var specialchar = window.confirm("Do you like password contain specialchar?");
  if (specialchar) {
    passwordcharArr =passwordcharArr.concat(specialcharArr);
  //  passwordstring += randchar(specialcharArr);
  }
console.log(passwordcharArr) 
var userpasswordlength = parseInt ( window.prompt("How long is your password?"));
console.log (userpasswordlength)
console.log (typeof userpasswordlength)

  if (userpasswordlength < 8 || userpasswordlength > 128)  {
    alert("Must pick more than 8 less than 128")
    return
   //passwordcharArr =  passwordcharArr.concat(userpasswordlength);
    //passwordstring += randchar(upercaseArr);
  }
  if (!userpasswordlength ) {
  alert ("Pick correct number!")
  return
  }
  for (let index = 0; index < userpasswordlength; index++) {
    passwordstring += randchar(passwordcharArr)
  };
return passwordstring 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

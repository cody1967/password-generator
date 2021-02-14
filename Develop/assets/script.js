// Arreys for special charactors
// variable for uppercase
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

//varible for lower case here
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// variable for numbers here
var Numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

// variable for special charactor here
var symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "_",
  "-",
  "+",
  "=",
  "?",
  "<",
  ">",
  "/",
  "~",
  "|",
];


// create a function ask the user which options they want to inclued.
var passwordField = []
// generatePassword function
function generatePassword() {
  // variable to store user choice for password length.
  var passwordlength = parseInt(
    prompt("How many charactors do you want in your password? Please choose a number between 8 and 128!") 
   );

 // conditional statement to check if the password is at least 8 charetors long.
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Please enter between 8 and 128 charactors!");
    return generatePassword()
  };

  // variables with prompts yes and no
  var storedUpperCase = confirm("Do you want to use Uppercase Charactors?")
  var storedLowerCase = confirm("Do you want to use Lowercase Charactors?")
  var storedNumbers = confirm("Do you want to use Numbers?")
  var storedsymbols = confirm("Do you want to use Special Symbols?")

  // if else statments
  if (storedLowerCase) {
    passwordField.push(lowerCase)
  }

  if (storedUpperCase) {
    passwordField.push(upperCase)
  }

  if (storedNumbers) {
    passwordField.push(Numbers)
  }

  if (storedsymbols) {
    passwordField.push(symbols)
  }
  var passwordField2 = passwordField.flat();

  let output = "";

  for (let i = 0; i < passwordlength; i++) {
    output += passwordField2[Math.floor(Math.random() * passwordField2.length)];

  }
// empty password fields (local)
  passwordField = [];
  passwordField2 = [];

  return output
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

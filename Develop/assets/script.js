// Assignment code here

// veriable for 4 upper case here
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
console.log(upperCase)

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
console.log(lowerCase)

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
console.log(Numbers)

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
console.log(symbols)

var passwordField = []

// create a function ask the user which options they want to inclued.
function generatePassword() {

  // variable to store user choice for password length.
  var passwordlength = parseInt(
    prompt("How many charactors do you want in your password please choose a number between 8 and 128") // put a string in here

  );
  // conditional statment to check if the password length is a number.                 ??????

  // conditional statement to check if the password is at least 8 charetors long.
  if (passwordlength < 8 || passwordlength > 128) {
    alert("please enter between 8 and 128 charactors.");
    return generatePassword()

  };
  var storedUpperCase = confirm("Do you want to use Uppercase")


  var storedLowerCase = confirm("Do you want to use Lowercase")


  var storedNumbers = confirm("Do you want to use Numbers")


  var storedsymbols = confirm("Do you want to use specialsymbols")

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

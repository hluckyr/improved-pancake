// Assignment code here

//variables for password
var charLen = 8;
var choiceArr = [];

var specialChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '/', '[', '{', ']', '}'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//start prompts to generate pw
function getPrompts() {
    choiceArr = [];
    charLen = parseInt(prompt("how many characters in password? must be 8-128"));

    if (isNaN(charLen) || charLen < 8 || charLen > 128) {
        alert("password must be between 8-128 characters");
        return false;
    }

    if (confirm("special characters in password?")) {
        choiceArr = choiceArr.concat(specialChar);
    }

    if (confirm("lowercase letters in password?")) {
        choiceArr = choiceArr.concat(lowerCase);
    }

    if (confirm("uppercase letters in password?")) {
        choiceArr = choiceArr.concat(upperCase);
    }

    if (confirm("numbers in password?")) {
        choiceArr = choiceArr.concat(number);
    }

    return true;
}

// Write password to the #password input
function writePassword() {
    var correctPromtps = getPrompts();
    var passwordText = document.querySelector("#password");

    if (correctPromtps) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    }
    else { passwordText.value = ""; }
}

//
function generatePassword() {
    var password = '';
    for (var i = 0; i < charLen; i++) {
        var randomLetter = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomLetter];
    }
    return password;
}
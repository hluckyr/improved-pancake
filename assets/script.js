// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePassword() {
  
//1 promt user
//a. pw len 8-125
//b. lwca, upca, num, spec
//2 validate input
//3 display pw 

    var passwordLen = prompt("How many characters in your password? (8-128)");
    passwordLen = parseInt(passwordLen);

    var password = "generatePassword";
    var passwordChar = document.querySelector("#password");
    passwordText.value = password;

    if (passwordLen < 8) {
        alert("Password must have more than 7 characters!");
        return "";
    }
    if (passwordLen > 128) {
        alert("Password cant have more than 128 characters!");
        return ""
    }

    var lowercaseChar = confirm("lowercase characters?");
    if (lowercaseChar) {
        passwordChar += lowercaseChar;
    }

    var uppercaseChar = confirm("uppercase letters?");
    if (uppercaseChar) {
        passwordChar += uppercaseChar;
    }

    var numericalChar = confirm("numbers?");
    if (numericalChar) {
        passwordChar += numericalChar;
    }

    var specialChar = confirm("special characters?");
    if (specialChar) {
        passwordChar += specialChar;
    }
    for (var i = 0; i < passwordLen; i++) {
        password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
    }

    return "generated password";
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


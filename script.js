// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// This function will ask the user what criteria they want to include and then generate the password
function generatePassword(){
    let lowCase = confirm("Do you want lower cases in your password?")
    console.log(lowCase);

    let upCase = confirm("Do you want upper cases in your password?");
    console.log(upCase);

    let numInclude = confirm("Do you want to include numbers in your password?");
    
    let specialChar = confirm("Do you want to include special characters in your password?");
    console.log(specialChar);
        
    let passLength =  prompt("How many characters do you want your password to be? (Pick a number between 8-128");

    if (passLength>=8 && passLength<=128){
        console.log(passLength)
    } else {
        alert("Not valid. Please choose a number between 8-128");
    }

    


}
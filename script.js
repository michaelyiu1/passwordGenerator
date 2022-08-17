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
    
    //User Questions
    let lowCase = confirm("Do you want lower cases in your password?")
    console.log(lowCase);

    let upCase = confirm("Do you want upper cases in your password?");
    console.log(upCase);

    let numInclude = confirm("Do you want to include numbers in your password?");
    
    let specialChar = confirm("Do you want to include special characters in your password?");
    console.log(specialChar);
        
    let passLength =  prompt("How many characters do you want your password to be? (Pick a number between 8-128");

    //Alert when user inputs an invalid number
    if (passLength>=8 && passLength<=128){
        console.log(passLength)
    } else {
        alert("Not valid. Please choose a number between 8-128");
    }

    //Lowercase and Uppercase letter generation
    if (lowCase && upCase ) {
        var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (lowCase === true && upCase === false){
        var letters = "abcdefghijklmnopqrstuvwxyz";
    } else if (lowCase === false && upCase === true){
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
        var letters = "";
    }
    console.log(letters);

    //Adding numbers to string
    if (numInclude){
        var numbers = "0123456789";
    
    } else {
        var numbers = "";
    } 

  
    let characters = letters.concat(numbers);


    //adding special characters to string
    if (specialChar){
        specialstring = "~!@#$%^&*";
    } else {
        specialstring = "";
    }

    let charFinal = characters.concat(specialstring);
    console.log(charFinal);


    //initalize password
    var finalPassword = "";
    //For loop for generating password
    for (i=0; i<passLength; i++){
        randNum = Math.floor(Math.random() * passLength);
        randChar = charFinal[randNum];
        console.log(randChar)
        var finalPassword = finalPassword.concat(randChar);
    }

return finalPassword;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password[0];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// This function will ask the user what criteria they want to include and then generate the password
function generatePassword(){
    
    //User Questions (Boolean type)
    let lowCase = confirm("Do you want lower cases in your password?")

    let upCase = confirm("Do you want upper cases in your password?");

    let numInclude = confirm("Do you want to include numbers in your password?");
    
    let specialChar = confirm("Do you want to include special characters in your password?");
        
    let passLength =  prompt("How many characters do you want your password to be? (Pick a number between 8-128");

    //Alert when user inputs an invalid password length
    if (passLength>=8 && passLength<=128){
    } else {
        alert("Not valid. Please choose a number between 8-128");
    }

    //initalize object that contains strings that the user chose
    let charObject = [];

    //Lowercase letter generation
    if (lowCase) {
        var lowLetters = "abcdefghijklmnopqrstuvwxyz";
        charObject.push(lowLetters);
    } 

    //Uppercase letter generation
    if(upCase){
        var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        charObject.push(upLetters)
    }

    //Numbers generation
    if (numInclude){
        var numbers = "0123456789";
        charObject.push(numbers);
     } 

    //adding special characters to string
    if (specialChar){
        specialstring = "~!@#$%^&*";
        charObject.push(specialstring);
    } 

    //initalize password
    var finalPassword = "";
    //initialize object stepping
    n = 0;
    //For loop for generating password
    for (i=0; i<passLength; i++){
        
        if(n===charObject.length){
            n= 0;  
        }
        let randCharFromThisString = charObject[n];

        let randNum = Math.floor(Math.random() * randCharFromThisString.length);
        let randChar = randCharFromThisString[randNum]; 

        var finalPassword = finalPassword.concat(randChar);
        n=n+1;
        }
    
    console.log(finalPassword);

        //Checks if password contains at least 1 of each user criteria (lower case letters)
        if(lowCase){
            function containsLowCase(str){
                return /[a-z]/.test(str);
            }
            var lowCasePresent = containsLowCase(finalPassword);
            console.log("lower case characters present: " + lowCasePresent);
        } else {
            var lowCasePresent = true;
        }
    
        //Checks if password contains at least 1 of each user criteria (upper case letters)
        if(upCase){
            function containsUpCase(str){
                return /[A-Z]/.test(str);
            }
            var upCasePresent = containsUpCase(finalPassword);
            console.log("upper case characters present: " + upCasePresent);
        } else {
            var upCasePresent = true;
        }
    
        //Checks if password contains at least 1 of each user criteria (numbers)
        if(numInclude){
            function containsNum(str){
                return /[0-9]/.test(str);
            }
            var numPresent = containsNum(finalPassword);
            console.log("numbers present: " + numPresent);
        } else {
            var numPresent = true;
        }
    
        //Checks if password contains at least 1 of each user criteria (special characters)
        if(specialChar){
            function containsSpecial(str){
                const specialChars = /[~!@#$%^&*]/;
                return specialChars.test(finalPassword);
            }
            var specialPresent = containsSpecial(finalPassword);
            console.log("special characters present: " + specialPresent);
        } else {
            var specialPresent = true;
        }



return [finalPassword, lowCasePresent, upCasePresent, numPresent, specialPresent];
}
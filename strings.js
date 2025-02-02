// Function to check if a string is a palindrome
function isPalindrome(str) 
{
     // Removes spaces and convert the string to lowercase
    let cleanedStr = str.replace(/\s+/g, "").toLowerCase();
     // Reverses the cleaned string
    let reversedStr = cleanedStr.split("").reverse().join("");
     // Compares the cleaned string with the reversed string
    return cleanedStr == reversedStr;
}

// Function to handle form submission
function submitForm() 
{
     // Gets the user input string
    const userString = document.getElementById("userString").value;
     // Gets the result div element
    const resultDiv = document.getElementById("result");

    // Checks if the user string is a palindrome
    if (isPalindrome(userString)) 
    {
        // Displays the palindrome message
        resultDiv.innerHTML = userString + " is a palindrome.";
    } 
    else 
    {
        // Displays the not a palindrome message
        resultDiv.innerHTML = userString + " is not a palindrome.";
    }

    // Ask the user if they want to enter another word
    const anotherWord = confirm("Do you want to enter another word?");
    
    //If user does not want to enter another word
    if (!anotherWord) 
        {
        // Clears the form
        document.getElementById("stringForm").reset();
        //Displays message
        resultDiv.innerHTML += "<br> Thank you for using the Palindrome Checker!";
    }

    // Plays the audio when the form is submitted
    document.getElementById("backgroundAudio").play();
}


// Function to validate form inputs
function validateForm() {
     // Get the values of the input fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const zipCode = document.getElementById("zipCode").value;

     // Combine the first name and last name into a single variable
    const fullName = `${firstName} ${lastName}`;

    // Check if the full name is longer than 20 characters
    if (fullName.length > 20) 
    {
        // Display a warning message if the full name is invalid
        document.getElementById("message").innerHTML = "<p>Full name must not exceed 20 characters.</p>";
        return false; // Do not continue the program
    }

    // Check if the zip code is valid (5 digits)
    if (!/^\d{5}$/.test(zipCode)) 
    {
        // Display a warning message if the zip code is invalid
        document.getElementById("message").innerHTML = "<p>Zip code must be exactly 5 digits.</p>";
        
        // Do not continue the program
        return false; 
    
    }

    // If all inputs are valid, display the secret message
    document.getElementById("message").innerHTML = "<p>VALIDATION <br> SUCCESSFUL</p>";
    
    // Prevent form submission
    return false; 

}



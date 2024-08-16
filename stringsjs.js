 // Function to check if the user-entered string is a palindrome
 function checkPalindrome() {
    // Get the user input from the text box
    let inputString = document.getElementById('userString').value;

    // Remove spaces and convert to lowercase for uniformity
    let cleanedString = inputString.replace(/\s+/g, '').toLowerCase();

    // Reverse the cleaned string
    let reversedString = cleanedString.split('').reverse().join('');

    // Check if the cleaned string is equal to the reversed string
    if (cleanedString === reversedString) {
        document.getElementById('result').innerText = `"${inputString}" is a palindrome!`;
    } else {
        document.getElementById('result').innerText = `"${inputString}" is not a palindrome.`;
    }

    // Prompt the user to enter another string or exit
    setTimeout(function() {
        let tryAgain = confirm("Would you like to check another word?");
        if (tryAgain) {
            // If the user wants to try again, clear the input and result
            document.getElementById('userString').value = '';
            document.getElementById('result').innerText = '';
        } else {
            // If the user is done, thank them and end the loop
            document.getElementById('result').innerText += " Thank you for using the Palindrome Checker!";
        }
    }, 500); // Delay for a better user experience
}
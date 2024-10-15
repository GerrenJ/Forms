// JavaScript code for form validation
// Prevent form from submitting
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Retrieve the input field value
    const inputValue = inputField.value.trim();
    // Regular expression pattern for alphanumeric input
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    // Check if the input value matches the pattern
    if (alphanumericRegex.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert("Success: The input is valid and the form has been submitted");
    } else {
        // Invalid input: display error message
        alert("Fail: Input value is not alphanumeric. ");
    } 
});

        
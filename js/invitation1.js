// Function to replace placeholders with user input values
function replaceContent() {
    // Declaring the variables to store user input
    var myRecipientName; // Variable to hold the recipient's name
    var myHostName; // Variable to hold the host's name

    // Setting the variables to the input field's values using their respective IDs
    myRecipientName = document.getElementById("recipientNameInput").value; // Fetching recipient name from the input field
    myHostName = document.getElementById("hostNameInput").value; // Fetching host name from the input field
    
    // Logging the variable values to the console for debugging
    console.log('Variable myRecipientName: ' + myRecipientName);
    console.log('Variable myHostName: ' + myHostName);
    
    // Manipulating the DOM to replace placeholder data with the user input
    document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName; // Replacing placeholder with recipient's name
    document.getElementById("hostNamePlaceholder").innerHTML = myHostName; // Replacing placeholder with host's name
}
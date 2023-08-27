// Get reference to the text input 
const textInput = document.getElementById('textInput');

// Get reference to display 
const displayArea = document.getElementById('displayArea');

// event - clicking a button
// event target - 
// event listener - 
/*

const button = document.getElementById('mybutton');

button.addEventListener('click', function(){
  console.log('Button clicked!');
});



variable.function()

*/

// Get reference to text input 
textInput.addEventListener('input', () => 
  {

  // Retrieve the text that has been typed  
  const typedText = textInput.value;

  // Update the display area with the input
  displayArea.textContent = typedText;
    
});

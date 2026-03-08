/**
* translation.js
* Handles the logic for the Slang Translator section.
* Relies on the 'slangWords' array defined in script.js
*/


document.getElementById('translate-btn').addEventListener('click', () => {
   const inputField = document.getElementById('slang-input');
   const output = document.getElementById('translation-output');
   const voiceOutput = document.getElementById('ai-voice-output');
  
   // Get the user input and trim whitespace
   let userInput = inputField.value.trim();


   if (userInput === "") {
       output.innerHTML = "<p>Please enter some slang!</p>";
       voiceOutput.innerHTML = "<p></p>";
       return;
   }


   // Search for the word in the slangWords array (Case-Insensitive)
   // We look for a match where the word in our list equals the user's input
   const foundSlang = slangWords.find(item =>
       item.word.toLowerCase() === userInput.toLowerCase()
   );


   if (foundSlang) {
       // Option 1: Using your requested .replace logic
       // We take the input and replace the matching part with the definition
       const resultText = userInput.replace(new RegExp(foundSlang.word, 'gi'), foundSlang.definition);
      
       output.innerHTML = `<p><strong>"${foundSlang.word}"</strong> means: ${foundSlang.definition}</p>`;
       //voiceOutput.innerHTML = `<p>AI voice would read: "The definition of ${foundSlang.word} is ${foundSlang.definition}."</p>`;
   } else {
       output.innerHTML = `<p>Sorry, "<strong>${userInput}</strong>" isn't in our Hive yet!</p>`;
       //voiceOutput.innerHTML = `<p>Try searching for 'Bees knees' or 'Mate'.</p>`;
   }
});


// Optional: Allow pressing "Enter" key to translate
document.getElementById('slang-input').addEventListener('keypress', (e) => {
   if (e.key === 'Enter') {
       document.getElementById('translate-btn').click();
   }
});


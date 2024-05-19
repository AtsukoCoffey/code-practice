// Question array object
const words = [
  {
    name: 'amaebi',
    "kana": 'あまえび',
    image: 'assets/images/sushi_amaebi.png'
  },
  {
    name: 'anago',
    "kana": 'あなご',
    image: 'assets/images/sushi_anago.png'
  },
  {
    name: 'battera',
    "kana": 'ばってら',
    image: 'assets/images/sushi_battera.png'
  },
  {
    name: 'buri',
    "kana": 'ぶり',
    image: 'assets/images/sushi_buri.png'
  }
];

// Shuffle the array object
let shuffledWords = [];

function shuffle() {
  for (word of words) {
    shuffledWords.push(words[Math.floor(Math.random() * words.length)]);
  }
}
shuffle();


// Wait for the DOM to finish loading before running the game
// Start the global time limit and start game loop
document.addEventListener("DOMContentLoaded", () => {
  startGame();
  setTimeout(() => {
    finishGame()
  }, 60000);


});

/**
 * Start game function
 * loop through the shuffled question
*/
function startGame() {
  // Get div for display questions
  let imageDisplay = document.getElementById('img-display');
  let textDisplay = document.getElementById('text-display');
  let kanaDisplay = document.getElementById('kana-display');

  imageDisplay.innerHTML = '<img src="' + shuffledWords[0].image + '" width="100" height="100" alt="Question word">';

  kanaDisplay.innerHTML = shuffledWords[0].kana;
  textDisplay.innerHTML = shuffledWords[0].name;

}

/**
 * Finish game function
 */
function finishGame() {
  let textDisplay = document.getElementById('text-display');
  textDisplay.innerHTML = "Finished!";
}

/**
 * Detect key and 
 */
function handleKeyPress(event) {
  // Access the key that was pressed
  const key = event.key;

  // console the pressed key
  console.log('Key pressed: ' + key);

  let textDisplay = document.getElementById('text-display').innerHTML;
  let currentLetter = textDisplay.charAt(0);
  if (key === currentLetter) {
    console.log("OK");

    // Wrap the first letter in a span element and apply styling
    let styledCurrentLetter = `<span style="font-weight: 600; color: yellow">${currentLetter}</span>`;

    // Replace the first letter in the text content with the styled first letter
    let styledTextDisplay = textDisplay.replace(currentLetter, styledCurrentLetter);

    // Update the div with the styled text content
    document.getElementById('text-display').innerHTML = styledTextDisplay;

  }


 

}

window.addEventListener('keypress', handleKeyPress);

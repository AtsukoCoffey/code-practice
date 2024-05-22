// Question array object
const words = [
  {
    name: 'amaebi',
    "abc": 'amaebi',
    "kana": 'あまえび',
    image: 'assets/images/sushi_amaebi.png'
  },
  {
    name: 'anago',
    "abc": 'anago',
    "kana": 'あなご',
    image: 'assets/images/sushi_anago.png'
  },
  {
    name: 'battera',
    "abc": 'battera',
    "kana": 'ばってら',
    image: 'assets/images/sushi_battera.png'
  },
  {
    name: 'buri',
    "abc": 'buri',
    "kana": 'ぶり',
    image: 'assets/images/sushi_buri.png'
  },
  {
    name: 'kappa',
    "abc": 'buri',
    "kana": 'かっぱ',
    image: 'assets/images/makimono_kappa.png'
  },
  {
    name: 'negitoro',
    "abc": 'buri',
    "kana": 'ねぎとろ',
    image: 'assets/images/makimono_negitoro.png'
  },
  {
    name: 'takuwan',
    "abc": 'buri',
    "kana": 'たくあん',
    image: 'assets/images/makimono_takuwan.png'
  },
  {
    name: 'chutoro',
    "abc": 'buri',
    "kana": 'ちゅうとろ',
    image: 'assets/images/sushi_chutoro.png'
  },
  {
    name: 'ebi',
    "abc": 'buri',
    "kana": 'えび',
    image: 'assets/images/sushi_ebi.png'
  },
  {
    name: 'hamachi',
    "abc": 'buri',
    "kana": 'はまち',
    image: 'assets/images/sushi_hamachi.png'
  },
  {
    name: 'hanba-gu',
    "abc": 'buri',
    "kana": 'はんばーぐ',
    image: 'assets/images/sushi_hamburg_tare.png'
  },
  {
    name: 'hotate',
    "abc": 'buri',
    "kana": 'ほたて',
    image: 'assets/images/sushi_hotate.png'
  },
  {
    name: 'ika',
    "abc": 'buri',
    "kana": 'いか',
    image: 'assets/images/sushi_ika.png'
  },
  {
    name: 'ikura',
    "abc": 'buri',
    "kana": 'いくら',
    image: 'assets/images/sushi_ikura.png'
  },
  {
    name: 'katsuo',
    "abc": 'buri',
    "kana": 'かつお',
    image: 'assets/images/sushi_katsuo.png'
  },
  {
    name: 'sake',
    "abc": 'buri',
    "kana": 'さけ',
    image: 'assets/images/sushi_salmon.png'
  },
  {
    name: 'tai',
    "abc": 'buri',
    "kana": 'たい',
    image: 'assets/images/sushi_tai.png'
  },
  {
    name: 'tako',
    "abc": 'buri',
    "kana": 'たこ',
    image: 'assets/images/sushi_tako.png'
  },
  {
    name: 'tamago',
    "abc": 'buri',
    "kana": 'たまご',
    image: 'assets/images/sushi_tamago.png'
  },
  {
    name: 'inarizushi',
    "abc": 'buri',
    "kana": 'いなりずし',
    image: 'assets/images/food_inarizushi_set.png'
  },
];




/**
 * All the global counter and variables
 *///////////////////////////////////////////////////////////////
// Get div for display questions
let imageDisplay = document.getElementById('img-display');
let textDisplay = document.getElementById('text-display');
let kanaDisplay = document.getElementById('kana-display');
let textOver = document.getElementById('text-overlay');
// let textOver = document.getElementById('text-overlay');
let input = document.getElementById('input'); // input box

// Game counter = Number of correct answer
let gameCounter = 0;
// Letter counter 
let letterCounter = 0;
// let kanaLetterCounter = 0;
// Correct / Mistake Letter counter
let correctTypeCounter = 0;
let missTypeCounter = 0;


/**
 * All the main functions
 *///////////////////////////////////////////////////////////////
// Shuffle the array object
// let shuffledWords = [];
// function shuffle() {
//   for (word of words) {
//     shuffledWords.push(words[Math.floor(Math.random() * 40)]);
//   }
// }

/**
 * Start game function
 * loop through the shuffled question
*/
function startGame() {
  // Display next (shuffled) words word
  imageDisplay.innerHTML = '<img src="' + words[gameCounter].image + '" width="100" height="100" alt="Question word">';
  kanaDisplay.innerHTML = words[gameCounter].kana;
  textDisplay.innerHTML = words[gameCounter].name;

  // Reset the div with empty value
  document.getElementById('text-overlay').textContent = "";
  document.getElementById('input').value = "";

  // Set one word timer and restart
  setTimeout(function () {
    document.getElementById('hit-sound').play();
    gameCounter++;
    letterCounter = 0;
    startGame();
  }, 20000);
}

/**
 * Determine pressed key, change color, add counter to go next letter
 */
function handleKeyPress(event) {
  // Access the key that was pressed
  const key = event.key;
  // let kana = detectBoin(key);

  // Check whether match the letter
  if (key === textDisplay.innerText.charAt(letterCounter)) {
    // typing sound
    document.getElementById('type-sound').play();

    let currentLetter = textDisplay.innerText.charAt(letterCounter);

    // Add matched letter to the overlay div
    // textOver.innerText += currentLetter;

    // Update the div
    document.getElementById('text-overlay').innerHTML = textOver.innerText += currentLetter;
    
    // Go to next word
    letterCounter++;
    correctTypeCounter++;

    // Reset input box
    document.getElementById('input').value = "";

console.log('Letter Counter is: ', letterCounter);

    // Enter key action
  } else if (key === "Enter") {
    validateInput();

    // Check user input is correct for mobile user
  } else {
    // wrong typing sound
    document.getElementById('hit-sound').play();

    // Mistake counter
    missTypeCounter++;

    // Reset input box
    document.getElementById('input').value = "";
  }
  // console the pressed key
  console.log('Key pressed: ' + key);

}

/**
  * Validate user entry when correct typing, go on to next
  *///   // Enter key action
function validateInput() {
  // let lastLetter = words[gameCounter].length;

  if (textOver.innerText === textDisplay.innerText || input.innerText === textDisplay.innerText) {

    // letter counter reset
    letterCounter = 0;
    // kanaLetterCounter = 0;
    gameCounter++;
    // Next word
    startGame();

  }
}

/**
 * Finish game function
 */
function finishGame() {
  textDisplay.innerHTML = "Time out";
  textOver.innerHTML = "Time out";
  

  // Ending sound
  document.getElementById('ending-sound').play();

  // Score display
  document.getElementsByTagName('main')[0].innerHTML =
    `<div><p>Menu</p><ul><li>Sushi menu</li><li>Travel in Japan</li><li>Greetings</li></ul></div><div><p>Score</p><ul><li>Clear : ${gameCounter}</li><li>Miss : 0</li><li>Success rate : ${successRate}%</li></ul></div>`;
}



// keyboard window event
// window.addEventListener('keypress', handleKeyPress);

// Add event to input box -> validate and enter button action
input.addEventListener('keypress', handleKeyPress);



// Wait for the DOM to finish loading before running the game
// Start the global time-limit and start game
document.addEventListener("DOMContentLoaded", function () {
  // shuffle();
  startGame();
  setTimeout(function () {
    finishGame();
  }, 60000);
}); //Add event listener


/**
 * Calculate the score
 */
// Success rate : correct / correct + mistake * 100
let successRate = Math.floor((correctTypeCounter / (correctTypeCounter + missTypeCounter)) * 100);






// kana if statement

function detectBoin(key) {
  if (key === 'a') {
    return "あ";
  } else if (key === 'i') {
    return "い";
  } else if (key === 'u') {
    return "う";
  } else if (key === 'e') {
    return "え";
  } else if (key === 'o') {
    return "お";
  } else {
    return key
  }
};
function secondKeyOfK(event) {
  let secondKey = event.key;
  if (secondKey === 'a') {
    return "か";
  } else if (secondKey === 'i') {
    return "き";
  } else if (secondKey === 'u') {
    return "く";
  } else if (secondKey === 'e') {
    return "け";
  } else if (secondKey === 'o') {
    return "こ";
  } else {
    return X
  }
};
function secondKeyOfS(event) {
  let secondKey = event.key;
  if (secondKey === 'a') {
    return "さ";
  } else if (secondKey === 'i') {
    return "し";
  } else if (secondKey === 'u') {
    return "す";
  } else if (secondKey === 'e') {
    return "せ";
  } else if (secondKey === 'o') {
    return "そ";
  }
};
function secondKeyOfT(event) {
  let secondKey = event.key;
  if (secondKey === 'a') {
    return "た";
  } else if (secondKey === 'i') {
    return "ち";
  } else if (secondKey === 'u') {
    return "つ";
  } else if (secondKey === 'e') {
    return "て";
  } else if (secondKey === 'o') {
    return "と";
  }
};
function secondKeyOfN(event) {
  const secondKey = event.key;
  if (secondKey === 'a') {
    return "な";
  } else if (secondKey === 'i') {
    return "に";
  } else if (secondKey === 'u') {
    return "ぬ";
  } else if (secondKey === 'e') {
    return "ね";
  } else if (secondKey === 'o') {
    return "の";
  }
};

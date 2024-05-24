////////////////////////////////////////////// Question array object
const words = [
  {
    name: 'amaebi',
    "abc": 'amaebi',
    "kana": 'あまえび',
    image: 'assets/images/sushi_amaebi.webp'
  },
  {
    name: 'anago',
    "abc": 'anago',
    "kana": 'あなご',
    image: 'assets/images/sushi_anago.webp'
  },
  {
    name: 'battera',
    "abc": 'battera',
    "kana": 'ばってら',
    image: 'assets/images/sushi_battera.webp'
  },
  {
    name: 'buri',
    "abc": 'buri',
    "kana": 'ぶり',
    image: 'assets/images/sushi_buri.webp'
  },
  {
    name: 'kappa',
    "abc": 'buri',
    "kana": 'かっぱ',
    image: 'assets/images/makimono_kappa.webp'
  },
  {
    name: 'negitoro',
    "abc": 'buri',
    "kana": 'ねぎとろ',
    image: 'assets/images/makimono_negitoro.webp'
  },
  {
    name: 'takuwan',
    "abc": 'buri',
    "kana": 'たくあん',
    image: 'assets/images/makimono_takuwan.webp'
  },
  {
    name: 'chutoro',
    "abc": 'buri',
    "kana": 'ちゅうとろ',
    image: 'assets/images/sushi_chutoro.webp'
  },
  {
    name: 'ebi',
    "abc": 'buri',
    "kana": 'えび',
    image: 'assets/images/sushi_ebi.webp'
  },
  {
    name: 'hamachi',
    "abc": 'buri',
    "kana": 'はまち',
    image: 'assets/images/sushi_hamachi.webp'
  },
  {
    name: 'hanba-gu',
    "abc": 'buri',
    "kana": 'はんばーぐ',
    image: 'assets/images/sushi_hamburg_tare.webp'
  },
  {
    name: 'hotate',
    "abc": 'buri',
    "kana": 'ほたて',
    image: 'assets/images/sushi_hotate.webp'
  },
  {
    name: 'ika',
    "abc": 'buri',
    "kana": 'いか',
    image: 'assets/images/sushi_ika.webp'
  },
  {
    name: 'ikura',
    "abc": 'buri',
    "kana": 'いくら',
    image: 'assets/images/sushi_ikura.webp'
  },
  {
    name: 'katsuo',
    "abc": 'buri',
    "kana": 'かつお',
    image: 'assets/images/sushi_katsuo.webp'
  },
  {
    name: 'sake',
    "abc": 'buri',
    "kana": 'さけ',
    image: 'assets/images/sushi_salmon.webp'
  },
  {
    name: 'tai',
    "abc": 'buri',
    "kana": 'たい',
    image: 'assets/images/sushi_tai.webp'
  },
  {
    name: 'tako',
    "abc": 'buri',
    "kana": 'たこ',
    image: 'assets/images/sushi_tako.webp'
  },
  {
    name: 'tamago',
    "abc": 'buri',
    "kana": 'たまご',
    image: 'assets/images/sushi_tamago.webp'
  },
  {
    name: 'inarizushi',
    "abc": 'buri',
    "kana": 'いなりずし',
    image: 'assets/images/food_inarizushi_set.webp'
  },
];

/**
 *  Shuffle the question array object 
 *  Using Fisher Yates shuffle method : [BUG] article from stackoverflow
 *  */
// Create a shalow copy of words array
let shuffledWords = [...words];
// for loop from last index
for (i = shuffledWords.length - 1; i > 0; i--) {
  randomIndexOfWords = Math.floor(Math.random() * i)
  // escape value of last index of shuffledWords array
  temporaryValue = shuffledWords[i]
  // swap last index value to random value
  shuffledWords[i] = shuffledWords[randomIndexOfWords]
  // swap random index value to last index valu
  shuffledWords[randomIndexOfWords] = temporaryValue
}




///////////////////////////////////////////   All the global counter and variables

// Get div for display questions
let imageDisplay = document.getElementById('img-display');
let textDisplay = document.getElementById('text-display');
let textOver = document.getElementById('text-overlay');
let kanaDisplay = document.getElementById('kana-display');
let kanaOver = document.getElementById('kana-overlay');
let input = document.getElementById('input'); // input box

// Game counter  
let gameCounter = 0;
// Letter counter 
let letterCounter = 0;
// let kanaLetterCounter = 0;
// Correct / Mistake Letter counter
let correctTypeCounter = 0;
let missTypeCounter = 0;


///////////////////////////////////////////   All the main functions

/**
 * Start game function
 * loop through the shuffled question
 */
function startGame() {
  // Display next shuffled word
  imageDisplay.innerHTML = '<img src="' + shuffledWords[gameCounter].image + '" width="100" height="100" alt="Question word">';
  kanaDisplay.innerHTML = shuffledWords[gameCounter].kana;
  textDisplay.innerHTML = shuffledWords[gameCounter].name;

  // Reset the div with empty value
  document.getElementById('text-overlay').textContent = "";
  document.getElementById('kana-overlay').textContent = "";
  document.getElementById('input').value = "";

  // // Set one word timer and restart
  // setTimeout(function () {
  //   document.getElementById('hit-sound').play();
  //   gameCounter++;
  //   letterCounter = 0;
  //   startGame();
  // }, 20000);

}

/**
 * Determine pressed key function
 * if matched change color, add counter to go next letter
 * NOT work for mobile screen keyboard --> validate function
 */
function handleKeyPress(event) {

  // Access the key that was pressed
  const key = event.key;

  // Check whether match the letter
  if (key == textDisplay.textContent.charAt(letterCounter)) {
    // typing sound
    document.getElementById('type-sound').play();

    let currentLetter = textDisplay.innerText.charAt(letterCounter);

    // Add matched letter to the overlay div and update the div
    document.getElementById('text-overlay').innerHTML = textOver.innerText += currentLetter;

    // Go to next word
    letterCounter++;
    correctTypeCounter++;

    console.log('Letter Counter is: ', letterCounter);

    // Enter key action  // Check user input is correct for mobile user

  } else if (key === "Enter") {
    validateInput();

  } else {
    // wrong typing sound
    document.getElementById('hit-sound').play();

    // Mistake counter
    missTypeCounter++;

  }

  // Reset input box
  document.getElementById('input').value = "";

  // console the pressed key
  console.log('Key pressed: ' + key);

}

/**
  * Validate user entry when correct typing, go on to next
  *///   // Enter key action
function validateInput() {

  // // submit from form
  // event.preventDefault();

  if (textOver.innerText == textDisplay.innerText || input.innerText == textDisplay.innerText) {

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
    `<div><p>Menu</p><ul><li>Sushi menu</li><li>Travel in Japan</li><li>Greetings</li></ul></div><div><p>Score</p><ul><li>Clear : ${gameCounter}</li><li>Miss : 0</li><li>Success rate : %</li></ul></div>`;
}


// keyboard window event
window.addEventListener('keypress', handleKeyPress);
// Submit for validate input - mobile device
input.addEventListener('input', validateInput);

// // Add event to input box -> validate and enter button action
// input.addEventListener('keypress', handleKeyPress);

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
 * Difine kana alphabet
 * I will challenge this matching system if I had a time
 */
// let lastIndex = document.getElementById('text-overlay').innerText.length;
// let lastSecondIndex = document.getElementById('text-overlay').innerText.length - 1;
// let lastThirdIndex = document.getElementById('text-overlay').innerText.length - 2;
// let kanaLasT = textOver.textContent.charAt(lastThirdIndex);
// let kanaLasS = textOver.textContent.charAt(lastSecondIndex);
// let kanaLast = document.getElementById('text-overlay').innerText;
// let kana;
// kana = detectBoin();
// let hiragana;
// if (kana) {
//   hiragana = kana;
// }
// // Add matched letter to the overlay div and update the div
// document.getElementById('kana-overlay').innerHTML = kanaOver.innerText += hiragana;
// kana = "";
// hiragana = "";
/**
 * Defining kana using textOver's input data
 */
// function detectBoin() {
//   if (!lastSecondIndex || !lastThirdIndex) {
//     if (kanaLast === 'a') {
//       return "あ";
//     } else if (kanaLast === 'i') {
//       return "い";
//     } else if (kanaLast === 'u') {
//       return "う";
//     } else if (kanaLast === 'e') {
//       return "え";
//     } else if (kanaLast === 'o') {
//       return "お";
//     }
//   } else if (lastSecondIndex || lastThirdIndex) {
//     if (kanaLasS === 'm' && kanaLast === 'a') {
//       return "ま";
//     } else if (kanaLasS === 'b' && kanaLast === 'i') {
//       return "び";
//     }
//   }
// };
// else if (k === 'k' && kanaLast === 'a') {
//   return "か";
// } else if (k === 'k' && kanaLast === 'i') {
//   return "き";
// } else if (k === 'k' && kanaLast === 'u') {
//   return "く";
// } else if (k === 'k' && kanaLast === 'e') {
//   return "け";
// } else if (k === 'k' && kanaLast === 'o') {
//   return "こ";
// } else if (k === 's' && kanaLast === 'a') {
//   return "さ";
// } else if ((k === 's' && kanaLast === 'i') || (k === 's' && a === 'h' && kanaLast === 'i')) {
//   return "し";
// } else if (k === 's' && kanaLast === 'u') {
//   return "す";
// } else if (k === 's' && kanaLast === 'e') {
//   return "せ";
// } else if (k === 's' && kanaLast === 'e') {
//   return "そ";
// } else if (k === 't' && kanaLast === 'a') {
//   return "た";
// } else if ((k === 't' && kanaLast === 'u') || (k === 't' && a === 's' && kanaLast === 'u')) {
//   return "ち";
// } else if ((k === 't' && kanaLast === 'u') || (k === 't' && a === 's' && kanaLast === 'u')) {
//   return "つ";
// } else if (k === 't' && kanaLast === 'e') {
//   return "て";
// } else if (k === 't' && kanaLast === 'o') {
//   return "と";
// } else if (k === 'n' && kanaLast === 'a') {
//   return "な";
// } else if (k === 'n' && kanaLast === 'i') {
//   return "に";
// } else if (k === 'n' && kanaLast === 'u') {
//   return "ぬ";
// } else if (k === 'n' && kanaLast === 'e') {
//   return "ね";
// } else if (k === 'n' && kanaLast === 'o') {
//   return "の";
// } else if (k === 'h' && kanaLast === 'a') {
//   return "は";
// } else if (k === 'h' && kanaLast === 'i') {
//   return "ひ";
// } else if (k === 'f' && kanaLast === 'u') {
//   return "ふ";
// } else if (k === 'h' && kanaLast === 'e') {
//   return "へ";
// } else if (k === 'h' && kanaLast === 'o') {
//   return "ほ";
// } else if (k === 'm' && kanaLast === 'a') {
//   return "ま";
// } else if (k === 'm' && kanaLast === 'i') {
//   return "み";
// } else if (k === 'm' && kanaLast === 'u') {
//   return "む";
// } else if (k === 'm' && kanaLast === 'e') {
//   return "め";
// } else if (k === 'm' && kanaLast === 'o') {
//   return "も";
// } else if (k === 'y' && a === 'a') {
//   return "や";
// } else if (k === 'y' && a === 'u') {
//   return "ゆ";
// } else if (k === 'y' && a === 'o') {
//   return "よ";
// } else if (k === 'r' && a === 'a') {
//   return "ら";
// } else if (k === 'r' && a === 'i') {
//   return "り";
// } else if (k === 'r' && a === 'u') {
//   return "る";
// } else if (k === 'r' && a === 'e') {
//   return "れ";
// } else if (k === 'r' && a === 'o') {
//   return "ろ";
// } else if (k === 'w' && a === 'a') {
//   return "わ";
// } else if (k === 'n' && a === 'n') {
//   return "ん";
// } else if (a === 'a') {
//   return "あ";
// } else if (a === 'i') {
//   return "い";
// } else if (a === 'u') {
//   return "う";
// } else if (a === 'e') {
//   return "え";
// } else if (a === 'o') {
//   return "お";
// }

// (key !== ('a' || 'i' || 'u' || 'e' || 'o')) {
//   throw;
// }
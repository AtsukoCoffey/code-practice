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



// Shuffle the array object
let shuffledWords = [];

function shuffle() {
  for (word of words) {
    shuffledWords.push(words[Math.floor(Math.random() * words.length)]);
  }
}



// Wait for the DOM to finish loading before running the game
// Start the global time-limit and start game
document.addEventListener("DOMContentLoaded", function () {
  shuffle();
  startGame();
  setTimeout(function () {
    finishGame();
  }, 60000);
  // keyboard event
  // window.addEventListener('keypress', handleKeyPress);
  // Enter key -> validate input function for mobile screen
  let input = document.getElementById('input');
  input.addEventListener('keypress', handleKeyPress)
  // input.addEventListener('keypress', function (event) {


  // }); // Enter key action

}); //Add event listener



// Game counter = Number of correct answer
let g = 0;
// Letter counter : correct / mistake
let c = 0;
let m = 0;
// Success rate : correct / correct + mistake * 100
let successRate = Math.floor(( c / (c + m) )* 100); 


/**
 * Start game function
 * loop through the shuffled question
*/


function startGame() {
  // Get div for display questions
  let imageDisplay = document.getElementById('img-display');
  let textDisplay = document.getElementById('text-display');
  let kanaDisplay = document.getElementById('kana-display');
  // let textOver = document.getElementById('text-overlay');

  imageDisplay.innerHTML = '<img src="' + shuffledWords[g].image + '" width="100" height="100" alt="Question word">';

  kanaDisplay.innerHTML = shuffledWords[g].kana;
  textDisplay.innerHTML = shuffledWords[g].name;


  // Reset the div with empty value
  document.getElementById('text-overlay').innerHTML = "";
  document.getElementById('input').value = "";

  // Set one word timer and restart
  // setTimeout(function () {
  //   startGame();
  // }, 10000);
}

/**
 * Finish game function
 */
function finishGame() {
  let textDisplay = document.getElementById('text-display');
  let textOver = document.getElementById('text-overlay');

  textDisplay.innerHTML = "Time out";
  textOver.innerHTML = "Time out";

      // typing sound
      document.getElementById('ending-sound').play();
  

  document.getElementsByTagName('main')[0].innerHTML =
    `<div><p>Menu</p><ul><li>Sushi menu</li><li>Travel in Japan</li><li>Greetings</li></ul></div><div><p>Score</p><ul><li>Clear : ${g}</li><li>Miss : 0</li><li>Success rate : ${successRate}%</li></ul></div>`;
}



// Letter counter ----------------------------------------------------
let i = 0;
let a = 0;

/**
 * Determine pressed key, change color, add counter to go next letter
 */

function handleKeyPress(event) {
  // Access the key that was pressed
  const key = event.key;
  // let kana = detectBoin(key);

  let textDisplay = document.getElementById('text-display').innerText;
  // let textOver = document.getElementById('text-overlay').innerText;
  // let kanaDisplay = document.getElementById('kana-display').innerText;

  // Check whether match the letter
  if (key === textDisplay.charAt(i)) {
    let currentLetter = textDisplay.charAt(i);

    // Add matched letter to the overlay div
    let textOver = document.getElementById('text-overlay').innerText;
    textOver += currentLetter;

    // Update the div
    document.getElementById('text-overlay').innerHTML = textOver;

    // typing sound
    document.getElementById('type-sound').play();

    // Go to next word
    i++;
    c++;

    // Check user input is correct for mobile user
  } else {
    // wrong typing sound
    document.getElementById('hit-sound').play();

    // Mistake counter
    m++;
  }


  if (key === "Enter") {
    validateInput();
  }
  // console the pressed key
  console.log('Key pressed: ' + key);

}



/**
   * Validate user entry when correct typing, go on to next
   */
function validateInput() {
  let textDisplay = document.getElementById('text-display').innerText;
  let textOver = document.getElementById('text-overlay').innerText;
  let input = document.getElementById('input').innerText;
  if (textOver === textDisplay || input === textDisplay) {
    //counter reset
    i = 0;
    a = 0;
    g++;
    // Next word
    startGame();

  }
}




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

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

// kana if statement

function detectKana(key) {
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
  } else if (key === 'k') {
    window.addEventListener('keypress', secondKeyOfK);
  } else if (key === 's') {
    window.addEventListener('keypress', secondKeyOfS);
  } else if (key === 't') {
    window.addEventListener('keypress', secondKeyOfT);
  } else if (key === 'n') {
    window.addEventListener('keypress', secondKeyOfN);
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
 * Detect key and change color
 */
function handleKeyPress(event) {
  // Access the key that was pressed
  const key = event.key;
  let kana = detectKana(key);

  // console the pressed key
  console.log('Key pressed: ' + key);
  console.log(kana);

  let textDisplay = document.getElementById('text-display').innerText;
  let kanaDisplay = document.getElementById('kana-display').innerText;

  let i = 0;
  if (kana === kanaDisplay[i]) {
    let currentKana = kanaDisplay.charAt(i);

    // Wrap the first letter in a span element
    let styledKana = `<span style="font-weight: 600; color: yellow">${currentKana}</span>`;

    // Replace the current kana with the styled kana
    let styledKanaDisplay = kanaDisplay.replace(currentKana, styledKana);

    // Update the div with the styled text content
    document.getElementById('kana-display').innerHTML = styledKanaDisplay;

    i++;
  }

  // //Loop through the current word
  // for (let i = 0; i < textDisplay.length; i++) {


  //   let currentLetter = textDisplay.charAt(i);
  //   if (key === currentLetter) {

  //     // Wrap the first letter in a span element and apply styling
  //     let styledCurrentLetter = `<span style="font-weight: 600; color: yellow">${currentLetter}</span>`;

  //     // Replace the current letter in the text content with the styled first letter
  //     let styledTextDisplay = textDisplay.replace(currentLetter, styledCurrentLetter);

  //     // Update the div with the styled text content
  //     document.getElementById('text-display').innerHTML = styledTextDisplay;

  //   }

  // }


}

window.addEventListener('keypress', handleKeyPress);
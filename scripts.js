var sheep_text;
var human_text;
var translate_button;

window.onload = function() {
  sheep_text = document.getElementById('sheep');
  human_text = document.getElementById('human');
  translate_button = document.getElementById('button');

  translate_button.addEventListener("click", translate);
  sheep_text.addEventListener("keydown", clearHuman);
  human_text.addEventListener("keydown", clearSheep);

};

function clearHuman() {
  human_text.value = "";
}

function clearSheep() {
  sheep_text.value = "";
}


function translate() {
  const raw_sheep_text = sheep_text.value;
  const raw_human_text = human_text.value;

  if (raw_human_text && raw_sheep_text) {
    confused();
  } else if (raw_human_text) {
    var split_text = raw_human_text.split('');
    var new_split_text = [];
    for (var i=0; i<split_text.length; i++) {
      if (human_to_sheep[split_text[i]]) {
        new_split_text.push(human_to_sheep[split_text[i]]);
      } else if (split_text[i] === " ") {
        new_split_text.push("....");
      }
    }
    const new_sheep_text = new_split_text.join(" ... ");
    sheep_text.value = new_sheep_text;


  } else if (raw_sheep_text) {
    var split_text = raw_sheep_text.split(' ... ');
    var new_split_text = [];
    for (var i=0; i<split_text.length; i++) {
      if (sheep_to_human[split_text[i]]) {
        new_split_text.push(sheep_to_human[split_text[i]]);
      } else if (split_text[i] === "....") {
        new_split_text.push(" ");
      }
    }
    const new_human_text = new_split_text.join("");
    human_text.value = new_human_text;
    
  } else {
    confused();
  }
}

function confused() {
}


const human_to_sheep = {
  "0": "baabaabaabaabaa",
  "1": "baaahbaabaabaabaa",
  "2": "baaahbaaahbaabaabaa",
  "3": "baaahbaaahbaaahbaabaa",
  "4": "baaahbaaahbaaahbaaahbaa",
  "5": "baaahbaaahbaaahbaaahbaaah",
  "6": "baabaaahbaaahbaaahbaaah",
  "7": "baabaabaaahbaaahbaaah",
  "8": "baabaabaabaaahbaaah",
  "9": "baabaabaabaabaaah",
  "a": "baaahbaa",
  "b": "baabaaahbaaahbaaah",
  "c": "baabaaahbaabaaah",
  "d": "baabaaahbaaah",
  "e": "baaah",
  "f": "baaahbaaahbaabaaah",
  "g": "baabaabaaah",
  "h": "baaahbaaahbaaahbaaah",
  "i": "baaahbaaah",
  "j": "baaahbaabaabaa",
  "k": "baabaaahbaa",
  "l": "baaahbaabaaahbaaah",
  "m": "baabaa",
  "n": "baabaaah",
  "o": "baabaabaa",
  "p": "baaahbaabaabaaah",
  "q": "baabaabaaahbaa",
  "r": "baaahbaabaaah",
  "s": "baaahbaaahbaaah",
  "t": "baa",
  "u": "baaahbaaahbaa",
  "v": "baaahbaaahbaaahbaa",
  "w": "baaahbaabaa",
  "x": "baabaaahbaaahbaa",
  "y": "baabaaahbaabaa",
  "z": "baabaabaaahbaaah",
  ".": "baaahbaabaaahbaabaaahbaa",
  ",": "baabaabaaahbaaahbaabaa",
  "?": "baaahbaaahbaabaabaaahbaaah",
  "!": "baabaaahbaabaaahbaabaa",
  "-": "baabaaahbaaahbaaahbaaahbaa",
  "/": "baabaaahbaaahbaabaaah",
  "@": "baaahbaabaabaaahbaabaaah",
  "(": "baabaaahbaabaabaaah",
  ")": "baabaaahbaabaabaaahbaa"
}

const sheep_to_human = {
  "baabaabaabaabaa": "0",
  "baaahbaabaabaabaa": "1",
  "baaahbaaahbaabaabaa": "2",
  "baaahbaaahbaaahbaabaa": "3",
  "baaahbaaahbaaahbaaahbaa": "4",
  "baaahbaaahbaaahbaaahbaaah": "5",
  "baabaaahbaaahbaaahbaaah": "6",
  "baabaabaaahbaaahbaaah": "7",
  "baabaabaabaaahbaaah": "8",
  "baabaabaabaabaaah": "9",
  "baaahbaa": "a",
  "baabaaahbaaahbaaah": "b",
  "baabaaahbaabaaah": "c",
  "baabaaahbaaah": "d",
  "baaah": "e",
  "baaahbaaahbaabaaah": "f",
  "baabaabaaah": "g",
  "baaahbaaahbaaahbaaah": "h",
  "baaahbaaah": "i",
  "baaahbaabaabaa": "j",
  "baabaaahbaa": "k",
  "baaahbaabaaahbaaah": "l",
  "baabaa": "m",
  "baabaaah": "n",
  "baabaabaa": "o",
  "baaahbaabaabaaah": "p",
  "baabaabaaahbaa": "q",
  "baaahbaabaaah": "r",
  "baaahbaaahbaaah": "s",
  "baa": "t",
  "baaahbaaahbaa": "u",
  "baaahbaaahbaaahbaa": "v",
  "baaahbaabaa": "w",
  "baabaaahbaaahbaa": "x",
  "baabaaahbaabaa": "y",
  "baabaabaaahbaaah": "z",
  "baaahbaabaaahbaabaaahbaa": ".",
  "baabaabaaahbaaahbaabaa": ",",
  "baaahbaaahbaabaabaaahbaaah": "?",
  "baabaaahbaabaaahbaabaa": "!",
  "baabaaahbaaahbaaahbaaahbaa": "-",
  "baabaaahbaaahbaabaaah": "/",
  "baaahbaabaabaaahbaabaaah": "@",
  "baabaaahbaabaabaaah": "(",
  "baabaaahbaabaabaaahbaa": ")",
}

const words = ["Devloper", "Designer", "Programmer"],
  colors = ["blue", "green", "yellow"],
  text = document.querySelector(".text");

// to ittrate over words array and make an infine loop
// Generator (iterate from 0-3)
function* generator() {
  var index = 0;
  while (true) {
    yield index++;

    if (index > words.length - 1) {
      index = 0;
    }
  }
}

// Typing effect
function typeChar(word) {
  let i = 0;
  text.innerHTML = "";
  text.classList.add(colors[words.indexOf(word)]);
  let id = setInterval(() => {
    if (i >= word.length) {
      deleteChar();
      clearInterval(id);
    } else {
      text.innerHTML += word[i];
      i++;
    }
  }, 300);
}

// Deleting effect
function deleteChar() {
  let word = text.innerHTML;
  let i = word.length - 1;
  let id = setInterval(() => {
    if (i >= 0) {
      text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
      i--;
    } else {
      text.classList.remove(colors[words.indexOf(word)]);
      typeChar(words[gen.next().value]);
      clearInterval(id);
    }
  }, 100);
}

// Initializing generator
let gen = generator();

typeChar(words[gen.next().value]);

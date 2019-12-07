// get all words to be animated
let words = document.querySelectorAll('.word');
// console.log(words);
words.forEach(word => {
  let letters = word.textContent.split('');
  // console.log(letters);
  word.textContent = '';
  letters.forEach(letter => {
    let span = document.createElement('span');
    span.textContent = letter;
    span.className = 'letter';
    word.append(span);
  })
});

// getting the currentWordIndex and next word index
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;

words[currentWordIndex].style.opacity = '1';

let rotateText = function () {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  // rotate out letters of current word, before that turn that into array and loop over it
  // console.log(currentWord.children);
  // as you can see its a HTML collection list, so use Array.from to turn that into array and use forEach

  Array.from(currentWord.children).forEach(function (letter, i) {
    setTimeout(function () {
      letter.className = 'letter out'
    }, i * 80)
  });

  // reveal and rotate in letters of next word
  nextWord.style.opacity = '1';
  Array.from(nextWord.children).forEach(function (letter, i) {
    letter.className = 'letter behind'
    setTimeout(function () {
      letter.className = 'letter in';
    }, 340 + i * 80)
    // dont get amazed, just adding the delay
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}
rotateText();
setInterval(rotateText, 3000)


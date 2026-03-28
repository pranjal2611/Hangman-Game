const words = ["PYTHON", "JAVASCRIPT", "HANGMAN", "DEVELOPER", "COLLEGE", "PROJECT"];
    const hangmanStages = ["h1.png", "h2.png", "h3.png", "h4.png", "h5.png", "h6.png", "h7.png"];
    
    let chosenWord = "";
    let displayWord = [];
    let chances = 6;
    let wrongGuesses = 0;

    function startGame() {
      chosenWord = words[Math.floor(Math.random() * words.length)];
      displayWord = Array(chosenWord.length).fill("_");
      chances = 6;
      wrongGuesses = 0;
      document.getElementById("word").innerText = displayWord.join(" ");
      document.getElementById("status").innerText = "Chances left: " + chances;
      document.getElementById("hangman-img").src = hangmanStages[0];
      generateKeyboard();
    }

    function generateKeyboard() {
      const keyboard = document.getElementById("keyboard");
      keyboard.innerHTML = "";
      for (let i = 65; i <= 90; i++) {
        let btn = document.createElement("button");
        btn.innerText = String.fromCharCode(i);
        btn.onclick = () => guessLetter(btn.innerText, btn);
        keyboard.appendChild(btn);
      }
    }

    function guessLetter(letter, btn) {
      btn.disabled = true;
      if (chosenWord.includes(letter)) {
        for (let i = 0; i < chosenWord.length; i++) {
          if (chosenWord[i] === letter) {
            displayWord[i] = letter;
          }
        }
        document.getElementById("word").innerText = displayWord.join(" ");
        if (!displayWord.includes("_")) {
          document.getElementById("status").innerText = "🎉 You Won!";
          disableAllButtons();
        }
      } else {
        wrongGuesses++;
        chances--;
        document.getElementById("hangman-img").src = hangmanStages[wrongGuesses];
        document.getElementById("status").innerText = "Chances left: " + chances;
        if (chances === 0) {
          document.getElementById("status").innerText = "😢 Game Over! Word was: " + chosenWord;
          disableAllButtons();
        }
      }
    }

    function disableAllButtons() {
      document.querySelectorAll("#keyboard button").forEach(btn => btn.disabled = true);
    }

    startGame();
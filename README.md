visit link:https://pranjal2611.github.io/Hangman-Game/

🎮 Hangman Game

A simple and interactive Hangman Game built using HTML, CSS, and JavaScript.
Guess the correct word letter by letter before your chances run out!

🚀 Features

🎯 Random word selection every game
⌨️ On-screen keyboard (A–Z buttons)
❤️ Limited chances (6 attempts)
🖼️ Dynamic hangman image progression
🔄 Restart game anytime
🎉 Win / 😢 Lose status display
🎨 Clean and responsive UI


🛠️ Tech Stack

HTML – Structure of the game
CSS – Styling and layout
JavaScript – Game logic and interactivity


🎮 How to Play

The game randomly selects a word.
Click on letters from the keyboard.
If the letter is correct → it fills in the blanks.
If wrong → you lose a chance and the hangman updates.
Win by guessing the word before chances reach 0.
Lose if all chances are exhausted.


🧠 Game Logic Overview

Words are stored in an array
A random word is selected at the start
Letters are matched using includes()
Display updates dynamically using DOM manipulation
Game ends when:
  All letters are guessed ✅
  Chances reach zero ❌

var startButton = document.querySelector(".start-btn");
var qi = 0;
var timerEl = document.getElementById("countdown");
var questions = [
  {
    text: "In the TV sitcom Seinfeld, what is Kramer’s first name?",
    choices: ["Kessler", "Newman", "Cosmo", "Larry"],
    answer: "2",
  },
  {
    text: "Who sang the title song for the latest Bond film, No Time to Die?",
    choices: ["Adele", "Billie Elish", "Sam Smith", "Eminem"],
    answer: "1",
  },
  {
    text: "Which Game of Thrones character is known as the Young Wolf?",
    choices: ["Robb Stark", "Arya Stark", "Gandolf", "Sansa Stark"],
    answer: "0",
  },
  {
    text: "Which one of these characters is not friends with Harry Potter?",
    choices: [
      "Ron Weasley",
      "Neville Longbottom",
      "Draco Malfoy",
      "Hermione Granger",
    ],
    answer: "2",
  },
  {
    text: "In Pirates of the Caribbean, what was Captain Jack Sparrow’s ship’s name?",
    choices: [
      "The Marauder",
      "The Black Pearl",
      "The Black Python",
      "The Slytherin",
    ],
    answer: "1",
  },
];
function startGame() {
  document.getElementById("question-container").removeAttribute("class");
  startButton.classList.add("hide");
  setQuestion();
}
startButton.addEventListener("click", startGame);

function setQuestion() {
  var questionText = document.getElementById("question");
  questionText.textContent = questions[qi].text;
  var answersBtn = document.getElementById("answer-buttons");
  answersBtn.innerHTML = "";
  questions[qi].choices.forEach(function (choice) {
    var btn = document.createElement("button");
    btn.textContent = choice;
    btn.setAttribute("value", choice);
    btn.onclick = evaluateAnswer;
    answersBtn.appendChild(btn);
  });
}

function evaluateAnswer() {
  console.log(this.value);

  if (this.value !== questions[qi].answer) {
    console.log("wrong");
  } else {
    console.log("right");
  }
  qi++;
  if (qi === questions.length) {
    console.log("end game");
  } else {
    setQuestion();
  }
}

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();

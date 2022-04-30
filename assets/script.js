var startButton = document.querySelector(".start-btn");
var qi = 0;
var questions = [
  {
    text: "Question 1",
    choices: ["1", "2", "3", "4"],
    answer: "1",
  },
  {
    text: "Question 2",
    choices: ["1", "2", "3", "4"],
    answer: "1",
  },
  {
    text: "Question 3",
    choices: ["1", "2", "3", "4"],
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

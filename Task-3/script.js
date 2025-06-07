// === Quiz Functionality ===
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-style", "text-size"],
    answer: "font-size"
  },
  {
    question: "Which method is used to add an element in JavaScript?",
    options: ["appendChild()", "addChild()", "addElement()"],
    answer: "appendChild()"
  }
];

let currentQuizIndex = 0;

function loadQuiz() {
  const q = quizQuestions[currentQuizIndex];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("quizResult").textContent = "";
}

function checkAnswer(selected) {
  const correct = quizQuestions[currentQuizIndex].answer;
  const result = document.getElementById("quizResult");

  if (selected === correct) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = `❌ Incorrect! Correct answer: ${correct}`;
    result.style.color = "crimson";
  }
}

function nextQuestion() {
  currentQuizIndex = (currentQuizIndex + 1) % quizQuestions.length;
  loadQuiz();
}

loadQuiz(); // Initialize quiz

// === API Fetch Functionality ===
function fetchJoke() {
  const jokeText = document.getElementById("jokeText");
  jokeText.textContent = "Fetching joke...";

  fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => {
      jokeText.textContent = "😂 " + data.value;
    })
    .catch(() => {
      jokeText.textContent = "❌ Failed to load joke.";
    });
}

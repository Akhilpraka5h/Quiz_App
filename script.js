// Array of question objects, each with a question and an array of answers
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Text Main Language", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to change the background color?",
    answers: [
      { text: "color", correct: false },
      { text: "bgcolor", correct: false },
      { text: "background-color", correct: true },
      { text: "background", correct: false },
    ],
  },

  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: [
      { text: "class", correct: false },
      { text: "styles", correct: false },
      { text: "style", correct: true },
      { text: "font", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the correct way to create a function in JavaScript?",
    answers: [
      { text: "function = myFunction()", correct: false },
      { text: "function:myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
      { text: "createFunction myFunction()", correct: false },
    ],
  },
 
  {
    question:
      "Which JavaScript event occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onmouseover", correct: false },
      { text: "onchange", correct: false },
      { text: "onclick", correct: true },
      { text: "onmouseclick", correct: false },
    ],
  },
  {
    question: "Which property is used to change the font of an element in CSS?",
    answers: [
      { text: "font-style", correct: false },
      { text: "font-weight", correct: false },
      { text: "font-family", correct: true },
      { text: "font-type", correct: false },
    ],
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: [
      { text: "var carName;", correct: true },
      { text: "variable carName;", correct: false },
      { text: "v carName;", correct: false },
      { text: "carName var;", correct: false },
    ],
  },
];

// References to HTML elements for questions, answer buttons, and the next button
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

// Variables to track the current question index and the user's score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  // Reset the current question index and score
  currentQuestionIndex = 0;
  score = 0;
  // Set the next button text
  nextButton.innerHTML = "Next";
  // Show the first question
  showQuestion();
}

// Function to display the current question and its answers
function showQuestion() {
  // Reset the state to prepare for a new question
  resetState();
  // Get the current question
  let currentQuestion = questions[currentQuestionIndex];
  // Display the question number and text
  let questionno = currentQuestionIndex + 1;
  questionElement.innerHTML = questionno + "." + currentQuestion.question;

  // Create a button for each answer and add it to the answer buttons container
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    // Store whether the answer is correct in the button's dataset
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    // Add an event listener for when the button is clicked
    button.addEventListener("click", selectAnswer);
  });
}

// Function to reset the state for a new question
function resetState() {
  // Hide the next button
  nextButton.style.display = "none";
  // Remove all answer buttons
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function to handle the selection of an answer
function selectAnswer(e) {
  // Get the button that was clicked
  const selectBtn = e.target;
  // Check if the answer is correct
  const isCorrect = selectBtn.dataset.correct === "true";
  // Update the button styling and score based on whether the answer is correct
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  // Highlight the correct answer and disable all buttons
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  // Show the next button
  nextButton.style.display = "block";
}

// Function to display the user's score
function showScore() {
  // Reset the state
  resetState();
  // Display the score
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!!`;
  // Update the next button text to "Start Again"
  nextButton.innerHTML = "Start Again";
  // Show the next button
  nextButton.style.display = "block";
}

// Function to handle the next button click
function handleNextButton() {
  // Move to the next question
  currentQuestionIndex++;
  // If there are more questions, show the next question
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // Otherwise, show the score
    showScore();
  }
}

// Add an event listener for the next button
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

// Start the quiz when the page loads
startQuiz();

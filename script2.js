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

// Get references to the HTML elements for the question, answer buttons, and the next button
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

// Variables to keep track of the current question index and the user's score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  currentQuestionIndex = 0; // Reset the current question index to 0
  score = 0; // Reset the score to 0
  nextButton.innerHTML = "Next"; // Set the text of the next button to "Next"
  showQuestion(); // Display the first question
}

// Function to display the current question and its possible answers
function showQuestion() {
  resetState(); // Reset the state to prepare for the new question
  let currentQuestion = questions[currentQuestionIndex]; // Get the current question object
  let questionno = currentQuestionIndex + 1; // Calculate the question number (1-based index)
  questionElement.innerHTML = questionno + "." + currentQuestion.question; // Display the question

  // Loop through each answer in the current question
  currentQuestion.answers.forEach((answer, index) => {
    const label = document.createElement("label"); // Create a new label element
    const input = document.createElement("input"); // Create a new input element
    input.type = "radio"; // Set the input type to radio
    input.name = "answer"; // Set the input name to "answer" (to group the radio buttons)
    input.value = index; // Set the input value to the index of the answer
    input.classList.add("radio-btn"); // Add the "radio-btn" class to the input
    label.appendChild(input); // Append the input to the label
    label.appendChild(document.createTextNode(answer.text)); // Append the answer text to the label
    label.classList.add("btn"); // Add the "btn" class to the label
    answerButtons.appendChild(label); // Append the label to the answer buttons container

    // If the answer is correct, add a dataset attribute to the input
    if (answer.correct) {
      input.dataset.correct = answer.correct;
    }

    // Add an event listener to the input to show the next button when an answer is selected
    input.addEventListener("change", () => {
      nextButton.style.display = "block"; // Show the next button
    });
  });
}

// Function to reset the state for a new question
function resetState() {
  nextButton.style.display = "none"; // Hide the next button
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild); // Remove all existing answer buttons
  }
}

// Function to handle the selection of an answer
function selectAnswer() {
  const selectedRadio = document.querySelector('input[name="answer"]:checked'); // Get the selected radio button
  if (!selectedRadio) return; // If no answer is selected, return early
  const isCorrect = selectedRadio.dataset.correct === "true"; // Check if the selected answer is correct
  if (isCorrect) {
    score++; // Increment the score if the answer is correct
  }
}

// Function to display the user's score at the end of the quiz
function showScore() {
  resetState(); // Reset the state
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!!`; // Display the score
  nextButton.innerHTML = "Start Again"; // Set the next button text to "Start Again"
  nextButton.style.display = "block"; // Show the next button
}

// Function to handle the next button click
function handleNextButton() {
  selectAnswer(); // Check the selected answer
  currentQuestionIndex++; // Move to the next question
  if (currentQuestionIndex < questions.length) {
    showQuestion(); // If there are more questions, display the next question
  } else {
    showScore(); // If there are no more questions, display the score
  }
}

// Add an event listener to the next button to handle clicks
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton(); // If there are more questions, handle the next button click
  } else {
    startQuiz(); // If the quiz is over, restart the quiz
  }
});

// Start the quiz when the page loads
startQuiz();

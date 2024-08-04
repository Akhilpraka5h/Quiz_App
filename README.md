#### Quiz_App


#### Overview

The Simple Quiz App is a web-based application designed to test users' knowledge through a series of multiple-choice questions. Users can select an answer for each question and navigate through the quiz using the Next button. At the end of the quiz, the user's score is displayed.

#### Features

- **Interactive Questions:** Users can select their answers using radio buttons.
- **Score Tracking:** The app keeps track of the user's score and displays it at the end.
- **Dynamic Content:** Questions and answers are dynamically rendered based on a predefined set of questions.
- **Responsive Design:** The app is designed to be responsive and works well on various screen sizes.

#### Technologies Used

- **HTML:** Structure of the app.
- **CSS:** Styling of the app to provide a visually appealing interface.
- **JavaScript:** Functionality and logic for the quiz.

#### File Structure

- `index.html`: Contains the structure of the quiz app.
- `style.css`: Contains the styles for the quiz app.
- `script.js`: Contains the logic and functionality of the quiz app.

#### How It Works

1. **Start the Quiz:** The quiz starts automatically when the page loads.
2. **Display Questions:** Each question is displayed one at a time, with four possible answers.
3. **Select an Answer:** Users select their answer by clicking on the corresponding radio button.
4. **Next Button:** Once an answer is selected, the Next button becomes visible. Clicking it advances to the next question.
5. **Score Display:** At the end of the quiz, the user's score is displayed, and they have the option to restart the quiz.

#### Code Explanation

- **HTML:**
  - The HTML structure includes elements for displaying the question, answer buttons, and the Next button.
  
- **CSS:**
  - The CSS file provides styling for the quiz app, including layout, colors, and spacing.
  
- **JavaScript:**
  - An array of questions is defined, each containing a question and possible answers.
  - Functions are defined to start the quiz, show questions, reset the state, select answers, show the score, and handle the next button click.
  - Event listeners are used to handle user interactions, such as selecting an answer and clicking the Next button.

#### Usage

1. Open `index.html` in a web browser.
2. Read the question and select your answer by clicking on the radio button.
3. Click the Next button to proceed to the next question.
4. After answering all questions, view your score.
5. Click "Start Again" to retake the quiz.

#### Customization

- **Adding Questions:**
  - To add more questions, simply extend the `questions` array in `script.js` with additional question objects.
  
- **Styling:**
  - Modify `style.css` to change the appearance of the quiz app.

#### Future Enhancements

- **Timer:** Add a timer for each question to increase difficulty.
- **Question Randomization:** Randomize the order of questions each time the quiz is taken.
- **Feedback:** Provide feedback for each answer, explaining why it is correct or incorrect.

Enjoy using the Simple Quiz App to test your knowledge!
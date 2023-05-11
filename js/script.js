/*
*******************************************
** JavaScript Code for GAIA Website Quiz **
*******************************************
- Laura Balestrieri
- EC2111796
- Edinburgh College
- Computing: Application Development
*******************************************
*******************************************
*/

// Initialize counter and empty variables
let counter = 0
let user_correct_answer = []

// Setting up all the questions 
const QUESTIONS = [

    "Questions 1: 'What is the largest animal on Earth?' \n a) Elephant \n b) Blue Whale \n c) Giraffe",

    "Questions 2: 'What is the main cause of air pollution in cities?'  \n a) Cars \n b) Factories \n c) Forest Fires",

    "Questions 3: 'What is the main cause of water pollution in oceans?' \n a) Oil spills \n b) Plastic waste \n c) Sewage",

    "Questions 4: 'Which of these is a renewable energy resource?' \n a) Nuclear Energy \n b) Wind Energy \n c) Coal Energy",

    "Questions 5: 'What is the name of the material that can be recycled repeatedly?' \n a) Glass \n b) Plastic \n c) Paper",

    "Questions 6: 'What is the name of the small flying insect that helps pollinate plants?' \n a) Butterfly \n b) Ant \n c) Bee",

    "Questions 7: 'Which of the following action will help you save water? \n a) Having a long bath \n b) Brushing your teeth keeping the tap on \n c) Having a quick 1-minute shower",

    "Questions 8: 'What is the name of the process by which we can turn waste materials into new products?' \n a) Recycling \n b) Composting \n c) Incineration",

    "Questions 9: 'What is the name of the gas that is produced by cars and contributes to air pollution?' \n a) Nitrogen \n b) Carbon Dioxide \n c) Oxygen",

    "Questions 10: 'What is the name of the device that can help reduce the amount of energy we use to light our homes?' \n a) LED lightbulb \n b) Incandescent lightbulb \n c) Fluorescent lightbulb",

]

// Setting up the correct answers
const ANSWERS = ["b", "a", "b", "b", "c", "c", "c", "a", "b", "a"]   


// START button function
function start_quiz() {

    // Reset the counter and user answers on button click 
    counter = 0
    user_correct_answer = []
  

    // For loop, iterating through all the questions array
    for (let i = 0; i < QUESTIONS.length; i++) {

        // Assign variable to user answer
        let user_answer = prompt(QUESTIONS[i]).toLowerCase()

        // Check if the user answer is not a, b, and c, else continue
        if (user_answer !== 'a' && user_answer !== 'b' && user_answer !== 'c') {
        alert("ERROR! Please enter either a, b or c to answer the question.")
        i--
        continue
        }
      
        // Check if the user answer is correct and push it in the correct answers array
        if (user_answer === ANSWERS[i]) {
          user_correct_answer.push(i)
          alert("Correct Answer!")
        } else {
          alert("Wrong Answer!")
        }
      }

      
      // Check if the user wins or loses
      if (user_correct_answer.length >= 5) {

        // Assign the variables to HTML elements
        const NEW_TEXT = document.querySelector('.new-text')
        const IMG_RESULT = document.querySelector('.img-result')

        // Update the text in HTML
        NEW_TEXT.innerHTML = 'Congratulations, you passed! You got ' + user_correct_answer.length + '/10 correct answers.<br>Click on START to try again.'
       
        // Update the image 
        IMG_RESULT.innerHTML = '<img src="./img/earth_smiling.png" alt="an icon of a happy planet earth" aria-hidden="true">'

      } else {

        // Assign the new variables 
        const NEW_TEXT = document.querySelector('.new-text')
        const IMG_RESULT = document.querySelector('.img-result')

        // Update the text in HTML
        NEW_TEXT.innerHTML = 'Oh no! You did not pass! You got ' + user_correct_answer.length + '/10 correct answers.<br>Click on START to try again.'
        
        // Update the image 
        IMG_RESULT.innerHTML = '<img src="./img/earth_sick.png" alt="an icon of a sad planet earth" aria-hidden="true">'
      }
}
// must dynamically generate and append elements that have text in them 
//  into their respective parent elements

//have a starting page with only one button with start game written on it
//button triggers to make the question and the answer buttons appear

//feedback at the bottom of the answer buttons will change according to
//  the answer that matches a correct choice
//  regardless of what answer they give will start dynamically generating the next
//  question and set of answer buttons

//the first page will have the timer but wont begin until the start game button is pushed

//view high scores will link to a separate html page with the scores display
//then have a link to go back to start game page





var questionArray= [
    "How do you properly write HTML tags?", 
    "What is the correct syntax for an if conditional statement?", 
    "What does the querySelector do?", 
    "what is the last step in placing a newly created HTML element inside another element using javascript?"
    ]
    
    //submit-answer1 correct answers <div></div>, 
    //submit-answer5 if(conditon){statement}, 
    //submit-answer10 selects an element in the document by it's 1.class or 2.id, 
    //submit-answer15 parentElement.appendChild(childElement);, 
    
    var answerButtonArray1 = ["<div></div>", "var = div", "<divsoup>", "<ilikehtml/>"]
    var answerButtonArray2 = ["if(condition){statement}", "if(this) then(that)", "as if", "if{condition}(statement)"]
    var answerButtonArray3 = ["asks a question", "selects an element in the document by it's 1.class or 2.id", "selects a query", "provides answers"]
    var answerButtonArray4 = ["pick it up and drop it there", "meow im a cat", "parentElement. appendChild (childElement);", "childElement. appendChild (parentElement);"]
    
    var goToQuestions = document.querySelector("#text-link");
    var questionBox = document.querySelector("#quiz-question-text");
    var startGameText = document.querySelector("#start-game-text");
    var startButton = document.querySelector("#start-button-area");
    
    var answerButtons = document.querySelector("#answer-buttons-area");
    var answerButton1 = document.querySelector("#submit-answer1");
    var answerButton2 = document.querySelector("#submit-answer2");
    var answerButton3 = document.querySelector("#submit-answer3");
    var answerButton4 = document.querySelector("#submit-answer4");
    var answerButton5 = document.querySelector("#submit-answer5");
    var answerButton6 = document.querySelector("#submit-answer6");
    var answerButton7 = document.querySelector("#submit-answer7");
    var answerButton8 = document.querySelector("#submit-answer8");
    var answerButton9 = document.querySelector("#submit-answer9");
    var answerButton10 = document.querySelector("#submit-answer10");
    var answerButton11 = document.querySelector("#submit-answer11");
    var answerButton12 = document.querySelector("#submit-answer12");
    var answerButton13 = document.querySelector("#submit-answer13");
    var answerButton14 = document.querySelector("#submit-answer14");
    var answerButton15 = document.querySelector("#submit-answer15");
    var answerButton16 = document.querySelector("#submit-answer16");
    
    var userScore = 0;
    var counter = 0; 
    
    
    var startpageAnswerInvisibleToVisible = document.querySelector(".answer-button")
    
    var feedbackContainer = document.querySelector("#feedback-text-container");
    feedbackContainer.setAttribute("style", "display: none;");
       
    
    
    function createQuestions(){
        
        startGameText.setAttribute("style", "display: none;");
        var questionText = document.createElement("div");
        questionText.className = "quiz-question-test";
        questionText.textContent = questionArray[0];
        questionBox.appendChild(questionText);    
    
    }
    
    function createAnswerButtonsPage1(){
        //remove start button
        startButton.setAttribute("style", "display: none;");
    
        //make answer buttons appear
        startpageAnswerInvisibleToVisible.setAttribute("style", "display: block;");
        
        answerButtons.setAttribute("style", "display: flex;");
        answerButtons.setAttribute("style", "visibility: visible;");
    
        
        //make the containers appear
        answerButton1.setAttribute("style", "display: block;");
        answerButton2.setAttribute("style", "display: block;");
        answerButton3.setAttribute("style", "display: block;");
        answerButton4.setAttribute("style", "display: block;");
    
    
        
        //target the div that im writing to
        
        var answerButton1Div = document.querySelector("#answer-button-text1")
        var answerButton2Div = document.querySelector("#answer-button-text2")
        var answerButton3Div = document.querySelector("#answer-button-text3")
        var answerButton4Div = document.querySelector("#answer-button-text4")
    
    
    
        //writing the text to the div 
        answerButton1Div.textContent = answerButtonArray1[0];
        answerButton2Div.textContent = answerButtonArray1[1];
        answerButton3Div.textContent = answerButtonArray1[2];
        answerButton4Div.textContent = answerButtonArray1[3];
    
        
    }
    
    function createAnswerButtonsPage2(){
        //this will handle once one of the answers is clicked all the question buttons will
        
        //hide the old buttons from the old function
        answerButton1.setAttribute("style", "display: none;");
        answerButton2.setAttribute("style", "display: none;");
        answerButton3.setAttribute("style", "display: none;");
        answerButton4.setAttribute("style", "display: none;");
        //display the new buttons for the next function
        answerButton5.setAttribute("style", "display: block;");
        answerButton6.setAttribute("style", "display: block;");
        answerButton7.setAttribute("style", "display: block;");
        answerButton8.setAttribute("style", "display: block;");
    
    
        //query which elements we are writing to by their id
        var answerButton1Div = document.querySelector("#answer-button-text5")
        var answerButton2Div = document.querySelector("#answer-button-text6")
        var answerButton3Div = document.querySelector("#answer-button-text7")
        var answerButton4Div = document.querySelector("#answer-button-text8")
        
        var questionText = document.querySelector("#quiz-question-text");
        
    
        //write the new values in
        answerButton1Div.textContent = answerButtonArray2[0];
        answerButton2Div.textContent = answerButtonArray2[1];
        answerButton3Div.textContent = answerButtonArray2[2];
        answerButton4Div.textContent = answerButtonArray2[3];
        
        //update the question for page 2
        questionText.textContent = questionArray[1];
    
        
    }
    
    function createAnswerButtonsPage3(){
    
        //hide the old buttons from the old function
        answerButton5.setAttribute("style", "display: none;");
        answerButton6.setAttribute("style", "display: none;");
        answerButton7.setAttribute("style", "display: none;");
        answerButton8.setAttribute("style", "display: none;");
        //display the new buttons for the next function
        answerButton9.setAttribute("style", "display: block;");
        answerButton10.setAttribute("style", "display: block;");
        answerButton11.setAttribute("style", "display: block;");
        answerButton12.setAttribute("style", "display: block;");
    
    
        //query which elements we are writing to by their id
        var answerButton1Div = document.querySelector("#answer-button-text9")
        var answerButton2Div = document.querySelector("#answer-button-text10")
        var answerButton3Div = document.querySelector("#answer-button-text11")
        var answerButton4Div = document.querySelector("#answer-button-text12")
        
        var questionText = document.querySelector("#quiz-question-text");
        
    
        //write the new values in
        answerButton1Div.textContent = answerButtonArray3[0];
        answerButton2Div.textContent = answerButtonArray3[1];
        answerButton3Div.textContent = answerButtonArray3[2];
        answerButton4Div.textContent = answerButtonArray3[3];
        
        //update the question for page 3
        questionText.textContent = questionArray[2];
    
    }
    
    function createAnswerButtonsPage4(){
    
        //hide the old buttons from the old function
        answerButton9.setAttribute("style", "display: none;");
        answerButton10.setAttribute("style", "display: none;");
        answerButton11.setAttribute("style", "display: none;");
        answerButton12.setAttribute("style", "display: none;");
        //display the new buttons for the next function
        answerButton13.setAttribute("style", "display: block;");
        answerButton14.setAttribute("style", "display: block;");
        answerButton15.setAttribute("style", "display: block;");
        answerButton16.setAttribute("style", "display: block;");
    
    
        //query which elements we are writing to by their id
        var answerButton1Div = document.querySelector("#answer-button-text13")
        var answerButton2Div = document.querySelector("#answer-button-text14")
        var answerButton3Div = document.querySelector("#answer-button-text15")
        var answerButton4Div = document.querySelector("#answer-button-text16")
        
        var questionText = document.querySelector("#quiz-question-text");
        
    
        //write the new values in
        answerButton1Div.textContent = answerButtonArray4[0];
        answerButton2Div.textContent = answerButtonArray4[1];
        answerButton3Div.textContent = answerButtonArray4[2];
        answerButton4Div.textContent = answerButtonArray4[3];
        
        //update the question for page 2
        questionText.textContent = questionArray[3];
    
    }
    
    
    function highScoreHandler(){
        
        var delayInMilliseconds = 1000; //1 second delay
        
        setTimeout(function() {
            window.confirm("lets continue with the high scores!");
            console.log("test high score delay");
            //wait to do this stuff after the page is loaded
            
            //highscorehandler function code here
            var highScoreList = document.querySelector("#list-container")
            var highScoreContainer = document.createElement("li");
            highScoreContainer.className = "high-score-text";
            var highScoreName = document.createElement("div");
            highScoreName.className = "score-name";
            var highScoreNumber = document.createElement("div");
            highScoreNumber.className = "score-number";
            
            highScoreName.textContent = window.prompt("Type your name to store into the Scoreboard!");
            highScoreNumber.textContent = userScore;
            
            localStorage.setItem("highScoreName", highScoreName.textContent);
            localStorage.setItem("highScoreNumber", highScoreNumber.textContent);
            
            var getHighScoreName = localStorage.getItem("highScoreName")
            var getHighScoreNumber = localStorage.getItem("highScoreNumber")
            if (!highScoreName || !highScoreNumber) return
            
            highScoreList.appendChild(highScoreContainer);
            highScoreContainer.appendChild(highScoreName);
            highScoreContainer.appendChild(highScoreNumber);
        
            highScoreName.textContent = getHighScoreName;
            highScoreNumber.textContent = getHighScoreNumber;
        }, delayInMilliseconds);
        
    }
    
    
    function endGame(){
        //delay endgame so that score can be saved
        var delayInMilliseconds = 1000; //1 second
        
        setTimeout(function() {
          window.alert("game over!!");
            console.log("test endGame delay");
            window.alert("Click View Highscores at the top to see how you did!")
    
        }, delayInMilliseconds);
        
    }
    
    function timer(){
        var timerNumber = document.querySelector("#timer-text");
        var counter = 75;
        timerNumber.textContent = counter;
        
            function countdown(){
                console.log(counter);
                counter--;
                timerNumber.textContent = counter;
            if(counter === 0){
                console.log("Game Over!!");
                clearInterval(startCountdown);
                endGame();
            }
        }
    var startCountdown = setInterval(countdown, 1000)
    }
    
    
    function incrementScore(){
        userScore += 30;
        console.log("Player increased score to: " + userScore);
        localStorage.setItem("userScore", userScore);
    
        //display the right answer message
    
        var feedbackContainer = document.querySelector("#feedback-text-container");
        feedbackContainer.setAttribute("style", "display: block;");
        feedbackContainer.setAttribute("style", "color: blue;");
        feedbackContainer.textContent = "Right answer!!"
    
        
    
    }
    
    function decrementScoreAndTime(){
        userScore -= 50;
        counter -= 20;//hmmmm not sure how this is done yet
        console.log("Player lost points and time: " + userScore);
        localStorage.setItem("userScore", userScore);
    
        //display the wrong answer message
        var feedbackContainer = document.querySelector("#feedback-text-container");
        feedbackContainer.setAttribute("style", "display: block;");
        feedbackContainer.setAttribute("style", "color: red;");
        feedbackContainer.textContent = "Wrong answer!!"
    }
    
    //create questions, answers and start timer
    goToQuestions.addEventListener("click", createQuestions);
    goToQuestions.addEventListener("click", createAnswerButtonsPage1);
    goToQuestions.addEventListener("click", timer);
    
    //go to page 2 handle adding points, subtracting points and subtracting time
    answerButton1.addEventListener("click", createAnswerButtonsPage2);
    //add event listener only for answerButton1 to increment 
    answerButton1.addEventListener("click", incrementScore);
    //add event listener only for answerButtons 2,3,4 to decrement score and time
    answerButton2.addEventListener("click", createAnswerButtonsPage2);
    answerButton2.addEventListener("click", decrementScoreAndTime); 
    answerButton3.addEventListener("click", createAnswerButtonsPage2); 
    answerButton3.addEventListener("click", decrementScoreAndTime);
    answerButton4.addEventListener("click", createAnswerButtonsPage2);
    answerButton4.addEventListener("click", decrementScoreAndTime);
    
    //go to page 3
    answerButton5.addEventListener("click", createAnswerButtonsPage3);
    //add event listener to increment score when Button5 is clicked
    answerButton5.addEventListener("click", incrementScore);
    //decrement score for buttons 6,7,8
    answerButton6.addEventListener("click", createAnswerButtonsPage3);
    answerButton6.addEventListener("click", decrementScoreAndTime);
    answerButton7.addEventListener("click", createAnswerButtonsPage3);
    answerButton7.addEventListener("click", decrementScoreAndTime);
    answerButton8.addEventListener("click", createAnswerButtonsPage3);
    answerButton8.addEventListener("click", decrementScoreAndTime);
    
    //go to page 4
    //decrement score for buttons 9,11,12
    answerButton9.addEventListener("click", createAnswerButtonsPage4);
    answerButton9.addEventListener("click", decrementScoreAndTime);
    //increment score on button10
    answerButton10.addEventListener("click", incrementScore);
    answerButton10.addEventListener("click", createAnswerButtonsPage4);
    answerButton11.addEventListener("click", createAnswerButtonsPage4);
    answerButton11.addEventListener("click", decrementScoreAndTime);
    answerButton12.addEventListener("click", createAnswerButtonsPage4);
    answerButton12.addEventListener("click", decrementScoreAndTime);
    
    //go to high scores
    answerButton13.addEventListener("click", decrementScoreAndTime);
    answerButton13.addEventListener("click", endGame);
    answerButton14.addEventListener("click", decrementScoreAndTime);
    answerButton14.addEventListener("click", endGame);
    //increment score on button15
    answerButton15.addEventListener("click", incrementScore);
    answerButton15.addEventListener("click", endGame);
    //decrement the others
    answerButton16.addEventListener("click", decrementScoreAndTime);
    answerButton16.addEventListener("click", endGame);
    
    console.dir(document);
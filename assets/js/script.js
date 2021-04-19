// getting all requried elements
var startBtn = document.querySelector(".start-btn button");
var infoBox = document.querySelector(".info-box");
var exitBtn = infoBox.querySelector(".buttons .quit");
var continueBtn = infoBox.querySelector(".buttons .restart");
var quizBox = document.querySelector(".quiz-box");

// If Start Quiz Button is Clicked
startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo"); // shows info box
}

// If Exit Quiz Button is Clicked
exitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); // hides info box
}

// If Continue Button is Clicked
continueBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); // hides info box
    quizBox.classList.add("activeQuiz"); // shows Quiz Box
}
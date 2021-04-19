// getting all requried elements
const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");


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
    showQuestions(0);
    queCounter(1);
}

let que_count = 0;
let que_numb = 1;
const nextBtn = quizBox.querySelector(".next-btn");

// If Next Button is clicked
nextBtn.onclick = ()=>{
    if(que_count < questions.length -1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    } else {
        console.log("Questions Completed");
    }
    
}

// receiving qeustions and options from array
function showQuestions(index) {
    const questionText = document.querySelector(".que-text");
    const optionList = document.querySelector(".option-list");
    let questionTag = '<span>' + questions[index].numb + ". " + questions[index].question +'</span>';
    let optionTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    questionText.innerHTML = questionTag;
    optionList.innerHTML = optionTag;
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
        
    }
}

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    if(userAns ==  correctAns) {
        answer.classList.add("correct");
        console.log("Answer is correct");
    } else {
        answer.classList.add("incorrect");
        console.log("wrong");
    }
    
}




function queCounter(index){
    const bottomQuestionCounter = quizBox.querySelector(".total-que");
    let totalQuesCountTag = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>Questions</span>'
    bottomQuestionCounter.innerHTML = totalQuesCountTag;
}
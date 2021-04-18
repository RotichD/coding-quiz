// getting all requried elements
var startBtn = document.querySelector(".start-btn button");
var infoBox = document.querySelector(".info-box");
var exitBtn = infoBox.querySelector(".buttons .quit");
var continueBtn = document.querySelector(".buttons .restart");

// If Start Quiz Button is Clicked
startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo"); // shows info box
}

// If Exit Quiz Button is Clicked
exitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); // hides info box
}
var currentQuestion = 0;
var score = 0;
var TotalQuestions = questions.length;

var continer = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '.' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption) {
        alert('Select Answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {
        score += 5;
    }
    
    selectedOption.checkec = false;
    currentQuestion++;
    if(currentQuestion == TotalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

    if(currentQuestion == TotalQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Score:' + score;
        return;

    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);



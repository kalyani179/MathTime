new Audio("start-the-quiz.mp3").play();

$(".rules").addClass("invisible");
$(".questions").addClass("invisible");
$(".score").addClass("invisible");

$(".rules-btn").click(function() {
    new Audio("rules.mp3").play();
    $(".welcome").addClass('invisible');
    $(".rules").removeClass("invisible");
})

var questionNumber = 1;
var totalScore = 0;
var score = 0;
var lastScore = 0;
var answer;

$(".start-button").click(function() {
    new Audio("start-quiz.mp3").play();
    $(".rules").addClass('invisible');
    $(".questions").removeClass("invisible");
    timer();
    questionGenerator();
})

$(".next").click(function() {
    new Audio("question.mp3").play();
    questionGenerator();
});

for (var i = 1; i < 5; i++) {
    $("#option" + i).click(function() {
        new Audio("option.mp3").play();
        if (this.innerHTML == answer) {
            score++;
        }
    })
}

function timer() {
    var timeCount = 60;
    action = setInterval(function() {
        $(".timer").show(timeCount);
        timeCount--;
        if (timeCount <= 9) {
            $(".timer").html("00:0" + String(timeCount));
        } else {
            $(".timer").html("00:" + String(timeCount));
        }
        if (timeCount == 0) {
            new Audio("submit-button.mp3").play();
            $(".questions").addClass("invisible");
            $(".score").removeClass("invisible");
        }
    }, 1000);
}


function questionGenerator() {
    var num1 = String(Math.floor(Math.random() * 100) + 1);
    var num2 = String(Math.floor(Math.random() * 100) + 1);
    var operators = ['+', '-', '*', '%'];
    var operator = operators[Math.floor(Math.random() * 4)];
    var expression = num1 + " " + operator + " " + num2;
    $(".question").html(String(questionNumber) + ") " + expression);
    answer = eval(expression);
    var answerArray = ['1', '2', '3', '4']
    var answerOption = String(Math.ceil(Math.random() * 4));
    $("#option" + answerOption).html(answer);
    var before = answerArray.slice(0, answerOption - 1);
    var after = answerArray.slice(answerOption);
    var arrayWithoutAnswer = before.concat(after);
    $("#option" + arrayWithoutAnswer[0]).html(answer + 7);
    $("#option" + arrayWithoutAnswer[1]).html(answer + 11);
    $("#option" + arrayWithoutAnswer[2]).html(answer + 5)
    if (questionNumber > 10) {
        new Audio("submit-button.mp3").play();
        viewScore();
        $(".questions").addClass("invisible");
        $(".score").removeClass("invisible");
    }
    questionNumber++;
}


$(".next").click(function() {
    $('.totalScore').html(score);
});


$(".submit").click(function() {
    new Audio("submit-button.mp3").play();
    $(".questions").addClass("invisible");
    $('.totalScore').html(score);
    viewScore();
    $(".score").removeClass("invisible");
})

$(".start-again").click(function() {
    location.reload();
})

function viewScore() {
    if (score <= 5) {
        $("circle").css("stroke", "red");
    } else if (score < 8) {
        $("circle").css("stroke", "orange");
    } else {
        $("circle").css("stroke", "green");
    }
}
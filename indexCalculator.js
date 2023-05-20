new Audio("start3.mp3").play();
new Audio("buttons.mp3").play();

$('.btn').click(function() {
    // new Audio("sounds/click.mp3").play();
    new Audio("button-click.mp3").play();
    // new Audio("sounds/buttons.mp3").play();
})
var expression = "";
for (var i = 0; i < $('button').length; i++) {
    $('button')[i].addEventListener('click', function() {
        if (this.innerHTML == "=") {
            new Audio("equals.mp3").play();
            expression = eval(expression);
            $("input").val(expression);
        } else if (this.innerHTML == "AC") {
            new Audio("ac.mp3").play();
            expression = "";
            $("input").val(expression);
        } else if (this.innerHTML == "C") {
            new Audio("AC1.mp3").play();
            expression = expression.slice(0, -1);
            $("input").val(expression);
        } else {
            expression = expression + this.innerHTML;
            $("input").val(expression);
        }
    });
}
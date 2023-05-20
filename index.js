var color = ["#d66d75,#e29587", "#cc2b5e, #753a88", "#bdc3c7,#2c3e50", "#42275a,#734b6d", "#ffd89b ,#19547b", "#000428, #004e92", "#7b4397,#dc2430", "#2b5876, #4e4376", "#aa076b , #61045f", "#141e30, #243b55"]
var i = 0;

var typed = new Typed(".auto-type", {
    strings: ['MathTime'],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true,
    loopCount: color.length,
    showCursor: false,
    onStringTyped: function() {
        new Audio("transition.mp3").play();
        // new Audio("fast.mp3").play();
        i = 0 < color.length ? ++i : 0;
        $("body").css("background-image", 'linear-gradient( to right,' + color[i] + ")");
        $('span').css("color", "#FFEA20");
    },

});
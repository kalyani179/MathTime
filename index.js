var color = ["#d66d75,#e29587", "#bdc3c7,#2c3e50", "#42275a,#734b6d", "#ffd89b ,#19547b", "#000428, #004e92", "#7b4397,#dc2430", "#2b5876, #4e4376", "#aa076b , #61045f", "#141e30, #243b55", "#cc2b5e, #753a88"]
var i = 0;
var textColor = ["#FFEA20", "#ECF9FF", "#B799FF", "#FDF7C3", "#98c1d9", "#FFABAB", "#98c1d9", "#e0fbfc", "#ab00ff", "#F765A3", "#FFA4B6"]
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
        $('span').css("color", textColor[i]);
    },

});
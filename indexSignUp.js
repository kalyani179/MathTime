$(".popup").addClass('invisible');
$(".sign-up-btn").click(function() {
    $("body").css("background-color", "#fffafa")
    $(".popup").css("background-color", "aliceblue")
    $(".popup").removeClass('invisible');
    $("main").addClass("invisible");
})
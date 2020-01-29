$(document).ready(function(){
    $(".box").click(function(){
        $("#animated-box").fadeOut();
        $("#box-text").fadeOut();
        $(".code-box").delay(600).fadeIn();
    });
});

$(document).ready(function(){
    $("#box-header").click(function(){
        $("#animated-box").fadeIn();
        $(".code-box").fadeOut();
    });
});



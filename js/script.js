
// function to fadeout the floating box on click and fade in the code box
$(document).ready(function(){
    $(".box").click(function(){
        $("#animated-box").fadeToggle();
        $("#box-text").fadeToggle();
        $("#css-box").delay(600).fadeToggle();
    });
});

//function to let the user go back to the floating box if the arrow is pressed
$(document).ready(function(){
    $(".back-arrow").click(function(){
        $("#animated-box").fadeIn("slow");
        $("#box-text").fadeIn();  
        $("#css-box").fadeOut(); 
        $("#html-box").fadeOut(); 
        $("#js-box").fadeOut(); 
    });
});

function toggleHtml() {
    let cssBox = document.getElementById("css-box")
    let htmlBox = document.getElementById("html-box");
    let jsBox = document.getElementById("js-box");

    if (htmlBox.style.display = "none") {
        htmlBox.style.display = "block";
        cssBox.style.display = "none";
        jsBox.style.display = "none";
    } 
}

function toggleCss() {
    let cssBox = document.getElementById("css-box")
    let htmlBox = document.getElementById("html-box");
    let jsBox = document.getElementById("js-box");

    if (cssBox.style.display = "none") {
        htmlBox.style.display = "none";
        cssBox.style.display = "block";
        jsBox.style.display = "none";
    } 
}

function toggleJs() {
    let cssBox = document.getElementById("css-box")
    let htmlBox = document.getElementById("html-box");
    let jsBox = document.getElementById("js-box");

    if (jsBox.style.display = "none") {
        htmlBox.style.display = "none";
        cssBox.style.display = "none";
        jsBox.style.display = "block";
    } 
}

//Enlarge the code example box
function enlargeBox() {
    let button = document.getElementsByClassName ("enlarge-button");
    let title = document.getElementById("skills-title");
    let content = document.getElementById("skills-text");
    let box = document.getElementsByClassName("code-box");

    content.style.display = "none";
    title.style.display = "none";
}



 
//fade animated box in when page loads
let box = document.querySelector("#animated-box");

function loadBox() {
    box.style.opacity = "1";
}


//Navbar social dropdown menu
let arrowLeft         = document.querySelector(".arrow-left");
let arrowRight        = document.querySelector(".arrow-right");
let navSocial         = document.querySelector("#nav-social");
let navSocialDropDown = document.querySelector("#nav-social-dropdown");
let list1             = document.querySelector("#list1");
let list2             = document.querySelector("#list2");
let list3             = document.querySelector("#list3");
let list4             = document.querySelector("#list4");
let withMe            = document.querySelector("#social-with-me")

function makeVisible(){
    navSocialDropDown.style.transitionDelay = "0s";
    navSocialDropDown.style.opacity = "1";
    navSocialDropDown.style.visibility = "visible";
    list1.style.opacity = "1";
    list1.style.transform = "translateY(0)";
    list2.style.opacity = "1";
    list2.style.transform = "translateY(0)";
    list3.style.opacity = "1";
    list3.style.transform = "translateY(0)";
    list4.style.opacity = "1";
    list4.style.transform = "translateY(0)";
}

function hideSocialMenu(){
    navSocialDropDown.style.transitionDelay = ".3s";
    navSocialDropDown.style.opacity = "0";
    navSocialDropDown.style.visibility = "hidden";
    list1.style.opacity = "0";
    list1.style.transform = "translateY(-5px)";
    list2.style.opacity = "0";
    list2.style.transform = "translateY(-50px)";
    list3.style.opacity = "0";
    list3.style.transform = "translateY(-50px)";
    list4.style.opacity = "0";
    list4.style.transform = "translateY(-50px)";
}

function invertArrows() {
    withMe.style.opacity = "0";
    withMe.style.transition = "all .2s ease";
    withMe.style.transitionDelay = ".4s";
    arrowLeft.style.transform = "rotate(-150deg)";
    arrowLeft.style.background = "#55FFEB";
    arrowLeft.style.animation = "moveLeft .7s"
    arrowLeft.style.animationDelay = ".4s"
    arrowLeft.style.animationFillMode = "forwards"
    arrowRight.style.animation = "moveLeft .7s"
    arrowRight.style.animationDelay = ".4s"
    arrowRight.style.animationFillMode = "forwards"
    arrowRight.style.transform = "rotate(150deg)";
    arrowRight.style.background = "#55FFEB";
}

function invertBack() {
    withMe.style.opacity = "1";
    withMe.style.transitionDelay = ".6s";
    arrowLeft.style.transform = "rotate(-90deg)";
    arrowLeft.style.background = "rgb(112, 112, 112)";
    arrowRight.style.transform = "rotate(90deg)";
    arrowRight.style.background = "rgb(112, 112, 112)";
}

function moveArrowsBack() {
    arrowLeft.style.animation = "moveBack 1s ease";
    arrowRight.style.animation = "moveBack 1s ease";
    arrowRight.style.animationFillMode = "forwards";
    arrowLeft.style.animationFillMode = "forwards";
}

navSocial.addEventListener("mouseover", () => {
    invertArrows();
    makeVisible();
});

navSocial.addEventListener("mouseleave", () => {
    invertBack();
    hideSocialMenu();
});

navSocial.addEventListener("mouseleave", () => {
    moveArrowsBack();
} ) 



// JQUERY
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








 
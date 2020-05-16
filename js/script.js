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


//Work page sliding element

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let scrollLeft = document.querySelector("#arrow-back");
let scrollRight = document.querySelector("#arrow-forward");
let workDisplay = document.querySelector("#work-display");
let workTitle = document.querySelector("#work-title");
let arrowContainer = document.querySelector("#arrows-container");

scrollLeft.addEventListener("click", shiftLeft);
scrollRight.addEventListener("click", shiftRight);

window.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
  shiftLeft();
 }
 else if (event.deltaY > 0)
 {
  shiftRight();
 }
});

function loadWork() {
    workDisplay.style.opacity = "1";
    workDisplay.style.transform = "translateY(0)";
    workTitle.style.transform = "translateY(0)";
    workTitle.style.opacity = "1";
    arrowContainer.style.opacity = "1";
}

function shiftLeft () {
    if (img1.classList.contains("pos1")) {
        img1.classList.add("pos6");
        img1.classList.remove("pos1");
        img2.classList.add("pos1");
        img2.classList.remove("pos2");
        img3.classList.add("pos2");
        img3.classList.remove("pos3");
        img4.classList.add("pos3");
        img4.classList.remove("pos4");
        img5.classList.add("pos4");
        img5.classList.remove("pos5");
        img6.classList.add("pos5");
        img6.classList.remove("pos6");
    }  

    else if (img1.classList.contains("pos6")) {
        img1.classList.add("pos5");
        img1.classList.remove("pos6");
        img2.classList.add("pos6");
        img2.classList.remove("pos1");
        img3.classList.add("pos1");
        img3.classList.remove("pos2");
        img4.classList.add("pos2");
        img4.classList.remove("pos3");
        img5.classList.add("pos3");
        img5.classList.remove("pos4");
        img6.classList.add("pos4");
        img6.classList.remove("pos5");
    }

    else if (img1.classList.contains("pos5")) {
        img1.classList.add("pos4")
        img1.classList.remove("pos5")
        img2.classList.add("pos5")
        img2.classList.remove("pos6")
        img3.classList.add("pos6")
        img3.classList.remove("pos1")
        img4.classList.add("pos1")
        img4.classList.remove("pos2")
        img5.classList.add("pos2")
        img5.classList.remove("pos3")
        img6.classList.add("pos3")
        img6.classList.remove("pos4")
    }

    else if (img1.classList.contains("pos4")) {
        img1.classList.add("pos3")
        img1.classList.remove("pos4")
        img2.classList.add("pos4")
        img2.classList.remove("pos5")
        img3.classList.add("pos5")
        img3.classList.remove("pos6")
        img4.classList.add("pos6")
        img4.classList.remove("pos1")
        img5.classList.add("pos1")
        img5.classList.remove("pos2")
        img6.classList.add("pos2")
        img6.classList.remove("pos3")
    }

    else if (img1.classList.contains("pos3")) {
        img1.classList.add("pos2")
        img1.classList.remove("pos3")
        img2.classList.add("pos3")
        img2.classList.remove("pos4")
        img3.classList.add("pos4")
        img3.classList.remove("pos5")
        img4.classList.add("pos5")
        img4.classList.remove("pos6")
        img5.classList.add("pos6")
        img5.classList.remove("pos1")
        img6.classList.add("pos1")
        img6.classList.remove("pos2")
    }

    else if (img1.classList.contains("pos2")) {
        img1.classList.add("pos1")
        img1.classList.remove("pos2")
        img2.classList.add("pos2")
        img2.classList.remove("pos3")
        img3.classList.add("pos3")
        img3.classList.remove("pos4")
        img4.classList.add("pos4")
        img4.classList.remove("pos5")
        img5.classList.add("pos5")
        img5.classList.remove("pos6")
        img6.classList.add("pos6")
        img6.classList.remove("pos1")
    }
}

function shiftRight () {
    if (img1.classList.contains("pos1")) {
        img1.classList.add("pos2");
        img1.classList.remove("pos1");
        img2.classList.add("pos3");
        img2.classList.remove("pos2");
        img3.classList.add("pos4");
        img3.classList.remove("pos3");
        img4.classList.add("pos5");
        img4.classList.remove("pos4");
        img5.classList.add("pos6");
        img5.classList.remove("pos5");
        img6.classList.add("pos1");
        img6.classList.remove("pos6");
    }  

    else if (img1.classList.contains("pos2")) {
        img1.classList.add("pos3");
        img1.classList.remove("pos2");
        img2.classList.add("pos4");
        img2.classList.remove("pos3");
        img3.classList.add("pos5");
        img3.classList.remove("pos4");
        img4.classList.add("pos6");
        img4.classList.remove("pos5");
        img5.classList.add("pos1");
        img5.classList.remove("pos6");
        img6.classList.add("pos2");
        img6.classList.remove("pos1");
    }

    else if (img1.classList.contains("pos3")) {
        img1.classList.add("pos4")
        img1.classList.remove("pos3")
        img2.classList.add("pos5")
        img2.classList.remove("pos4")
        img3.classList.add("pos6")
        img3.classList.remove("pos5")
        img4.classList.add("pos1")
        img4.classList.remove("pos6")
        img5.classList.add("pos2")
        img5.classList.remove("pos1")
        img6.classList.add("pos3")
        img6.classList.remove("pos2")
    }

    else if (img1.classList.contains("pos4")) {
        img1.classList.add("pos5")
        img1.classList.remove("pos4")
        img2.classList.add("pos6")
        img2.classList.remove("pos5")
        img3.classList.add("pos1")
        img3.classList.remove("pos6")
        img4.classList.add("pos2")
        img4.classList.remove("pos1")
        img5.classList.add("pos3")
        img5.classList.remove("pos2")
        img6.classList.add("pos4")
        img6.classList.remove("pos3")
    }

    else if (img1.classList.contains("pos5")) {
        img1.classList.add("pos6")
        img1.classList.remove("pos5")
        img2.classList.add("pos1")
        img2.classList.remove("pos6")
        img3.classList.add("pos2")
        img3.classList.remove("pos1")
        img4.classList.add("pos3")
        img4.classList.remove("pos2")
        img5.classList.add("pos4")
        img5.classList.remove("pos3")
        img6.classList.add("pos5")
        img6.classList.remove("pos4")
    }

    else if (img1.classList.contains("pos6")) {
        img1.classList.add("pos1")
        img1.classList.remove("pos6")
        img2.classList.add("pos2")
        img2.classList.remove("pos1")
        img3.classList.add("pos3")
        img3.classList.remove("pos2")
        img4.classList.add("pos4")
        img4.classList.remove("pos3")
        img5.classList.add("pos5")
        img5.classList.remove("pos4")
        img6.classList.add("pos6")
        img6.classList.remove("pos5")
    }
}









 
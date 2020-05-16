
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
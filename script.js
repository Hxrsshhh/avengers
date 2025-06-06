let menu = document.querySelector("#butt");
let slidebar = document.querySelector(".navv");
menu.addEventListener("click", () => {
    if (slidebar.style.visibility === "visible") {
        slidebar.style.visibility = "hidden";
    }
    else {
        slidebar.style.visibility = "visible";
    }
})
function changeTab(id, buttonId) {
    console.log("[tabs] changing tab to" + id)
    document.querySelectorAll(".tab").forEach((tab) => {
        console.log("[tabs] removing shown class")
        tab.classList.remove("shown");
    })
    document.getElementById(id).classList.add("shown");
    document.querySelectorAll(".tabButton").forEach((tab) => {
        console.log("[tabs] removing active class")
        tab.classList.remove("active");
    })
    document.getElementById(buttonId).classList.add("active");
    console.log("[tabs] setting button class")
}

function changePageName(name) {
    console.log("[tabs] changing page name to " + name)
    document.getElementById("pageName").innerHTML = name;
}

document.addEventListener("DOMContentLoaded", (event) => {
    // console.log("transitioning to tabs view")
    // document.getElementById("home").classList.remove("shown"); // seamlessly transition
    changeTab("home", "homeBtn");
});
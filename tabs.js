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
    const isDev = (window.location.href.includes('infrared-dev.bomberfish.ca') || window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1'));
    let title = (isDev ? "Infrared Dev – " : "Infrared – ") + name;
    console.log("[tabs] changing page name to " + title)
    document.getElementById("pageName").innerHTML = title
}

document.addEventListener("DOMContentLoaded", (event) => {
    changeTab("home", "homeBtn");
    changePageName('Home');
});
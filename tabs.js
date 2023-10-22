// "use strict";

/**
 * Switches application tab.
 * @param {String} id 
 * @param {String} buttonId 
 */
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

/**
 * Changes the page name.
 * @param {String} name 
 */
function changePageName(name) {
    const isDev = (window.location.href.startsWith('https://infrared-dev.bomberfish.ca') || window.location.href.startsWith('http://infrared-dev.bomberfish.ca') || window.location.href.startsWith('http://localhost') || window.location.href.startsWith('https://localhost') || window.location.href.startsWith('http://127.0.0.1') || window.location.href.startsWith('https://127.0.0.1'));
    let title = (isDev ? "Infrared Dev – " : "Infrared – ") + name;
    console.log("[tabs] changing page name to " + title)
    document.getElementById("pageName").innerHTML = title
}

document.addEventListener("DOMContentLoaded", (event) => {
    changeTab("home", "homeBtn");
    changePageName('Home');
});
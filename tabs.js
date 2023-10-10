function changeTab(id, buttonId) {
    console.log("changing tab")
    document.getElementById("currentTab").innerHTML = document.getElementById(id).innerHTML;
    document.querySelectorAll(".tabButton").forEach((tab) => {
        console.log("removing active class")
        tab.classList.remove("active");
    })
    document.getElementById(buttonId).classList.add("active");
    console.log("setting button class")
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("transitioning to tabs view")
    document.getElementById("home").classList.remove("shown"); // seamlessly transition
    changeTab("home", "homeBtn");
});
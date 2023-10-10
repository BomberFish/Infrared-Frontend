// school toilet paper-thin wrapper around localStorage.
function savePref(key, value) {
    console.log("setting " + key + " to " + value)
    localStorage.setItem(key, value);
}

function loadPref(key) {
    console.log("loading " + key)
    let value = localStorage.getItem(key);
    return value
}

function registerDefault(key, value) {
    let currentValue = loadPref(key);
    if (currentValue === null) {
        console.log("registering default " + key + " " + value)
        savePref(key, value);
    } else {
        console.log("not registering default " + key + ", already set to " + loadPref(key))
    }
}

registerDefault("searchEngine", "https://www.duckduckgo.com/?q=%s")
document.getElementById("uv-search-engine").value = loadPref("searchEngine")
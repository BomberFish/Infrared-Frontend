/**
 * @param {string} query
 * @returns {Array} Array of suggestions
 */
async function getCompletions(query) {
    try {
    const response = await fetch(`https://duckduckgo.com/ac/?q=${query}&type=list`);
    const data = await response.json();
    console.log("[suggestions] " + data)
    let suggestions = data[1]
    console.log("[suggestions] " + suggestions)
    let parsedSuggestions = Array.isArray(suggestions) ? suggestions : suggestions.split(",");
    // let jsonArray = JSON.stringify(parsedSuggestions);
    console.log("[suggestions] " + parsedSuggestions)
    return parsedSuggestions;
    } catch (e){
        console.error(e)
        return []
    }
}

document.getElementById("uv-address").addEventListener("input", async (event) => {
    const query = document.getElementById("uv-address").value

    if (query === "") {
        console.log("[suggestions] form empty")
    } else {
    getCompletions(query)
    .then((data) => {
        console.log(typeof data);
        data.forEach(element => {
            console.log(element);
        });
    })
    .catch((error) => {
        console.error(error);
    });
    }
})

getCompletions("ultraviolet")
.then((data) => {
    console.log(typeof data);
    data.forEach(element => {
        console.log(element);
    });
})
.catch((error) => {
    console.error(error);
});
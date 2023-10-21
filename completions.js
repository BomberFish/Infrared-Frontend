/**
 * @param {string} query
 * @returns {Array} Array of suggestions
 */
async function getCompletions(query) {
    try {
        console.log("[suggestions] fetching results for query " + query)
        const response = await fetch(`https://decorsify.bomberfish-industries.workers.dev/?url=https://duckduckgo.com/ac/?q=${query}&type=list`);
        const data = await response.json();
        console.log("[suggestions] response:", data)
        let parsedSuggestions = Array.isArray(data) ? data : data.split(",");
        console.log("[suggestions] array:", parsedSuggestions)

        let array = [];

        // http://stackoverflow.com/questions/8430336/ddg#8430501
        for(var i in parsedSuggestions){
            var key = i;
            var val = parsedSuggestions[i];
            for(var j in val){
                var sub_key = j;
                var sub_val = val[j];
                console.log("[suggestions] parsed element:"), sub_val
                array.push(sub_val);
            }
        }

        console.log("[suggestions] final array:", array)
        return array;
    } catch (e) {
        console.error(e)
        console.log("[suggestions] encountered an error, returning just query as suggestion")
        return [query]
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
// "use strict";

/**
 * @param {string} query
 * @returns {Array} Array of suggestions
 */
async function getCompletions(query) {
  try {
    console.log("[suggestions] fetching results for query " + query);
    const response = await fetch(
      `https://decorsify.bomberfish-industries.workers.dev/?url=https://duckduckgo.com/ac/?q=${query}&type=list`
    );
    const data = await response.json();
    console.log("[suggestions] response:", data);
    let parsedSuggestions = Array.isArray(data) ? data : data.split(",");
    console.log("[suggestions] array:", parsedSuggestions);

    let array = [];

    // http://stackoverflow.com/questions/8430336/ddg#8430501
    for (var i in parsedSuggestions) {
      var key = i;
      var val = parsedSuggestions[i];
      for (var j in val) {
        var sub_key = j;
        var sub_val = val[j];
        console.log("[suggestions] parsed element:"), sub_val;
        array.push(sub_val);
      }
    }

    console.log("[suggestions] final array:", array);
    return array;
  } catch (e) {
    console.error(e);
    console.log(
      "[suggestions] encountered an error, returning just query as suggestion"
    );
    return [query];
  }
}

/**
 * @type {HTMLInputElement}
 */
var address2 = document.getElementById("uv-address");
/**
 * @type {HTMLDivElement}
 */
const suggestions = document.getElementById("suggestions-container");

function updateSuggestions() {
  const query = address2.value;

  if (
    query.includes("www.reddit.com") ||
    (query.includes("reddit.com") && !query.includes("old.reddit.com"))
  ) {
    document.getElementById("ir-reddit-suggestion-container").style.display =
      "initial";
  } else {
    document.getElementById("ir-reddit-suggestion-container").style.display =
      "none";
  }

  if (query === "") {
    suggestions.classList.remove("shown");
    console.log("[suggestions] form empty");
    suggestions.innerHTML = "";
  } else {
    getCompletions(query).then((data) => {
      console.log(typeof data);
      suggestions.innerHTML = "";
      if (data.length === 0) {
        suggestions.classList.remove("shown");
      } else {
        data.forEach((element) => {
          suggestions.classList.add("shown");
          console.log(element);
          suggestions.innerHTML += `<button class="suggestion" onclick="document.getElementById('uv-address').focus();proxySite(search('${element}', document.getElementById('uv-search-engine').value))">${element}</button>`;
        });
      }
    });
  }
}

document
  .getElementById("ir-reddit-suggestion-container")
  .addEventListener("click", (event) => {
    let query = address2.value;
    event.preventDefault();
    if (query.includes("www.reddit.com")) {
      address2.value = address2.value.replace(
        "www.reddit.com",
        "old.reddit.com"
      );
    } else {
      address2.value = address2.value.replace("reddit.com", "old.reddit.com");
    }
    updateSuggestions();
  });

address2.addEventListener("input", async (event) => {
  event.preventDefault();
  updateSuggestions();
});

address2.addEventListener("focus", async (event) => {
  event.preventDefault();
  updateSuggestions();
});

address2.addEventListener("blur", async (event) => {
  event.preventDefault();
  updateSuggestions();
});

// getCompletions("ultraviolet")
//     .then((data) => {
//         console.log(typeof data);
//         data.forEach(element => {
//             console.log(element);
//         });
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// "use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
var address3 = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");
/**
 * @type {HTMLParagraphElement}
 */
const errorDesc = document.getElementById("uv-error-desc");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("submit event fired")
  proxySite(address3.value);
});

async function proxySite(urlToProxy) {
  console.log(urlToProxy)
  try {
    await registerSW();
  } catch (err) {
    error.textContent = "❌ Failed to register service worker.";
    errorCode.textContent = err.toString();
    errorDesc.textContent = "Please reload the page and try again."
    throw err;
  }

  const formattedURL = search(urlToProxy, searchEngine.value);
  console.log(formattedURL)
  console.log(__uv$config.bare)
  location.href = __uv$config.prefix + __uv$config.encodeUrl(formattedURL);
}

document.querySelectorAll(".quicklink > button").forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    if (button.getAttribute("origin") == null) {
      console.error("Quicklink does not have an origin attribute.")
    } else {
      proxySite(button.getAttribute("origin"));
    }
  });
});
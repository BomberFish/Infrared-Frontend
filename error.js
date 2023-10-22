// "use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
var address = document.getElementById("uv-address");
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

if (location.pathname.startsWith(__uv$config.prefix)) {
  error.textContent = "Error: The service worker is not registered.";
  registerButton.classList.add("show");
}

registerButton.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "❌ Failed to register service worker.";
    errorCode.textContent = err.toString();
    errorDesc.textContent = "Please reload the page and try again."
    registerButton.classList.remove("show");
  }
});

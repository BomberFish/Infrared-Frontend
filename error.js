// "use strict";
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");
const errorDesc = document.getElementById("uv-error-desc");
const registerButton = document.getElementById("uv-register-sw");

if (location.pathname.startsWith(__uv$config.prefix)) {
  error.textContent = "Error: The service worker is not registered.";
  registerButton.classList.add("show");
}

registerButton.addEventListener("click", async () => {
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

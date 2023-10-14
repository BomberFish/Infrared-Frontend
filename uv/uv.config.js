// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/uv/service/",
  bare: "https://backend.infrared.bomberfish.ca",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event fired");
  const serverTextBox = document.getElementById("ir-custom-server");
  const warningLabel = document.getElementById("ir-custom-server-warning");
  serverTextBox.value = self.__uv$config.bare;

  serverTextBox.addEventListener("change", () => {
    self.__uv$config.bare = serverTextBox.value;

    if (serverTextBox.value != "https://backend.infrared.bomberfish.ca") {
      warningLabel.classList.add("shown");
      console.warn("Using a custom bare server. Support will not be provided.")
    } else {
      warningLabel.classList.remove("shown");
    }
  });
});

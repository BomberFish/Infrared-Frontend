const blockedSites = ["duckduckgo.com"]

/**
* Scan a request to see if it should be blocked.
* @type {function}
* @param {Request} request
* @param {[any]} blockList
* @returns {Request|Response}
*/
function scanRequest(request, blockList) {
  console.log("[middleware] scanning" + request.url)
  if (blockList.includes(request.url)) {
    console.warn("[middleware] blocked " + request.url)
    return fetch('/blockpage.html')
      .then(response => {
        return new Response(response.body, {
          status: 403,
          statusText: "Blocked",
        });
      });
  } else {
    return request
  }
}

self.__uv$config = {
  prefix: "/ir/service/",
  bare: "https://backend.infrared.bomberfish.ca",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/ir/uv.handler.js",
  client: "/ir/uv.client.js",
  bundle: "/ir/uv.bundle.js",
  config: "/ir/uv.config.js",
  sw: "/ir/uv.sw.js",
  /**
   * Middleware function for handling requests.
   * @type {function}
   * @param {Request} request - The request object.
   * @returns {Request|Response} The modified request or a response.
   */
  middleware: (request) => {
    console.log("[middleware] executing middleware")
    return scanRequest(request, blockedSites);
  },
};

console.log(self.__uv$config)
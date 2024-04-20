chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        var headers = details.requestHeaders;
        for (var i = 0; i < headers.length; ++i) {
            if (headers[i].name === "User-Agent") {
                headers[i].value =
                    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1";
            }
        }
        return { requestHeaders: headers };
    },
    { urls: ["*://*.glide.page/*"] },
    ["blocking", "requestHeaders"]
);

chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === "User-Agent") {
                details.requestHeaders[i].value =
                    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1";
                break;
            }
        }
        return { requestHeaders: details.requestHeaders };
    },
    { urls: ["*://*.glide.page/*"] },
    ["blocking", "requestHeaders"]
);

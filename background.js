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

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "resizeWindow") {
        chrome.windows.getCurrent({}, function (currentWindow) {
            chrome.system.display.getInfo(function (displays) {
                const display =
                    displays.find(
                        (d) =>
                            d.bounds.left <= currentWindow.left &&
                            d.bounds.top <= currentWindow.top &&
                            currentWindow.left <
                                d.bounds.left + d.bounds.width &&
                            currentWindow.top < d.bounds.top + d.bounds.height
                    ) || displays[0];

                var updateInfo = {
                    left: display.workArea.left,
                    top: display.workArea.top,
                    width: 375,
                    height: display.workArea.height,
                };
                chrome.windows.update(currentWindow.id, updateInfo);
            });
        });
    }
});

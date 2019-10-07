chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: true };
  },
  { urls: ["*://*.open5.myvideo.ge/*", "*://*.open2.myvideo.ge/*"] },
  ["blocking"]
);

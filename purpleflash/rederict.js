chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var redirectUrl = chrome.extension.getURL("newtab.html");
  chrome.tabs.update(tabs[0].id, { url: redirectUrl });
});
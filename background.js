
//TODO: Handle injection on install



// Handle injection
chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("compose/post")) {
    chrome.tabs.sendMessage(tabId, {
      request: "active",
    });
  }
});






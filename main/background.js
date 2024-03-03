//TODO: Handle injection on install



// Handle injection
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  if (tab.url && changeInfo.status === 'complete' && tab.url.includes("linkedin") && tab.url.includes("feed")) {
    chrome.tabs.sendMessage(tabId, {
      request: "active",
    });
  }
});





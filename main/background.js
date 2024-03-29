
// Check for updates of the tab
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  // If the tab is fully loaded and the URL matches, send a message to the content script
  if (changeInfo.status === 'complete' && tab.url && (tab.url.includes("twitter.com/compose/post") || tab.url.includes("x.com/compose/post"))) {
    chrome.tabs.sendMessage(tabId, {
      type: "POST"
    })
  }
});



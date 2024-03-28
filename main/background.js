//TODO: Handle injection on install





/* Handle injection
chrome.action.onClicked.addListener((tab) => {
  if (tab.url && (tab.url.includes("twitter.com/compose/post") || tab.url.includes("x.com/compose/post"))) {
    chrome.tabs.sendMessage(tab.id, { request: "active" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      } else if (response && response.status === "success") {
        console.log("Message received by content script");
      }
    });
  }
});*/


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  console.log(tab.url)
  console.log(tab.url.includes("twitter.com/compose/post"))
  console.log(tab.url.includes("x.com/compose/post"))

  if (changeInfo.status === 'complete' && tab.url && (tab.url.includes("twitter.com/compose/post") || tab.url.includes("x.com/compose/post"))) {



    chrome.tabs.sendMessage(tab.id, { message: "check" }, (response) => {
      if (chrome.runtime.lastError) {
        // Content script is not there, inject it
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['jquery.js', 'content.js']
        }).then(console.log("not there, so injecting"))
        .catch((error) => console.log(`Failed to inject Script: ${error}`));
      } else {
        console.log(response.status); // Should log "Yes, I'm here"
      }
    });

  }
});

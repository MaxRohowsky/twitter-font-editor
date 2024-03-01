chrome.action.onClicked.addListener((tab) => {
 console.log("clicked");
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    }).catch((error) => console.log(`Failed to inject Script: ${error}`));
  
 

});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var tab = tabs[0];
  if (tab.url === "https://twitter.com/compose/post") {
      // The URL is https://twitter.com/compose/post
      console.log("The URL is https://twitter.com/compose/post");
  } else {
      // The URL is not https://twitter.com/compose/post
      console.log("The URL is not https://twitter.com/compose/post");
  }
});
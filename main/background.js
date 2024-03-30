
// Check for updates of the tab
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  // If the tab is fully loaded and the URL matches, send a message to the content script
  if (changeInfo.status === 'complete' && tab.url && (tab.url.includes("twitter.com/compose/post") || tab.url.includes("x.com/compose/post"))) {
    chrome.tabs.sendMessage(tabId, {
      type: "POST"
    })
  }
});



chrome.runtime.onInstalled.addListener((object) => {
  // Inject Extension on install
  const manifest = chrome.runtime.getManifest();

  const injectIntoTab = (tab) => {
    const scripts = manifest.content_scripts[0].js;
    const s = scripts.length;

    const styles = manifest.content_scripts[0].css;
    const st = styles.length;

    for (let i = 0; i < s; i++) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: [scripts[i]],
      });
    }

    for (let i = 0; i < st; i++) {
      chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: [styles[i]],
      });
    }

  };

  // Get all windows
  chrome.windows.getAll(
    {
      populate: true,
    },
    (windows) => {
      let currentWindow;
      const w = windows.length;

      for (let i = 0; i < w; i++) {
        currentWindow = windows[i];

        let currentTab;
        const t = currentWindow.tabs.length;

        for (let j = 0; j < t; j++) {
          currentTab = currentWindow.tabs[j];

          if (currentTab.url.includes("twitter.com/compose/post") || currentTab.url.includes("x.com/compose/post")) {
            injectIntoTab(currentTab);
          }
        } 
      }
    }
  );

  if (object.reason === "install") {
    chrome.tabs.create({ url: "https://maxontech.io/x-font-editor" });
  }
});
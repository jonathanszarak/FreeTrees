let videoTabOpened = false;

chrome.tabs.onCreated.addListener(function(tab) {
  if (!videoTabOpened) {
    chrome.tabs.create({ url: "https://www.youtube.com/watch?v=JOWLUYJonsY" }, function(createdTab) {
      // Update flag to indicate that the video tab has been opened
      videoTabOpened = true;
    });
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url === "https://www.youtube.com/watch?v=JOWLUYJonsY") {
    // Update the value in the storage for the individual raising
    chrome.storage.local.get("counter", function(data) {
      var counter = data.counter || 0;
      counter++;
      chrome.storage.local.set({ "counter": counter }, function() {
        console.log("Counter increased to:", counter);
      });

      // Increment the total saved value
      chrome.storage.sync.get("totalSaved", function(data) {
        var totalSaved = data.totalSaved || 0;
        totalSaved++;
        chrome.storage.sync.set({ "totalSaved": totalSaved }, function() {
          console.log("Total saved increased to:", totalSaved);
        });
      });
    });
  }
});

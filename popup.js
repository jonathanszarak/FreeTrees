// Fetch the individual raising value from storage
chrome.storage.local.get("counter", function(data) {
  var counter = data.counter || 0;
  // Update the placeholder with the individual raising value
  document.getElementById('individualValue').textContent = "Your contribution: $" + counter;
});

// Fetch the total saved value from storage
chrome.storage.sync.get("totalSaved", function(data) {
  var totalSaved = data.totalSaved || 0;
  // Update the placeholder with the total saved value
  document.getElementById('totalSaved').textContent = "Total saved: $" + totalSaved;
});

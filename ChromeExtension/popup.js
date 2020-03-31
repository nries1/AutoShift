document.getElementById('doTime').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: 'doTime.js'
    });
  });
  document.getElementById('status').innerHTML =
    'Finished executing the doTime function.';
});

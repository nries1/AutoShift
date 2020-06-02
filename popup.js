document.getElementById('doTime').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: 'doTime.js'
    });
  });
  document.getElementById('status').innerHTML =
    'Finished executing.';
});

[...document.getElementsByTagName('INPUT')].forEach(_i => {
  _i.addEventListener('click', function({ target: { name, value } }) {
    chrome.storage.local.set({[name]: value}, function() {
      console.log(`You set ${name} time to ${value}`);
    });
  })
})
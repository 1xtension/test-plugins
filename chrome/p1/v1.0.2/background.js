chrome.contentSettings['images'].get({
  primaryUrl: location.origin
}, function (details) {
    console.log(details)
    chrome.contentSettings['images'].set({
        primaryPattern: '<all_urls>',
        setting: details.setting == 'allow' ? 'block' : 'allow'
    })
});

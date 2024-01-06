'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.action.onClicked.addListener(function (tab) {
  console.log("Start");
  // alert('icon clicked');
  console.log(tab.url);
  const regex = /https:\/\/www.imdb.com\/title\/tt\d{2}.*/;
  if (!regex.test(tab.url)) {
    console.log("Not an imdb title page. Ignoring.");
    return;
  }
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ['fetch.js'],
  });
  console.log("End");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hi ${sender.tab ? 'Con' : 'Pop'
      }, my name is Bac. I am from Background. It's great to hear from you.`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});

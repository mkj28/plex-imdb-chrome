'use strict';

chrome.action.onClicked.addListener(function (tab) {
  // Check if we're on an imdb title page
  const regex = /https:\/\/www.imdb.com\/title\/tt\d{2}.*/;
  if (!regex.test(tab.url)) {
    console.log("Not an imdb title page. Ignoring.");
    return;
  }
  // Composing the proposed string and copy it to clipboard
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ['fetch.js'],
  });
});

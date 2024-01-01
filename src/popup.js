'use strict';

import './popup.css';

(function () {

  function setupListeners() {
    document.getElementById('fetchBtn').addEventListener('click', () => {
      fetch();
    });

    document.getElementById('copyBtn').addEventListener('click', () => {
      copyToClipboard();
    });
  }

  function fetch() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const tab = tabs[0];

      chrome.tabs.sendMessage(
        tab.id,
        {
          type: 'FETCH',
          payload: {
          },
        },
        response => {
          console.log('Response: ' + response.message);
          document.getElementById('filename').innerHTML = response.message;
        }
      );
    });

  }

  function copyToClipboard() {
    // Get the text field
    var copyText = document.getElementById('filename');

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    document.execCommand('copy');

    // Alert the copied text
    alert("Copied the text: " + copyText.textContent);
  }

  document.addEventListener('DOMContentLoaded', setupListeners);
})();

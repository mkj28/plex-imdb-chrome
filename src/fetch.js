const titleElement = document.querySelector('.hero__primary-text');
const title = titleElement.textContent;
const imdbIdElement = document.querySelector('meta[property="imdb:pageConst"]');
const imdbId = imdbIdElement.getAttribute('content');
const releaseElement = document.querySelector('[data-testid="title-details-releasedate"]')
const releaseString = releaseElement.textContent;

var combinedText = '';
if (title) {
    combinedText += title;
}
if (releaseString) {
    const dateRegex = /\d{4}/;
    const match = dateRegex.exec(releaseString);
    if (match) {
        combinedText += " (" + match[0] + ")";
    }

}

if (imdbId) {
    combinedText += " {imdb-" + imdbId + "}"
}

console.log('Proposed string: ' + combinedText);

// Create a temporary input element and copy the text to clipboard
var tempInput = document.createElement("input");
tempInput.style = "position: absolute; left: -1000px; top: -1000px";
tempInput.value = combinedText;
document.body.appendChild(tempInput);
tempInput.select();
tempInput.setSelectionRange(0, 99999); // For mobile devices
document.execCommand("copy");
alert("Copied the text: " + tempInput.value);
document.body.removeChild(tempInput);

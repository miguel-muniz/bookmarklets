// @bookmarklet Open in Archive.is
const currentUrl = window.location.href;
const archiveUrl = "https://archive.is/" + encodeURIComponent(currentUrl);
window.open(archiveUrl, "_blank");

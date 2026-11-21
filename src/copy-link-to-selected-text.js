// @bookmarklet Copy Link to Selected Text
const text = window.getSelection()?.toString().trim().replace(/\s+/g, " ");
if (!text) {
  alert("Select some text on the page first.");
  return;
}

const url = new URL(location.href);
const anchor = url.hash.split(":~:", 1)[0];
const encodedText = encodeURIComponent(text).replaceAll("-", "%2D");
url.hash = `${anchor}:~:text=${encodedText}`;

(async () => {
  try {
    await navigator.clipboard.writeText(url.href);
  } catch {
    prompt("Copy this link:", url.href);
  }
})();

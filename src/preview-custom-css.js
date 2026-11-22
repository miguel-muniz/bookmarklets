// @bookmarklet Preview Custom CSS
const page = window;
const editor = window.open("", "_blank", "popup,width=500,height=300");
if (!editor) {
  alert("Allow pop-ups for this page to open the CSS editor.");
  return;
}

const origin = location.origin;
const editorDocument = editor.document;
editorDocument.title = "Preview Custom CSS";

const status = editorDocument.createElement("div");
status.setAttribute("role", "status");
status.textContent = "Type CSS to apply it to the original tab.";

const textarea = editorDocument.createElement("textarea");
textarea.setAttribute("aria-label", "CSS rules");
textarea.placeholder = "p { outline: 1px solid red; }";
textarea.spellcheck = false;
textarea.style.cssText = "flex: 1; resize: none; font: 14px monospace;";

editorDocument.body.style.cssText =
  "box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; height: 100vh; margin: 0; padding: 8px; font: 14px system-ui;";
editorDocument.body.append(status, textarea);
textarea.focus();

let target;
let stylesheet;
function applyStyles() {
  if (page.closed) {
    status.textContent = "The original tab was closed.";
    editor.clearInterval(timer);
    return;
  }

  let current;
  try {
    if (page.location.origin === origin) current = page.document;
  } catch {
    // Access is blocked while the original tab is on a different origin.
  }
  if (!current) {
    status.textContent = "Return the original tab to its starting site.";
    return;
  }

  if (current !== target) {
    target = current;
    stylesheet = current.createElement("style");
    (current.head || current.documentElement).append(stylesheet);
  }
  if (stylesheet.textContent !== textarea.value) {
    stylesheet.textContent = textarea.value;
  }
  status.textContent = "Type CSS to apply it to the original tab.";
}

textarea.addEventListener("input", applyStyles);
const timer = editor.setInterval(applyStyles, 500);
applyStyles();

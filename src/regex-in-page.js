// @bookmarklet Highlight Regex Matches
const pattern = prompt("Search page with a regular expression:", "");
if (!pattern || !document.body) return;

let regex;
try {
  regex = new RegExp(pattern, "gi");
} catch (error) {
  alert(`Invalid regular expression: ${error.message}`);
  return;
}

const name = "bookmarklet-regex-in-page";
const highlight = new Highlight();
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    return node.parentElement.closest(
      "script, style, noscript, textarea, select",
    )
      ? NodeFilter.FILTER_REJECT
      : NodeFilter.FILTER_ACCEPT;
  },
});

while (walker.nextNode()) {
  const node = walker.currentNode;
  for (const match of node.data.matchAll(regex)) {
    if (!match[0].length) continue;

    const range = new Range();
    range.setStart(node, match.index);
    range.setEnd(node, match.index + match[0].length);
    highlight.add(range);
  }
}

if (!document.getElementById(name)) {
  const style = document.createElement("style");
  style.id = name;
  style.textContent = `::highlight(${name}) { background-color: yellow; color: black; }`;
  document.head.append(style);
}

CSS.highlights.set(name, highlight);
const count = highlight.size;
alert(`Found ${count} match${count === 1 ? "" : "es"} for /${pattern}/i.`);

// @bookmarklet Enable Pasting in Inputs
document.querySelectorAll("input").forEach((input) => {
  input.removeAttribute("onpaste");
  input.onpaste = null;
});

document.addEventListener(
  "paste",
  (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;

    const text = event.clipboardData?.getData("text");
    if (text == null) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? start;
    input.setRangeText(text, start, end, "end");
    input.dispatchEvent(new Event("input", { bubbles: true }));
  },
  true,
);

alert("Pasting enabled in input fields.");

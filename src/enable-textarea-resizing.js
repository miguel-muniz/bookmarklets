// @bookmarklet Enable Textarea Resizing
document.querySelectorAll("textarea").forEach((textarea) => {
  textarea.style.setProperty("resize", "both", "important");

  const { overflowX, overflowY } = getComputedStyle(textarea);
  if (
    [overflowX, overflowY].every(
      (value) => value === "visible" || value === "clip",
    )
  ) {
    textarea.style.setProperty("overflow", "auto", "important");
  }
});

// @bookmarklet Remove All Parameters from URL
history.replaceState(
  null,
  "",
  location.origin + location.pathname + location.hash,
);

// @bookmarklet Remove URL Parameters
history.replaceState(
  null,
  "",
  location.origin + location.pathname + location.hash,
);

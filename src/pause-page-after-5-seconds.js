// @bookmarklet Pause Page in 5 Seconds
console.log(
  [
    "JavaScript will pause in 5 seconds.",
    "Chrome: DevTools Settings → Preferences → Appearance → Enable “Disable paused state overlay”.",
    "Firefox: Debugger settings (gear icon) → Turn off “Show paused overlay”.",
  ].join("\n"),
);

setTimeout(() => {
  debugger;
}, 5000);

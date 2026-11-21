// @bookmarklet Add Timestamp to URL
const now = new Date();
const pad = (number) => String(number).padStart(2, "0");
const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}:${pad(now.getMinutes())}`;

const url = new URL(location.href);
url.searchParams.set("ts", timestamp);
url.search = url.search.replace(/([?&]ts=[^&]*)%3A/, "$1:");
history.replaceState(history.state, "", url);

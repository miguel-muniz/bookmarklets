// @bookmarklet Download Page Media
const currentUrl = new URL(window.location.href);
const hostname = currentUrl.hostname.replace(/\.$/, "");
// Services advertised by https://api.cobalt.tools/.
const cobaltDomains = [
  "bilibili.com",
  "bilibili.tv",
  "b23.tv",
  "bsky.app",
  "dailymotion.com",
  "dai.ly",
  "facebook.com",
  "fb.watch",
  "instagram.com",
  "loom.com",
  "ok.ru",
  "pinterest.com",
  "pin.it",
  "newgrounds.com",
  "reddit.com",
  "redd.it",
  "rutube.ru",
  "snapchat.com",
  "soundcloud.com",
  "streamable.com",
  "tiktok.com",
  "tumblr.com",
  "twitter.com",
  "x.com",
  "vimeo.com",
  "vk.com",
  "vkvideo.ru",
];

const isTwitchClip =
  hostname === "clips.twitch.tv" ||
  ((hostname === "twitch.tv" || hostname.endsWith(".twitch.tv")) &&
    /^\/[^/]+\/clip\/[^/]+/.test(currentUrl.pathname));
const isSupported =
  (currentUrl.protocol === "https:" || currentUrl.protocol === "http:") &&
  (isTwitchClip ||
    cobaltDomains.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`),
    ));

if (isSupported) {
  const downloadUrl =
    "https://cobalt.tools/#" + encodeURIComponent(currentUrl.href);
  window.open(downloadUrl, "_blank", "noopener");
  return;
}

const toast = (message) => {
  const element = document.createElement("button");
  element.type = "button";
  element.textContent = message;
  element.setAttribute("popover", "manual");
  element.style.cssText = `
    position: fixed;
    inset: 20px auto auto 50%;
    margin: 0;
    transform: translate(-50%, -16px);
    padding: 12px 16px;
    border: 0;
    border-radius: 8px;
    background: #b42318;
    color: #fff;
    font: 14px system-ui, sans-serif;
    box-shadow: 0 4px 16px #0005;
    opacity: 0;
    cursor: pointer;
    transition: opacity .2s, transform .2s;
    white-space: nowrap;
  `;
  (document.body || document.documentElement).append(element);
  if (element.showPopover) element.showPopover();
  else element.style.zIndex = 2147483647;

  const show = () => {
    element.style.opacity = 1;
    element.style.transform = "translate(-50%, 0)";
  };
  requestAnimationFrame(show);

  let timeout;
  const scheduleDismissal = () => {
    timeout = setTimeout(() => {
      element.style.opacity = 0;
      element.style.transform = "translate(-50%, -16px)";
      timeout = setTimeout(() => element.remove(), 200);
    }, 2500);
  };
  element.addEventListener("pointerenter", () => {
    clearTimeout(timeout);
    show();
  });
  element.addEventListener("pointerleave", scheduleDismissal);
  scheduleDismissal();
  element.addEventListener("click", (event) => {
    event.stopPropagation();
    clearTimeout(timeout);
    element.remove();
  });
};

toast("Downloads are not supported on this page.");

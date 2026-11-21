// @bookmarklet Fix URL
(async () => {
  const toast = (message, ok = true) => {
    const element = document.createElement("div");
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
      background: ${ok ? "#222" : "#b42318"};
      color: #fff;
      font: 14px system-ui, sans-serif;
      box-shadow: 0 4px 16px #0005;
      opacity: 0;
      pointer-events: none;
      transition: opacity .2s, transform .2s;
      white-space: nowrap;
    `;
    (document.body || document.documentElement).append(element);
    if (element.showPopover) element.showPopover();
    else element.style.zIndex = 2147483647;

    requestAnimationFrame(() => {
      element.style.opacity = 1;
      element.style.transform = "translate(-50%, 0)";
    });
    setTimeout(() => {
      element.style.opacity = 0;
      element.style.transform = "translate(-50%, -16px)";
      setTimeout(() => {
        if (element.hidePopover) element.hidePopover();
        element.remove();
      }, 200);
    }, 2500);
  };

  try {
    const url = new URL(await navigator.clipboard.readText());
    const hostname = url.hostname.replace(/^www\./, "");
    const hosts = {
      "x.com": "fixvx.com",
      "twitter.com": "fixvx.com",
      "reddit.com": "vxreddit.com",
      "tiktok.com": "kktiktok.com",
    };
    if (!Object.hasOwn(hosts, hostname)) throw new Error("Unsupported URL");

    await navigator.clipboard.writeText(
      `https://${hosts[hostname]}${url.pathname}`,
    );
    toast("Rewritten link copied");
  } catch {
    toast("Copy an X, Reddit, or TikTok link first", false);
  }
})();

# Bookmarklets

Small browser tools you can run by clicking a bookmark on the current web page.

## Install

From the repository root, run `npm ci` and then `npm run build`. The build creates the install files in `dist/`.

### Import all bookmarklets

1. Open your browser’s bookmarks or favorites manager.
2. Choose the option to import bookmarks from an HTML file.
3. Select `dist/bookmarklets.html`.

### Install one bookmarklet

1. Open the matching `.bookmarklet.txt` file in `dist/` and copy the entire line, including `javascript:`.
2. Create a new bookmark in your browser’s bookmark manager and give it the name from the list below.
3. Paste the line into the bookmark’s URL field and save it.

Open the page you want to use the bookmarklet on, then click the saved bookmark.

## Bookmarklet list

| Name | What it does |
| --- | --- |
| [Add Timestamp to URL](src/add-timestamp-to-url.js) | Adds or updates a `ts` query parameter with the current local date and time without reloading the page. |
| [Copy Link to Selected Text](src/copy-link-to-selected-text.js) | Copies a link that points directly to the selected text on the page. |
| [Enable Pasting in Inputs](src/enable-pasting-in-inputs.js) | Restores pasting in input fields on pages that block it. |
| [Enable Resizing in Textareas](src/enable-resizing-in-textareas.js) | Makes textareas on the current page resizable in both directions. |
| [Fix URL](src/fix-url.js) | Rewrites a copied X, Twitter, Reddit, or TikTok link for easier sharing and copies the rewritten URL. |
| [Open in Archive.is](src/open-in-archive-is.js) | Opens the current page’s URL in Archive.is in a new tab. |
| [Open in Hacker News](src/open-in-hacker-news.js) | Searches Hacker News for the current page’s URL. |
| [Open in RSS.beautify](src/open-in-rss-beautify.js) | Opens the current URL in RSS.beautify for a readable view of an RSS feed. |
| [Pause Page After 5 Seconds](src/pause-page-after-5-seconds.js) | Pauses the page’s JavaScript after five seconds when browser developer tools are open. |
| [RegEx in Page](src/regex-in-page.js) | Prompts for a regular expression, highlights matching page text, and reports the match count. |
| [Remove All Parameters from URL](src/remove-all-parameters-from-url.js) | Removes the query string from the current URL while keeping the fragment. |
| [Show Password Inputs](src/show-password-inputs.js) | Makes the contents of password fields visible on the current page. |
| [Test Custom Styles](src/test-custom-styles.js) | Opens a pop-up CSS editor that applies styles to the original tab as you type. |
| [Toggle Design Mode](src/toggle-design-mode.js) | Turns editing of the current page’s content on or off. |

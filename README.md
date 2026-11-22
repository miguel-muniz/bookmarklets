# Bookmarklets

Small browser tools you can run by clicking a bookmark on the current web page.

## Install

The [install files](dist/) are included in the repository.

### Import all bookmarklets

1. Download [bookmarklets.html](dist/bookmarklets.html?raw=true).
2. Open your browser’s bookmarks or favorites manager.
3. Choose the option to import bookmarks from an HTML file.
4. Select the downloaded `bookmarklets.html` file.

### Install one bookmarklet

1. Open the matching `.bookmarklet.txt` file in [`dist/`](dist/) and copy the entire line, including `javascript:`.
2. Create a new bookmark in your browser’s bookmark manager and give it the name from the list below.
3. Paste the line into the bookmark’s URL field and save it.

Open the page you want to use the bookmarklet on, then click the saved bookmark.

## Bookmarklet list

| Name | What it does |
| --- | --- |
| [Add URL Timestamp](src/add-url-timestamp.js) | Adds or updates a `ts` query parameter with the current local date and time without reloading the page. |
| [Copy Link to Selected Text](src/copy-link-to-selected-text.js) | Copies a link that points directly to the selected text on the page. |
| [Copy Shareable Link](src/copy-shareable-link.js) | Rewrites a copied X, Twitter, Reddit, or TikTok link for easier sharing and copies the rewritten URL. |
| [Enable Input Paste](src/enable-input-paste.js) | Restores pasting in input fields on pages that block it. |
| [Enable Textarea Resizing](src/enable-textarea-resizing.js) | Makes textareas on the current page resizable in both directions. |
| [Highlight Regex Matches](src/highlight-regex-matches.js) | Prompts for a regular expression, highlights matching page text, and reports the match count. |
| [Open in Archive.is](src/open-in-archive-is.js) | Opens the current page’s URL in Archive.is in a new tab. |
| [Open in Hacker News](src/open-in-hacker-news.js) | Searches Hacker News for the current page’s URL. |
| [Open in RSS.beautify](src/open-in-rss-beautify.js) | Opens the current URL in RSS.beautify for a readable view of an RSS feed. |
| [Pause Page in 5 Seconds](src/pause-page-in-5-seconds.js) | Pauses the page’s JavaScript after five seconds when browser developer tools are open. |
| [Preview Custom CSS](src/preview-custom-css.js) | Opens a pop-up CSS editor that applies styles to the original tab as you type. |
| [Remove URL Parameters](src/remove-url-parameters.js) | Removes the query string from the current URL while keeping the fragment. |
| [Show Passwords](src/show-passwords.js) | Makes the contents of password fields visible on the current page. |
| [Toggle Page Editing](src/toggle-page-editing.js) | Turns editing of the current page’s content on or off. |

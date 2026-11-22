# Working in this repository

- From the repository root, use `npm ci` to install dependencies and `npm run build` to generate installable bookmarklets.
- Keep one readable JavaScript file per bookmarklet in `src/`. Start the file with `// @bookmarklet Display Name`. The build uses that name in the HTML import. Derive the filename from the display name by lowercasing it and replacing spaces and punctuation with hyphens, as in `open-in-archive-is.js`. When the display name changes, rename the source file and update its README link and generated install files.
- Match the formatting of nearby files. Use `npm run format` to format all source files or `npm exec -- prettier --write src/<filename>.js` to format a single file.
- Edit the source files and regenerate the install files with `npm run build`. The build produces `dist/bookmarklets.html` and one `dist/<filename>.bookmarklet.txt` per source file. Include the regenerated install files in the same change as the source. When removing or renaming a source file, remove its obsolete `.bookmarklet.txt` file from `dist/`.
- After changing a bookmarklet, check that it builds and that the generated URL starts with `javascript:`. Exercise changed behavior from a saved browser bookmark on a representative page when possible.

## Name bookmarklets

- Use concise, title-cased display names that read like button labels. Start with a verb and name what the action affects, as in `Add URL Timestamp` or `Preview Custom CSS`.
- Use the same wording for related actions. Use `Open in <Service>` when sending the current URL to another service, including when the service shows matching results. Examples include `Open in Archive.is`, `Open in Hacker News`, and `Open in RSS.beautify`.
- Keep qualifiers that clarify the action's scope. For example, `Copy Link to Selected Text` specifies that the action works on text selections.

## Keep the README current

- When adding a bookmarklet, add a row to the bookmarklet list in `README.md`. Keep the list alphabetical by display name, use the exact name from the `@bookmarklet` comment, and link the name to its source file in `src/`.
- Describe what the user sees or gets in one short sentence. Include any prerequisite that affects use, such as opening developer tools first.
- Update the corresponding row when renaming a bookmarklet or changing its behavior, and remove the row when deleting a bookmarklet.
- Keep both installation methods in sync with the build. Check the HTML import filename and the individual text file naming pattern whenever the build output changes.

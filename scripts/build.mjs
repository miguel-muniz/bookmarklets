import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { minify } from 'terser';

const src = new URL('../src/', import.meta.url);
const dist = new URL('../dist/', import.meta.url);

function escapeHtml(text) {
  return text.replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

const files = (await readdir(src, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.endsWith('.js'))
  .map((entry) => entry.name)
  .sort();

const bookmarklets = [];
for (const filename of files) {
  const source = await readFile(new URL(encodeURIComponent(filename), src), 'utf8');
  const { code } = await minify({ [filename]: source }, {
    parse: { bare_returns: true },
    compress: { drop_debugger: false },
    mangle: { toplevel: true },
    format: { comments: false, shebang: false },
  });

  // Discard the return value so a string cannot replace the current page.
  const href = 'javascript:' + encodeURIComponent(`void function(){${code}}()`);
  const name = filename.slice(0, -3);
  const title = source.match(/^\s*\/\/ @bookmarklet[ \t]+([^\r\n]+)/)?.[1].trim() || name;
  bookmarklets.push({ name, title, href });
}

await mkdir(dist, { recursive: true });

for (const { name, href } of bookmarklets) {
  const output = new URL(encodeURIComponent(`${name}.bookmarklet.txt`), dist);
  await writeFile(output, href + '\n');
}

const entries = bookmarklets.map(({ title, href }) =>
  `    <DT><A HREF="${escapeHtml(href)}">${escapeHtml(title)}</A>`,
);

await writeFile(new URL('bookmarklets.html', dist), [
  '<!DOCTYPE NETSCAPE-Bookmark-file-1>',
  '<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">',
  '<TITLE>Bookmarklets</TITLE>',
  '<H1>Bookmarklets</H1>',
  '<DL><p>',
  ...entries,
  '</DL><p>',
  '',
].join('\n'));

console.log(`Built ${bookmarklets.length} bookmarklet(s) in dist/.`);

import { readFile, watch, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { format, resolveConfig } from 'prettier';

const src = new URL('../src/', import.meta.url);

console.log('Watching src/ for JavaScript changes.');

for await (const { filename } of watch(src)) {
  if (!filename?.endsWith('.js')) continue;

  const filepath = fileURLToPath(new URL(encodeURIComponent(filename), src));
  try {
    const source = await readFile(filepath, 'utf8');
    const options = await resolveConfig(filepath, { useCache: false });
    const formatted = await format(source, { ...options, filepath });
    if (formatted !== source && (await readFile(filepath, 'utf8')) === source) {
      await writeFile(filepath, formatted);
      console.log(`Formatted src/${filename}`);
    }
  } catch (error) {
    if (error.code !== 'ENOENT' && error.code !== 'EISDIR') {
      console.error(`Could not format src/${filename}`, error.message);
    }
  }
}

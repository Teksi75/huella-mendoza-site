import { promises as fs } from 'node:fs';
import path from 'node:path';

const PROJECT_FILE = 'PROJECT_STRUCTURE_HUELLA.md';
const MAX_DEPTH = 6;
const EXCLUDES = new Set([
  'node_modules',
  '.next',
  '.git',
  'dist',
  'build',
  'coverage',
  '.turbo',
  '.vercel',
]);
const START_MARKER = '<!-- AUTO-GENERADO:START -->';
const END_MARKER = '<!-- AUTO-GENERADO:END -->';

const args = new Set(process.argv.slice(2));
const isCheck = args.has('--check');

const byName = (a, b) => a.name.localeCompare(b.name, 'es');

async function buildTree(rootDir) {
  const lines = ['.'];
  await walk(rootDir, '', 0, lines);
  return lines.join('\n');
}

async function walk(dirPath, prefix, depth, lines) {
  if (depth >= MAX_DEPTH) {
    return;
  }

  const entries = (await fs.readdir(dirPath, { withFileTypes: true }))
    .filter((entry) => !EXCLUDES.has(entry.name))
    .sort(byName);

  for (let index = 0; index < entries.length; index += 1) {
    const entry = entries[index];
    const isLast = index === entries.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    const nextPrefix = prefix + (isLast ? '    ' : '│   ');
    lines.push(`${prefix}${connector}${entry.name}`);
    if (entry.isDirectory()) {
      await walk(path.join(dirPath, entry.name), nextPrefix, depth + 1, lines);
    }
  }
}

async function run() {
  const filePath = path.resolve(process.cwd(), PROJECT_FILE);
  const content = await fs.readFile(filePath, 'utf8');
  const startIndex = content.indexOf(START_MARKER);
  const endIndex = content.indexOf(END_MARKER);

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    throw new Error(`No se encontraron marcadores ${START_MARKER} / ${END_MARKER}.`);
  }

  const tree = await buildTree(process.cwd());
  const newBlock = `${START_MARKER}\n\`\`\`\n${tree}\n\`\`\`\n${END_MARKER}`;

  const before = content.slice(0, startIndex);
  const after = content.slice(endIndex + END_MARKER.length);
  const updated = `${before}${newBlock}${after}`;

  if (isCheck) {
    if (content.includes(newBlock)) {
      console.log('AUTO-GENERADO: OK');
      return;
    }
    console.error('AUTO-GENERADO: desactualizado. Ejecuta: npm run docs:structure');
    process.exitCode = 1;
    return;
  }

  if (updated !== content) {
    await fs.writeFile(filePath, updated, 'utf8');
  }
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

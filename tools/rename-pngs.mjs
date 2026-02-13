#!/usr/bin/env node
import { readdir, rename, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TEXT_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.json',
  '.html',
  '.htm',
  '.css',
  '.less',
  '.scss',
  '.sass',
  '.md',
  '.txt',
  '.yml',
  '.yaml',
  '.ps1',
  '.sh'
]);
const IGNORED_DIRS = new Set(['node_modules', 'dist', '.git', '.angular', 'coverage']);

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const appSrcRoot = path.join(repoRoot, 'junjun-app', 'src');

const toPosix = (value) => value.replace(/\\/g, '/');
const isSubPath = (target, parent) => {
  const relative = path.relative(parent, target);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
};

async function walk(dir, onFile) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isSymbolicLink()) {
      continue;
    }
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name.toLowerCase())) {
        continue;
      }
      await walk(entryPath, onFile);
    } else if (entry.isFile()) {
      await onFile(entryPath, entry);
    }
  }
}

async function collectPngGroups(root) {
  const groups = new Map();
  await walk(root, async (filePath) => {
    if (path.extname(filePath).toLowerCase() === '.png') {
      const dir = path.dirname(filePath);
      if (!groups.has(dir)) {
        groups.set(dir, []);
      }
      groups.get(dir).push(filePath);
    }
  });
  return groups;
}

const padNumber = (value, digits) => String(value).padStart(digits, '0');

async function renameGroupedPngs(groups) {
  const mappings = [];
  let renamedFiles = 0;
  for (const [dir, files] of groups) {
    if (files.length === 0) {
      continue;
    }
    const sorted = files.slice().sort((a, b) => a.localeCompare(b));
    const digits = Math.max(2, String(sorted.length).length);
    const staged = [];
    let index = 1;
    for (const filePath of sorted) {
      const ext = path.extname(filePath);
      const finalName = `${padNumber(index, digits)}${ext}`;
      const finalPath = path.join(dir, finalName);
      index += 1;
      if (path.resolve(filePath) === path.resolve(finalPath)) {
        continue;
      }
      const tempName = `${path.basename(filePath, ext)}.${Date.now()}-${Math.random().toString(16).slice(2)}.tmp`;
      const tempPath = path.join(dir, tempName);
      await rename(filePath, tempPath);
      staged.push({ tempPath, finalPath, oldPath: filePath });
      mappings.push({
        oldAbs: filePath,
        newAbs: finalPath,
        oldRel: toPosix(path.relative(repoRoot, filePath)),
        newRel: toPosix(path.relative(repoRoot, finalPath))
      });
      renamedFiles += 1;
    }
    for (const entry of staged) {
      await rename(entry.tempPath, entry.finalPath);
    }
  }
  console.log(`Renamed ${renamedFiles} PNG files across ${groups.size} directories.`);
  return mappings;
}

async function collectTextFiles(root) {
  const files = [];
  await walk(root, async (filePath) => {
    if (TEXT_EXTENSIONS.has(path.extname(filePath).toLowerCase())) {
      files.push(filePath);
    }
  });
  return files;
}

function buildReplacementMap(mapping, textFile) {
  const replacements = new Map();
  const textDir = path.dirname(textFile);
  const relToFileOld = toPosix(path.relative(textDir, mapping.oldAbs));
  const relToFileNew = toPosix(path.relative(textDir, mapping.newAbs));
  addReplacementVariant(replacements, relToFileOld, relToFileNew);

  if (!relToFileOld.startsWith('.') && !relToFileOld.startsWith('/')) {
    addReplacementVariant(replacements, `./${relToFileOld}`, `./${relToFileNew}`);
  }

  if (isSubPath(mapping.oldAbs, appSrcRoot) && isSubPath(textFile, appSrcRoot)) {
    const relToSrcOld = toPosix(path.relative(appSrcRoot, mapping.oldAbs));
    const relToSrcNew = toPosix(path.relative(appSrcRoot, mapping.newAbs));
    addReplacementVariant(replacements, relToSrcOld, relToSrcNew);
    addReplacementVariant(replacements, `/${relToSrcOld}`, `/${relToSrcNew}`);
  }

  return replacements;
}

function addReplacementVariant(map, needle, replacement) {
  if (!needle || needle === replacement) {
    return;
  }
  map.set(needle, replacement);
  const winNeedle = needle.replace(/\//g, '\\');
  const winReplacement = replacement.replace(/\//g, '\\');
  if (winNeedle !== needle) {
    map.set(winNeedle, winReplacement);
  }
}

async function updateTextReferences(textFiles, mappings) {
  let updatedFiles = 0;
  for (const filePath of textFiles) {
    let content = await readFile(filePath, 'utf8');
    let nextContent = content;
    for (const mapping of mappings) {
      const replacements = buildReplacementMap(mapping, filePath);
      for (const [needle, replacement] of replacements) {
        if (!needle || needle === replacement || !nextContent.includes(needle)) {
          continue;
        }
        nextContent = nextContent.split(needle).join(replacement);
      }
    }
    if (nextContent !== content) {
      await writeFile(filePath, nextContent, 'utf8');
      updatedFiles += 1;
    }
  }
  console.log(`Updated ${updatedFiles} text files with new PNG references.`);
}

(async () => {
  try {
    const pngGroups = await collectPngGroups(repoRoot);
    if (pngGroups.size === 0) {
      console.log('No PNG files found.');
      return;
    }
    const mappings = await renameGroupedPngs(pngGroups);
    if (mappings.length === 0) {
      console.log('All PNG files already follow the sequential naming scheme.');
      return;
    }
    const textFiles = await collectTextFiles(repoRoot);
    await updateTextReferences(textFiles, mappings);
    console.log('PNG rename and reference update complete.');
  } catch (error) {
    console.error('Failed to rename PNG files:', error);
    process.exitCode = 1;
  }
})();

#!/usr/bin/env node
/**
 * generate-images.mjs — premium imagery for Local SEO Apex via Fal AI.
 *
 * Uses the locally-installed `fal` CLI and YOUR EXISTING `fal auth login`
 * session (the Auth0 token in ~/.fal). No FAL_KEY / API key is required:
 * `fal api <model> key=value ...` authenticates with that session.
 *
 * Pipeline: for each entry in scripts/image-manifest.json we call
 * fal-ai/flux/dev, parse the hosted image URL out of the CLI output, and
 * download it to public/images/generated/<name>.jpg. Existing files are
 * skipped so reruns are cheap; pass --force to regenerate everything.
 *
 *   node scripts/generate-images.mjs           # generate missing images
 *   node scripts/generate-images.mjs --force   # regenerate all
 *   node scripts/generate-images.mjs home-hero # only named entries
 *
 * Flux renders text as gibberish, so every prompt is engineered to avoid
 * signage/logos and the shared STYLE suffix reinforces that. Keep it.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
// Images live under src/assets so Astro's <Image> optimizes them (WebP +
// responsive srcset) at build time. Components import them from here.
const OUT_DIR = join(ROOT, 'src', 'assets', 'generated');
const MODEL = process.env.FAL_MODEL || 'fal-ai/flux/dev';

// The fal CLI installs under the Python user bin, which isn't always on PATH
// for a bare `node` process. Augment PATH with the common locations.
const PATH_EXTRA = [
  join(os.homedir(), 'Library/Python/3.9/bin'),
  join(os.homedir(), '.local/bin'),
  '/opt/homebrew/bin',
  '/usr/local/bin',
].join(':');
const ENV = { ...process.env, PATH: `${PATH_EXTRA}:${process.env.PATH || ''}` };

const args = process.argv.slice(2);
const force = args.includes('--force');
const only = args.filter((a) => !a.startsWith('--'));

const manifest = JSON.parse(readFileSync(join(ROOT, 'scripts', 'image-manifest.json'), 'utf8'));
const STYLE = manifest.style ? `, ${manifest.style}` : '';
mkdirSync(OUT_DIR, { recursive: true });

/** Pull the first hosted image URL out of the fal CLI's (Python-repr) output. */
function extractUrl(stdout) {
  const m = stdout.match(/https?:\/\/[^\s'"]+\.(?:jpg|jpeg|png|webp)/i);
  return m ? m[0] : null;
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status} ${res.statusText}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

let made = 0;
let skipped = 0;
for (const img of manifest.images) {
  if (only.length && !only.includes(img.name)) continue;
  const dest = join(OUT_DIR, `${img.name}.jpg`);
  if (existsSync(dest) && !force) {
    console.log(`• skip   ${img.name} (exists)`);
    skipped++;
    continue;
  }
  const prompt = `${img.prompt}${STYLE}`;
  const size = img.size || 'landscape_4_3';
  process.stdout.write(`⣿ gen    ${img.name} … `);
  try {
    const out = execFileSync(
      'fal',
      ['api', MODEL, `prompt=${prompt}`, `image_size=${size}`],
      { env: ENV, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 },
    );
    const url = extractUrl(out);
    if (!url) throw new Error('no image URL in fal output');
    const bytes = await download(url, dest);
    console.log(`ok (${(bytes / 1024).toFixed(0) } KB) → ${dest.replace(ROOT + '/', '')}`);
    made++;
  } catch (err) {
    console.log('FAILED');
    console.error(`  ${err.message}`);
    process.exitCode = 1;
  }
}
console.log(`\nDone. ${made} generated, ${skipped} skipped.`);

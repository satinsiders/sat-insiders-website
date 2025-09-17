#!/usr/bin/env node
/*
 * Post-build helper to ensure static hosts without rewrites (e.g., Render static site)
 * can serve deep links by copying the SPA index.html to per-route directories
 * and providing rewrite hints.
 */
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.warn('[postbuild-spa] build/index.html not found – skipping route copies.');
  process.exit(0);
}

const routes = [
  'tutoring',
  'summit',
  'fit-check',
  'privacy',
  'terms',
  'student-rights',
  'complaints',
];

for (const route of routes) {
  const dir = path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(indexPath, path.join(dir, 'index.html'));
}

fs.copyFileSync(indexPath, path.join(distDir, '404.html'));
fs.writeFileSync(path.join(distDir, '_redirects'), `/* /index.html 200\n`);

const staticJsonSrc = path.resolve(__dirname, '..', 'static.json');
if (fs.existsSync(staticJsonSrc)) {
  fs.copyFileSync(staticJsonSrc, path.join(distDir, 'static.json'));
}

console.log('[postbuild-spa] Copied index.html to route directories:', routes.join(', '));

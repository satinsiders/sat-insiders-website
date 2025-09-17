#!/usr/bin/env node
/*
 * Post-build helper to ensure static hosts without rewrites (e.g., Render static site)
 * can serve deep links by copying the root SPA index.html to per-route directories.
 */
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.warn('[postbuild-spa] dist/index.html not found – skipping route copies.');
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

// Provide a 404 fallback page that loads the SPA
fs.copyFileSync(indexPath, path.join(distDir, '404.html'));

console.log('[postbuild-spa] Copied index.html to route directories:', routes.join(', '));

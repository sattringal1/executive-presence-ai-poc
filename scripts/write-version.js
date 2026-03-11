const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getCommitShort() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch (e) {
    return 'unknown';
  }
}

function writeVersion() {
  const commit = getCommitShort();
  const ts = new Date().toISOString();
  const version = `${commit}-${ts}`;

  const indexPath = path.join(__dirname, '..', 'exec-presence-ai', 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');

  const placeholder = '<!-- APP_VERSION -->';
  const metaTag = `    <meta name="app-version" content="${version}" />`;

  if (html.includes('name="app-version"')) {
    // replace existing app-version meta
    html = html.replace(/<meta\s+name="app-version"[^>]*>/i, metaTag);
  } else if (html.includes(placeholder)) {
    html = html.replace(placeholder, metaTag);
  } else {
    console.warn('Neither placeholder nor existing meta tag found in index.html; skipping write.');
    return;
  }
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Wrote app-version meta to', indexPath, version);
}

writeVersion();

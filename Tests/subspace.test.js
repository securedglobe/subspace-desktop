const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error('FAIL ' + msg);
  process.exit(1);
}

const src = fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8');
if (!src.includes('"name": "subspace-desktop"')) fail('pkg');
const cargo = fs.readFileSync(path.join(__dirname, '..', 'src-tauri', 'Cargo.toml'), 'utf8');
if (!cargo.includes('name = "app"')) fail('crate');
console.log('OK SubspaceDesktopTests');

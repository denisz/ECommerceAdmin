const cp = require('child_process');
const pkg = require('../package.json');
cp.spawnSync('docker', ['build', '-t', pkg.name, '.'], { stdio: 'inherit' });

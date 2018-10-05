const { spawn } = require ('child_process');
const { getDirectories } = require('./utils');

getDirectories(__dirname).map(dirName => {
  try {
    process.chdir(dirName);
    spawn('npm run build', { stdio: ['pipe', 'pipe', process.stderr], shell: true });
    process.chdir('../');
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
});

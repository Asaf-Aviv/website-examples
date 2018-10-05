const { spawn } = require ('child_process');
const { getDirectories } = require('./utils');

getDirectories(__dirname).map(dirName => {
  try {
    process.chdir(dirName);
    spawn('rmdir dist /q /s', { stdio: 'inherit', shell: true });
    process.chdir('../');
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
});

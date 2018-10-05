const fs = require('fs');
const { spawn } = require ('child_process');

const getDirectories = path =>
  fs.readdirSync(path)
    .filter(name => {
      if (name === '.git') {
        return false;
      }
      return fs.lstatSync(`${path}/${name}`).isDirectory();
    });

    getDirectories(__dirname).map(dirName => {
      try {
        process.chdir(dirName);
        spawn('npm run build', { stdio: 'inherit', shell: true });
        process.chdir('../');
      } catch (err) {
        console.error(`chdir: ${err}`);
      }
    });


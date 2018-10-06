const { readdirSync, lstatSync } = require('fs');

exports.getDirectories = path => readdirSync(path)
  .filter(name => name !== '.git' && lstatSync(`${path}/${name}`).isDirectory());

const DecompressZip   = require('decompress-zip');

function extract(file, opts, callback) {
  const unzipper = new DecompressZip(file);
  unzipper.on('error', callback);
  unzipper.on('extract', (log) => {
    callback()
  });
  return unzipper.extract(opts);
}

function  list(file, callback) {
  const unzipper = new DecompressZip(file);
  unzipper.on('error', callback);
  unzipper.on('list', (files) => {
    callback(null, files)
  });
  return unzipper.list()
}

module.exports = { extract, list, };

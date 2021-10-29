"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = require("./services/fs");

var _log = require("./services/log");

/**
 * @typedef {Object} Config user json configuration
 * @property {string[]} Config.files path
 * @property {string} Config.backupDirectory path
 */

/**
 * Backup files given a path to config file
 * @param {string} path to config file
 * @returns {Promise<void>} Promise
 */
const backup = async path => {
  await (0, _fs.existsAsync)(path);
  const json = await (0, _fs.readFileAsync)(path, {
    encoding: 'utf8'
  });
  /** @type {Config} */

  const parsedConfig = JSON.parse(json);
  (0, _log.log)('Config:');
  (0, _log.logNested)(parsedConfig);
  const {
    files,
    backupDirectory
  } = parsedConfig;
  const normalizedBackupDir = (0, _fs.resolvePath)(backupDirectory);
  await Promise.all(files.map(file => (0, _fs.copyFileAsync)(file, normalizedBackupDir)));
  (0, _log.log)('complete!');
};

var _default = backup;
exports.default = _default;
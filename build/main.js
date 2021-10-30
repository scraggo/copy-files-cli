"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copy = void 0;

var _fs = require("./services/fs");

var _log = require("./services/log");

/**
 * @typedef { import("./types").Config } Config
 */

/**
 * Copy files given a path to config file
 * @param {string} path to config file
 * @returns {Promise<Config>} Promise resolved with Config
 */
const getUserConfig = async path => {
  await (0, _fs.existsAsync)(path);
  const json = await (0, _fs.readFileAsync)(path, {
    encoding: 'utf8'
  });
  /** @type {Config} */

  return JSON.parse(json);
};
/**
 * Copy files given a path to config file
 * @param {string} path to config file
 * @returns {Promise<void>} Promise
 */


const copy = async path => {
  /** @type {Config} */
  const parsedConfig = await getUserConfig(path);
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

exports.copy = copy;
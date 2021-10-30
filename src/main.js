import {
  copyFileAsync,
  existsAsync,
  readFileAsync,
  resolvePath,
} from './services/fs';
import { log, logNested } from './services/log';

/**
 * @typedef { import("./types").Config } Config
 */

/**
 * Copy files given a path to config file
 * @param {string} path to config file
 * @returns {Promise<Config>} Promise resolved with Config
 */
const getUserConfig = async path => {
  await existsAsync(path);
  const json = await readFileAsync(path, { encoding: 'utf8' });

  /** @type {Config} */
  return JSON.parse(json);
};

/**
 * Copy files given a path to config file
 * @param {string} path to config file
 * @returns {Promise<void>} Promise
 */
export const copy = async path => {
  /** @type {Config} */
  const parsedConfig = await getUserConfig(path);
  log('Config:');
  logNested(parsedConfig);

  const { files, backupDirectory } = parsedConfig;

  const normalizedBackupDir = resolvePath(backupDirectory);

  await Promise.all(
    files.map(file => copyFileAsync(file, normalizedBackupDir))
  );

  log('complete!');
};

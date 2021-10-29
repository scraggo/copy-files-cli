import {
  copyFileAsync,
  existsAsync,
  readFileAsync,
  resolvePath,
} from './services/fs';
import { log, logNested } from './services/log';

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
  await existsAsync(path);
  const json = await readFileAsync(path, { encoding: 'utf8' });

  /** @type {Config} */
  const parsedConfig = JSON.parse(json);
  log('Config:');
  logNested(parsedConfig);

  const { files, backupDirectory } = parsedConfig;

  const normalizedBackupDir = resolvePath(backupDirectory);

  await Promise.all(
    files.map(file => copyFileAsync(file, normalizedBackupDir))
  );

  log('complete!');
};

export default backup;

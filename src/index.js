// @ts-check

import commander from './commander';
import backup from './backup';

backup(commander.config);

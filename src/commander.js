// @ts-check

import commander from 'commander';

export default commander
  .version('0.0.1')
  .requiredOption('-c, --config <path>', 'Path to JSON config file')
  .parse(process.argv);

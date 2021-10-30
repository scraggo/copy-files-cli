import util from 'util';

const getNowISO = () => new Date(Date.now()).toISOString();

export const log = (...args) => {
  // eslint-disable-next-line no-console
  console.log(getNowISO(), '[copy]', ...args);
};

export const logNested = obj => log(util.inspect(obj, { depth: null }));

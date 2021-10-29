"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logNested = exports.log = void 0;

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getNowISO = () => new Date(Date.now()).toISOString();

const log = (...args) => {
  // eslint-disable-next-line no-console
  console.log(getNowISO(), '[backup]', ...args);
};

exports.log = log;

const logNested = obj => log(_util.default.inspect(obj, {
  depth: null
}));

exports.logNested = logNested;
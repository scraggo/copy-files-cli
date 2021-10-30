"use strict";

var _cli = _interopRequireDefault(require("./cli"));

var _main = require("./main");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _main.copy)(_cli.default.config);
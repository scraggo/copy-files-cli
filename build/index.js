"use strict";

var _cli = _interopRequireDefault(require("./cli"));

var _backup = _interopRequireDefault(require("./backup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _backup.default)(_cli.default.config);
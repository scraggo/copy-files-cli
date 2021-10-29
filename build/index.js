"use strict";

var _commander = _interopRequireDefault(require("./commander"));

var _backup = _interopRequireDefault(require("./backup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-check
(0, _backup.default)(_commander.default.config);
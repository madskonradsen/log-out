var colors = require('colors');
var dateformat = require('dateformat');

function timestamp() {
	return dateformat(new Date(), "dd/mm hh:MM:ss")
}

exports.warn = function (msg) {
  console.log('[' + timestamp() + '] ' + colors.yellow('[WARN] ') + msg);
}

exports.log = function (msg) {
  console.log('[' + timestamp() + '] ' + colors.green('[LOG] ') + msg);
}

exports.debug = function (msg) {
  console.log('[' + timestamp() + '] ' + colors.blue('[DEBUG] ') + msg);
}

exports.error = function (msg) {
  console.log('[' + timestamp() + '] ' + colors.red('[ERROR] ') + msg);
}
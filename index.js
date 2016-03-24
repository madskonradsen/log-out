var colors = require('colors');

function timestamp() {
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = day + "/"+ month + "/" + date.getFullYear() + " " +  hour + ":" + min + ":" + sec;

    return str;
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

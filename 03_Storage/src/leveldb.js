"use strict";
exports.__esModule = true;
var encoding_down_1 = require("encoding-down");
var leveldown_1 = require("leveldown");
var levelup_1 = require("levelup");
var LevelDB = /** @class */ (function () {
    function LevelDB() {
    }
    LevelDB.open = function (path) {
        var encoded = encoding_down_1["default"](leveldown_1["default"](path), { valueEncoding: 'json' });
        return levelup_1["default"](encoded);
    };
    return LevelDB;
}());
exports.LevelDB = LevelDB;
var db = levelup_1["default"](encoding_down_1["default"](leveldown_1["default"]("path"), { valueEncoding: 'json' }));
// Write
var level_ws_1 = require("level-ws");
var ws = level_ws_1["default"](db);
ws.on('error', function (err) {
    console.log('Oh my!', err);
});
ws.on('close', function () {
    console.log('Stream closed');
});
ws.write({ key: 'occupation', value: 'Clown' });
ws.end();
// Read
var rs = db.createReadStream()
    .on('data', function (data) {
    console.log(data.key, '=', data.value);
})
    .on('error', function (err) {
    console.log('Oh my!', err);
})
    .on('close', function () {
    console.log('Stream closed');
})
    .on('end', function () {
    console.log('Stream ended');
});

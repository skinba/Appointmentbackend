'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 6000;

app.get('/', function (req, res) {
    res.json({
        msg: 'Welcome to appointment app'
    });
});

app.listen(PORT, function () {
    console.log('server is running at port ' + 6000);
});
//# sourceMappingURL=server.js.map
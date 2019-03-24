'use strict';

var fakeDatabase = require('../fakeDatabase');
var _ = require('lodash');

exports.list_all_checkinlogs = function(req, res) {
    if (req.query && req.query.room) {
        var result = [];
        for (var idx in fakeDatabase.checksinLog) {
            var checkinlog = fakeDatabase.checksin[idx];
            if (checkinlog.roomid.toString() === req.query.room) {
                result.push(checkinlog);
            }
        }
        res.json(result);
    } else {
        res.json(fakeDatabase.checksinLog);
    }
};

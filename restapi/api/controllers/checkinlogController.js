'use strict';

var fakeDatabase = require('../fakeDatabase');
var _ = require('lodash');

exports.list_all_checkinlogs = function(req, res) {
    if (req.query && req.query.room) {
        var result = [];
        for (var idx in fakeDatabase.checkinsLog) {
            var checkinlog = fakeDatabase.checkins[idx];
            if (checkinlog.roomid.toString() === req.query.room) {
                result.push(checkinlog);
            }
        }
        res.json(result);
    } else {
        res.json(fakeDatabase.checkinsLog);
    }
};

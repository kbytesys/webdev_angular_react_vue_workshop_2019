'use strict';

var fakeDatabase = require('../fakeDatabase');
var _ = require('lodash');
var Checkin = require('../models/checkinModel');
var Person = require('../models/personModel');
var Room = require('../models/roomModel');

exports.list_all_checksin = function(req, res) {
    if (req.query && req.query.room) {
        var result = [];
        for (var idx in fakeDatabase.checksin) {
            var checkin = fakeDatabase.checksin[idx];
            if (checkin.room.id.toString() === req.query.room) {
                result.push(checkin);
            }
        }
        res.json(result);
    } else {
        res.json(fakeDatabase.checksin);
    }
};

exports.create_a_checkin = function(req, res) {

    if (!req.body.person || !req.body.person.name) {
        res.status(400).json({message: "Malformed request: missing person data"});
        return;
    }

    if (!req.body.room || !req.body.room.id || !req.body.room.name) {
        res.status(400).json({message: "Malformed request: missing room data"});
        return;
    }

    for (var idx in fakeDatabase.checksin) {
        var oldcheckin = fakeDatabase.checksin[idx];
        if (oldcheckin.person.name === req.body.person.name.trim()) {
            res.status(400).json({message: `${oldcheckin.person.name} is already in a meeting room`});
            return;
        }
    }

    var person = new Person(req.body.person.name.trim());
    var room = new Room(req.body.room.id, req.body.room.name);
    var checkin = new Checkin(new Date().getTime(), room, person);

    fakeDatabase.checksin.push(checkin);

    fakeDatabase.checksinLog.push({roomId: room.id, date: new Date(),
        message: `${person.name} joined the meeting in the ${room.name}`});

    res.json({message: "OK"});
};

exports.delete_a_checkin = function(req, res) {

    var checkinIdToRemove = req.params.checkinId;

    var removedItems = _.remove(fakeDatabase.checksin, function(checkin) {
        return checkin.id.toString() === checkinIdToRemove;
    });

    if (removedItems.length > 0) {
        res.json({message: "OK"});
        fakeDatabase.checksinLog.push({roomId: removedItems[0].room.id, date: new Date(),
            message: `${removedItems[0].person.name} leaved the meeting in the ${removedItems[0].room.name}`});
    } else {
        res.status(404).json({message: "Checkin not found"});
    }

};

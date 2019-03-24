'use strict';
exports.list_all_rooms = function(req, res) {
    res.json([
        { id:1, name: "Room 1" },
        { id:2, name: "Room 2" },
        { id:3, name: "Room 3" },
        { id:4, name: "Room 4" }
    ]);
};

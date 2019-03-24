'use strict';
module.exports = function(app) {
    var roomController = require('../controllers/roomController');

    // todoList Routes
    app.route('/room')
        .get(roomController.list_all_rooms);

    app.route('/room/:roomId')
        .get(roomController.get_a_room);
};

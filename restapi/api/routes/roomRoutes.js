'use strict';
module.exports = function(app) {
    var routeController = require('../controllers/roomController');

    // todoList Routes
    app.route('/room')
        .get(routeController.list_all_rooms);
};

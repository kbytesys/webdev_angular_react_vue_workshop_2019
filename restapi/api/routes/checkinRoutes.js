'use strict';
module.exports = function(app) {
    var checkinController = require('../controllers/checkinController');

    // todoList Routes
    app.route('/checkin')
        .get(checkinController.list_all_checksin)
        .post(checkinController.create_a_checkin);


    app.route('/checkin/:checkinId')
        .delete(checkinController.delete_a_checkin);
};

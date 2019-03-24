'use strict';
module.exports = function(app) {
    var checkinController = require('../controllers/checkinlogController');

    app.route('/checkinlog')
        .get(checkinController.list_all_checkinlogs)
};

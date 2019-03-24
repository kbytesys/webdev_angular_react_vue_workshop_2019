var express = require('express'),
  app = express(),
  cors = require('cors'),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

var roomRoutes = require('./api/routes/roomRoutes');
roomRoutes(app);

var checkinRoutes = require('./api/routes/checkinRoutes');
checkinRoutes(app);

var checkinlogRoutes = require('./api/routes/checkinlogRoutes');
checkinlogRoutes(app);

app.listen(port);

console.log('workshop checkin RESTful API server started on: ' + port);

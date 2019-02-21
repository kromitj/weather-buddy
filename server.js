var express = require('express'),
  port = process.env.PORT || 3000,
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
  const cron = require("node-cron");
  Report = require('./api/models/report'), //created model loading here
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Reportdb', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

cron.schedule("* * * * *", function() {
	// this will run a crawl script that fectch then creates a new Report instance from the data
  console.log("Crawling for weeather reports");
});

var routes = require('./api/routes/reportRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('Report RESTful API server started on: ' + port);

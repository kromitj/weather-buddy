const PORT = process.env.PORT || 3000

const bodyParser = require('body-parser')
const cron = require("node-cron")

const express = require('express')
const app = express()
	app.use(bodyParser.json())
	app.use(function(req, res) {
	  res.status(404).send({url: req.originalUrl + ' not found'})
	});
	app.listen(PORT)
	app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./api/routes/reportRoutes'); //importing route
const Report = require('./api/models/report') //created model loading here --- Why does the app break if I remove?????
// it breaks if put after the routes(app)
	routes(app); //register the route

const mongoose = require('mongoose')
	mongoose.Promise = global.Promise
  mongoose.connect('mongodb://localhost/Reportdb', { useNewUrlParser: true })   

const Reports = require('./api/controllers/reportController')
	cron.schedule("* * * * *", function() {
		// this will run a crawl script that fectch then creates a new Report instance from the data
		Reports.crawl2()
	});
	
console.log('Report RESTful API server started on: ' + PORT);


const PORT = process.env.PORT || 3000


const REPORT = require('./api/models/report') //created model loading here --- Why does the app break if I remove????? it breaks if put after the routes(app)


const routes = require('./api/routes/reportRoutes'); //importing route
	const express = require('express')
		const app = express()
			app.listen(PORT)

			const bodyParser = require('body-parser')
			app.use(bodyParser.json())
			app.use(bodyParser.urlencoded({ extended: true }))
			
			app.use(function(req, res) {
			  res.status(404).send({url: req.originalUrl + ' not found'})
			});

routes(app); //register the route


const mongoose = require('mongoose')
	mongoose.Promise = global.Promise
	mongoose.connect('mongodb://localhost/Reportdb', { useNewUrlParser: true }) 


const Reports = require('./api/controllers/reportController')
	const cron = require("node-cron")
	cron.schedule("* * * * *", function() {
		Reports.crawl2()
	});
	

console.log('Report RESTful API server started on: ' + PORT);



const mongoose = require('mongoose')
	mongoose.Promise = global.Promise
	mongoose.connect('mongodb://localhost/Reportdb', { useNewUrlParser: true }) 
		const REPORT = require('./api/models/report') //created model loading here --- Why does the app break if I remove????? it breaks if put after the routes(app)	


const express = require('express')
	const app = express()
		const PORT = process.env.PORT || 3000
			app.listen(PORT)
		const bodyParser = require('body-parser')
			app.use(bodyParser.json())
			app.use(bodyParser.urlencoded({ extended: true }))
	const routes = require('./api/routes/reportRoutes'); //importing route
		routes(app); 
		

const cron = require("node-cron")
	cron.schedule("* * * * *", function() {
		const Reports = require('./api/controllers/reportController')
			Reports.crawl2()
	});

console.log('Report  API server started on: ' + PORT);
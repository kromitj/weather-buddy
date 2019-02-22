'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
	currentTemp: {
		type: String,
	},
	currentTempLow: {
		type: String,
	},
	currentTempHigh: {
		type: String,
	},
	currentWindDirection: {
		type: String,
	},
	currentWindSpeed: {
		type: String,
	},
	baseCondition: {
		type: String,
	},
	cloudCover: {
		type: String
	},
	precipitation: {
		type: String
	},
	pastSnow24: {
		type: String
	},
	pastSnow48: {
		type: String
	},
	pastSnow72: {
		type: String
	},
	pastSnow7: {
		type: String
	},
	futureTempLow24: {
		type: String,
	},
	futureTempHigh24: {
		type: String,
	},
	futureSnow24: {
		type: String,
	},
	futureTempLow48: {
		type: String,
	},
	futureTempHigh48: {
		type: String,
	},
	futureSnow48: {
		type: String,
	},
	futureTempLow72: {
		type: String,
	},
	futureTempHigh72: {
		type: String,
	},
	futureSnow72: {
		type: String,
	},
	Created_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Reports', ReportSchema);
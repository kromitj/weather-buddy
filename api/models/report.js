'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
	currentTemp: {
		type: Number,
	},
	currentTempLow: {
		type: Number,
	},
	currentTempHigh: {
		type: Number,
	},
	currentWindDirection: {
		type: String,
	},
	currentWindSpeed: {
		type: Number,
	},
	baseCondition: {
		type: String,
	},
	cloudCover: {
		type: String
	},
	precipitation: {
		type: Number
	},
	pastSnow24: {
		type: Number
	},
	pastSnow48: {
		type: Number
	},
	pastSnow72: {
		type: Number
	},
	pastSnow7: {
		type: Number
	},
	futureTempLow24: {
		type: Number,
	},
	futureTempHigh24: {
		type: Number,
	},
	futureSnow24: {
		type: Number,
	},
	futureTempLow48: {
		type: Number,
	},
	futureTempHigh48: {
		type: Number,
	},
	futureSnow48: {
		type: Number,
	},
	futureTempLow72: {
		type: Number,
	},
	futureTempHigh72: {
		type: Number,
	},
	futureSnow72: {
		type: Number,
	},
	Created_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Reports', ReportSchema);
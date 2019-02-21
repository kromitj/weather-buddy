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
		type: Number,
	},
	currentWindSpeed: {
		type: Number,
	},
	baseCondition: {
		type: String,
	},
	percipitation: {
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
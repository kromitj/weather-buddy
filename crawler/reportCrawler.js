	const resultNewRecordProps = {
		currentTemp:	null,
		currentTempLow:	null,
		currentTempHigh:	null,
		currentWindDirection:	null,
		currentWindSpeed:	null,
		baseCondition:	null,
		cloudCover:	null ,
		precipitation:	null,
		pastSnow24:	null,
		pastSnow48:	null,
		pastSnow72:	null,
		pastSnow7:	null,
		futureTempLow24:	null,
		futureTempHigh24:	null,
		futureSnow24:	null,
		futureTempLow48:	null,
		futureTempHigh48:	null,
		futureSnow48:	null,
		futureTempLow72:	null,
		futureTempHigh72:	null,
		futureSnow72:	null
}

class ReportCrawler{
	constructor() {
   
  }

  crawl(callback) {
		const rp = require('request-promise');
		const url = 'https://www.steamboat.com/';
	  	rp(url)
			  .then(function(html){
					const $ = require('cheerio');
				  	const weather = $('.conditions-weather', html)

				  	resultNewRecordProps.currentTemp = $('.switchable-stat-imperial', weather).html()
				  	resultNewRecordProps.cloudCover = $('.head-metric-description', weather)[0].children[0].data
						resultNewRecordProps.baseCondition = $('.weather-snow-top-amount > .switchable-stat > .switchable-stat-imperial', weather)[0].children[0].data

						const weatherMetrics = $('.weather-metrics-item > .switchable-stat > .switchable-stat-item', weather)
						resultNewRecordProps.currentWindDirection = weatherMetrics[0].children[0].data
						resultNewRecordProps.currentWindSpeed = weatherMetrics[2].children[0].data
						resultNewRecordProps.pastSnow24 = weatherMetrics[4].children[0].data
						resultNewRecordProps.pastSnow48 = weatherMetrics[6].children[0].data
						resultNewRecordProps.pastSnow7 = weatherMetrics[8].children[0].data

						resultNewRecordProps.pastSnow72 =  $('.condition-snippet-content-unit', html)[0].children[0].data
						
						const futureSnow = $('.weather-forecast-snowfall-list-item > .switchable-stat > span', weather)
						const snowForcast = []
						for (let i = 0; i < futureSnow.length; i++ ) {
							snowForcast.push(futureSnow[i].children[0].data)
						}
						resultNewRecordProps.futureSnow24 = snowForcast[0]
						resultNewRecordProps.futureSnow48 = snowForcast[2]
						resultNewRecordProps.futureSnow72 = snowForcast[4]

						const futureTemps = $('.weather-forecast-list-item-condition-temp > .switchable-stat > span', weather)
						const forcast = []
						// console.log(futureTemps)
						for (let i = 0; i < futureTemps.length; i += 2) {
							// const temp = $('.switchable-stat-imperial',futureTemps[i])
							forcast.push(futureTemps[i].children[0].data)
						}	
						console.log(forcast)
						resultNewRecordProps.futureTempHigh24 = forcast[0]
						resultNewRecordProps.futureTempLow24 = forcast[1]
						resultNewRecordProps.futureTempHigh48 = forcast[2]
						resultNewRecordProps.futureTempLow48 = forcast[3]
						resultNewRecordProps.futureTempHigh72 = forcast[4]
						resultNewRecordProps.futureTempLow72 = forcast[5]
						console.log(resultNewRecordProps)
						for (let prop in formater) {
							const formatedProp = formater[prop](resultNewRecordProps[prop])
							resultNewRecordProps[prop] = formatedProp
							// console.log(formatedProp)
						}
						console.log(resultNewRecordProps)
						// formatCrawed Data 
				    return callback(resultNewRecordProps)
			  })
			  .catch(function(err){
			    return callback(err)
			  })
		}
		vetRecordProps(props) {

		}
}


	const formater = {
		currentTemp:	function(prop) {
			if (!prop) return null
			return Number(prop)
		},
		currentTempLow:	function(prop) {
			if (!prop) return null
			return Number(prop)
		},
		currentTempHigh:	function(prop) {
			if (!prop) return prop
			return Number(prop)
		},
		currentWindDirection:	function(prop) {
			if (!prop) return null
			// Remove Wind Direction: 
			return prop.slice(16, prop.length)
		},
		currentWindSpeed:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(12, prop.length-4))
		},
		baseCondition:	function(prop) {
			if (!prop || prop == "--") return null
			return prop
		},
		cloudCover:	function(prop) {
			if (!prop) return null
			return prop
		} ,
		precipitation:	function(prop) {
			if (!prop) return null
			return prop
		},
		pastSnow24:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(15, prop.length-1))
		},
		pastSnow48:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(15, prop.length-1))
		},
		pastSnow72:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop)
		},
		pastSnow7:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(13, prop.length-1))
		},
		futureTempLow24:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(3, prop.length-1))
		},
		futureTempHigh24:	function(prop) {
				const a = prop.slice(3, prop.length-1)
			if (!prop || prop == "--") return null
			return Number(prop.slice(3, prop.length-1))
		},
		futureSnow24:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(0, prop.length-7))
		},
		futureTempLow48:	function(prop) {
			if (!prop || prop == "--") return null
				const b = prop.slice(3, prop.length-1)
			console.log("BLah: ", prop, b)
			return Number(prop.slice(3, prop.length-1))
		},
		futureTempHigh48:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(3, prop.length-1))
		},
		futureSnow48:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(0, prop.length-7))
		},
		futureTempLow72:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(3, prop.length-1))
		},
		futureTempHigh72:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(3, prop.length-1))
		},
		futureSnow72:	function(prop) {
			if (!prop || prop == "--") return null
			return Number(prop.slice(0, prop.length-7))
		}
}


module.exports = ReportCrawler





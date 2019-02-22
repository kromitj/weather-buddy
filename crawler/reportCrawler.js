class ReportCrawler{
	constructor() {
   
  }

 //  crawl(crawlStrategy, callback) {
	// 	const rp = require('request-promise');
	// 	const url = crawlStrategy.url
	//   	rp(url)
	// 		  .then(function(html){
	// 		  	console.log(html)
	// 				const $ = require('cheerio');
	// 				crawledData = {}
	// 					console.log("Yoooo")
	// 				console.log(crawlStrategy.targets.length)
	// 				for (target of crawlStrategy.targets) {
	// 					const crawledTarget = $(target.class, html)
	// 					crawledData[crawlStrategy.property] = crawledTarget
	// 				}
	// 		  	// const weather = $('.conditions-weather', html)
	// 		  	// const currentTemp = $('.switchable-stat-imperial', weather).text()
	// 		  	// console.log(currentTemp)
	// 		  	// const cloudCOver = $('.head-metric-description', weather).text()
	// 		    return callback(crawledData)
	// 		  })
	// 		  .catch(function(err){
	// 		    return callback(err)
	// 		  })
	// }

  crawl(callback) {
		const rp = require('request-promise');
		const url = 'https://www.steamboat.com/';
	  	rp(url)
			  .then(function(html){
					const $ = require('cheerio');
				  	const weather = $('.conditions-weather', html)

				  	const currentTemp = $('.switchable-stat-imperial', weather).html()
				  	const cloudCover = $('.head-metric-description', weather)[0].children[0].data
						const baseConditions = $('.weather-snow-top-amount', weather)
						const baseConditionFilter = $('.switchable-stat-item', baseConditions)[0].children[0].data
						const weatherMetrics = $('.weather-metrics-item > .switchable-stat > .switchable-stat-item', weather)
						const past72 = $('.condition-snippet-content-unit', html)[0].children[0].data
						const futureTemps = $('.weather-forecast-list-item-condition-temp > .switchable-stat > span', weather)
						const futureSnow = $('.weather-forecast-snowfall-list-item > .switchable-stat > span', weather)
						
						const snowForcast = []
						for (let i = 0; i < futureSnow.length; i++ ) {
							console.log(futureSnow[i].children[0].data)
							snowForcast.push(futureSnow[i].children[0].data)
						}
						const forcast = []
						// console.log(futureTemps)
						for (let i = 0; i < futureTemps.length; i += 2) {
							// const temp = $('.switchable-stat-imperial',futureTemps[i])
							forcast.push(futureTemps[i].children[0].data)
						}				 	
						console.log(snowForcast)
				  	// const cloudCOver = $('.head-metric-description', weather).text()
				    // return callback(weather.html())
				    return callback({currentTemp: currentTemp, cloudCover: cloudCover, baseCondition: baseConditionFilter, currentWindDirection: weatherMetrics[0].children[0].data, currentWindSpeed: weatherMetrics[3].children[0].data, pastSnow24: weatherMetrics[4].children[0].data, pastSnow48: weatherMetrics[6].children[0].data, pastSnow7: weatherMetrics[8].children[0].data, pastSnow72: past72, futureTempHigh24: forcast[0], futureTempLow24: forcast[1], futureTempHigh48: forcast[2], futureTempLow48: forcast[3], futureTempHigh72: forcast[4], futureTempLow72: forcast[5], futureSnow24: snowForcast[0], futureSnow48: snowForcast[2], futureSnow72: snowForcast[4]})
			  })
			  .catch(function(err){
			    return callback(err)
			  })
		}
}


module.exports = ReportCrawler

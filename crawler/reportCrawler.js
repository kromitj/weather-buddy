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
				  	const currentTemp = $('.switchable-stat-imperial', weather)
				  	console.log(currentTemp.html())
				  	// const cloudCOver = $('.head-metric-description', weather).text()
				    return callback({currentTemp: currentTemp.html()})
			  })
			  .catch(function(err){
			    return callback(err)
			  })
		}
}


module.exports = ReportCrawler

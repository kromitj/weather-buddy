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
				  	// const currentTemp = $('.switchable-stat-imperial', weather).text()
				  	// console.log(currentTemp)
				  	// const cloudCOver = $('.head-metric-description', weather).text()
				    return callback(weather.html())
			  })
			  .catch(function(err){
			    return callback(err)
			  })
		}
}


module.exports = ReportCrawler
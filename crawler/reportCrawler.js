const rp = require('request-promise');
const url = 'https://www.steamboat.com/';
const $ = require('cheerio');


class ReportCrawler{
	constructor() {
   
  }
  crawl(callback) {
  	rp(url)
		  .then(function(html){
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
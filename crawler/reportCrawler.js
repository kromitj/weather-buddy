const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';



class ReportCrawler{
	constructor() {
   
  }
  crawl(callback) {
  	rp(url)
		  .then(function(html){
		    return callback(html)
		  })
		  .catch(function(err){
		    return callback(err)
		  })
		}
}


module.exports = ReportCrawler
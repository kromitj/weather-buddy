*	Get Crawl to work
	* design a crawlStratagy datastruct


[CrawlReq, CrawlReq,...]
CrawlReq = {
	url: String,
	targets: [
		{
			class: String, // ".switchable-stat-imperial"
			property: String //  Schema prop for Report
		},
		...
	]
}


<!-- example -->
const crawlStratagy = {
	url: 'https://www.steamboat.com/',
	targets: [
		{			
			class: ".switchable-stat-imperial", 
			property: "currentTemp"
			
		},
		{			
			class: ".head-metric-description", 
			property: "cloudCover"
		}
	]
}
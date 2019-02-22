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

const targets = [
	".switchable-stat-imperial", // current

]

const ReportSchema = new Schema({
	currentTemp: {
		type: Number,
		target: "",
		target: ".switchable-stat-imperial"
	},
	currentTempLow: {
		type: Number,
		target: "",
	},
	currentTempHigh: {
		type: Number,
		target: "",
	},
	currentWindDirection: {
		type: Number,
		target: ".switchable-stat-item",
	},
	currentWindSpeed: {
		type: Number,
		target: "",
	},
	baseCondition: {
		type: String,
		target: "",
	},
	cloudCover: {
		type: String
		target: "",
	},
	precipitation: {
		type: Number
		target: "",
	},
	futureTempLow24: {
		type: Number,
		target: "",
	},
	futureTempHigh24: {
		type: Number,
		target: "",
	},
	futureSnow24: {
		type: Number,
		target: "",
	},
	futureTempLow48: {
		type: Number,
		target: "",
	},
	futureTempHigh48: {
		type: Number,
		target: "",
	},
	futureSnow48: {
		type: Number,
		target: "",
	},
	futureTempLow72: {
		type: Number,
		target: "",
	},
	futureTempHigh72: {
		type: Number,
		target: "",
	},
	futureSnow72: {
		type: Number,
		target: "",
	},
	Created_date: {
    type: Date,
    target: "",
    default: Date.now
  }
})
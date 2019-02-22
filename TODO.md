	const resultNewRecordProps = {
		currentTemp:	{value: null, format: null},
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

const resultNewRecordProps = {
	currentTemp:	{
		value: null, 
		format: function(prop) {
			if (!prop) return null
			return Number(prop)
		}
	}
}
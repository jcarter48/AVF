var getData = function(lat, lng) {

	var url = "http://api.wunderground.com/api/465b4ffeedaac08a/forecast/geolookup/conditions/q/" + lat + "," + lng + ".json";

	var onLoad = function() {

		var weatherInfo = JSON.parse(this.responseText);

		var weatherArray = [];

		var weatherObj = {
			icon : weatherInfo.forecast.simpleforecast.forecastday[0].icon_url,
			conditions : weatherInfo.forecast.simpleforecast.forecastday[0].conditions,
			city : weatherInfo.location.city,
			country : weatherInfo.location.country_name,
			time : weatherInfo.forecast.txt_forecast.date,
			high : weatherInfo.forecast.simpleforecast.forecastday[0].high.fahrenheit,
			low : weatherInfo.forecast.simpleforecast.forecastday[0].low.fahrenheit,
			month : weatherInfo.forecast.simpleforecast.forecastday[0].date.month,
			day : weatherInfo.forecast.simpleforecast.forecastday[0].date.day,
			year : weatherInfo.forecast.simpleforecast.forecastday[0].date.year,
			aveWind : weatherInfo.forecast.simpleforecast.forecastday[0].avewind.mph,
			maxWind : weatherInfo.forecast.simpleforecast.forecastday[0].maxwind.mph,
			tempNow : weatherInfo.current_observation.temp_f
		};

		for (var i = 0,
		    j = weatherInfo.forecast.txt_forecast.forecastday.length; i < j; i++) {
			weatherArray.push({
				fcTitle : weatherInfo.forecast.txt_forecast.forecastday[i].title,
				fcDesc : weatherInfo.forecast.txt_forecast.forecastday[i].fcttext,
				fcIcon : weatherInfo.forecast.txt_forecast.forecastday[i].icon_url
			});
		}

		var dbModule = require("database");
		weatherObj.forecast = weatherArray;
		dbModule.save(weatherObj);

	};

	var onError = function(x) {
		console.log("error getting data", x.error);
	};

	var xhr = Ti.Network.createHTTPClient({
		onload : onLoad,
		onerror : onError,
		timeout : 3000
	});

	xhr.open("GET", url);
	xhr.send();
};
exports.getData = getData;

var dataPull = function(lat, lng) {

	//note: lat should be "40.689244"
	//var url = "http://api.wunderground.com/api/465b4ffeedaac08a/forecast/geolookup/q/" + geoModule.lat + "," + geoModule.lng + ".json";
	var url = "http://api.wunderground.com/api/465b4ffeedaac08a/forecast/geolookup/q/" + lat + "," + lng + ".json";

	//console.log(lat + "....");

	if (Ti.Network.online) {
		var getData = Ti.Network.createHTTPClient({
			onload : function(e) {
				//console.log(e);
				var weatherInfo = JSON.parse(this.responseText);

				//console.log(weatherInfo);

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
					maxWind : weatherInfo.forecast.simpleforecast.forecastday[0].maxwind.mph

				};

				var ui = require("ui");
				ui.buildUI(weatherObj);
				//console.log(weatherObj);
			}
		});

		getData.open("GET", url);
		getData.send();

	} else {
		alert("Network currently unavailable.");
	}
};
exports.dataPull = dataPull;

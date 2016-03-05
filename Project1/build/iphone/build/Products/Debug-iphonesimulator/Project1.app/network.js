var dataPull = function(lat, lng) {

	//note: lat should be "40.689244"
	//var url = "http://api.wunderground.com/api/465b4ffeedaac08a/forecast/geolookup/q/" + geoModule.lat + "," + geoModule.lng + ".json";
	var url = "http://api.wunderground.com/api/465b4ffeedaac08a/forecast/geolookup/conditions/q/" + lat + "," + lng + ".json";
	var onLoad = function(x) {
		//console.log(x);
		//console.log(JSON.stringify(x.source));

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
			maxWind : weatherInfo.forecast.simpleforecast.forecastday[0].maxwind.mph,
			tempNow : weatherInfo.current_observation.temp_f
			//current temp
			//avewind maxwin lower in hierarchy
		};

		// var fCastDays = [];
		// //+= 2 will give every other one----------------------------------------▼
		// for (i-0, j-weatherInfo.forecast.txt_forecast.forecastday.length; i<j; i++){
		// var fcast = {
		// icon: weatherInfo.forecast.txt_forecastday[i].icon,
		// title: weatherInfo.forecast.txt_forecastday[i].title,
		// fcttext: weatherInfo.forecast.txt_forecastday[i].fcttext
		// };
		// fCastDays.push(fCast);
		// }
		// console.log("fCastDays: " + fCastDays);
		// weatherObj.days = fCastDays;
		//var uiModule = require("ui");
		uiModule.buildUI(weatherObj);
	};
	var onError = function(x) {
		console.log(x);
		console.log(JSON.stringify(x.source));
	};
	//console.log(lat + "....");

	if (Ti.Network.online) {
		var getData = Ti.Network.createHTTPClient({
			onload : onLoad,
			onerror : onError,
			timeout : 3000
		});
		getData.open("GET", url);
		getData.send();

	} else {
		alert("Network currently unavailable.");
	}
};
exports.dataPull = dataPull;

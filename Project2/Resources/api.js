var getData = function(lat, lng){
	
	var url = "http://api.wunderground.com/api/465b4ffeedaac08a/forecast/geolookup/conditions/q/" + lat + "," + lng + ".json";
	//console.log("..." + url);
	var onLoad = function(){
		
		var weatherInfo = JSON.parse(this.responseText);
		//console.log(weatherInfo);
		
		//var weatherArray = [];
		
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
		
		// for(var i=0, j=result.data.children.length; i<j; i++){
			// weatherArray.push ({ 
				// title: result.data.children[i].data.title,
				// author: result.data.children[i].data.author,
				// thumb : result.data.children[i].data.thumbnail 
			// });
		// } 
		//console.log(weatherArray);
		
		var dbModule = require("database");
		dbModule.save(weatherObj);
		//dbModule.save(weatherArray);
		
	};
	
	var onError = function(x){
		console.log("error getting data", x.error);
	};
	
	var xhr = Ti.Network.createHTTPClient({
		onload: onLoad,
		onerror: onError,
		timeout: 3000
	});
	
	xhr.open("GET", url);
	xhr.send();	
};
exports.getData = getData;

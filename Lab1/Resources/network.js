var stockRequest = function() {

	var url = "http://api.wunderground.com/api/465b4ffeedaac08a/geolookup/forecast/q/FL/Orlando.json";
	var getData = Ti.Network.createHTTPClient({
		onload : function() {
			var stockInfo = JSON.parse(this.responseText);
			console.log(stockInfo);

			var stockObj = {
				name : stockInfo.Name,
				symbol : stockInfo.Symbol,
				price : stockInfo.LastPrice,
				hi : stockInfo.High,
				lo : stockInfo.Low
			};
			var uiModule = require("ui");
			uiModule.buildUI(stockObj);
			console.log(stockObj);

		},
		onerror : function() {

		},
		timeout : 3000
	});
	getData.open("GET", url);
	getData.send();

};

exports.stockRequest = stockRequest;
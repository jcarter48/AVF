var getCoords = function() {
	//console.log(x.coords.latitude + "...");
	if (Ti.Platform.osname === "android") {
		Ti.Geolocation.purpose = "Can we use your location?";
		console.log("....");
		// var lat = x.coords.latitude;
		// var lng = x.coords.longitude;
		var lat = 40.689244;
		var lng = -71.044514;

		var netModule = require("network");
		netModule.dataPull(lat, lng);
	} else {

	}

	Ti.Geolocation.getCurrentPosition(function(x) {
		//console.log(x);
		var lat = x.coords.latitude;
		var lng = x.coords.longitude;

		// console.log("lat: " + lat);
		// console.log("lng: " + lng);

		//var uiModule = require("ui");
		//uiModule.buildUI(lat, lng);

		var netModule = require("network");
		netModule.dataPull(lat, lng);

	});

};

exports.getCoords = getCoords;

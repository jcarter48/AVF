var getCoords = function() {

	if (Ti.Platform.osname === "android") {
		Ti.Geolocation.purpose = "Can we use your location?";
		var lat = x.coords.latitude;
		var lng = x.coords.longitude;

		//var uiModule = require();
		//uiModule.buildUI(lat, lng);
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

		var uiModule = require("network");
		uiModule.dataPull(lat, lng);

	});

};

exports.getCoords = getCoords;

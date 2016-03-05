var getCoords = function() {

	if (Ti.Platform.osname === "android") {
		Ti.Geolocation.purpose = "Can we use your location?";
		var lat = 40.689244;
		var lng = -71.044514;

		var uiModule = require();
		uiModule.buildGeo(lat, lng);
	} else {

	}

	Ti.Geolocation.getCurrentPosition(function(x) {
		console.log(x);
		var lat = x.coords.latitude;
		var lng = x.coords.longitude;

		console.log("lat: " + lat);
		console.log("lng: " + lng);

		var uiModule = require("ui");
		uiModule.buildGeo(lat, lng);

	});

};

exports.getCoords = getCoords;


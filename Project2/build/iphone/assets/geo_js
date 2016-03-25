var getCoords = function() {
	Ti.Geolocation.getCurrentPosition(function(x) {
		var lat = x.coords.latitude;
		var lng = x.coords.longitude;

		var netModule = require("api");
		netModule.getData(lat, lng);

	});

};

exports.getCoords = getCoords;
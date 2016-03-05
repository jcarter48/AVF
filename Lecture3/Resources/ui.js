var format = {
	color : "00f",
	top : 20,
	backgroundColor : "fff"
};

var buildGeo = function(lat, lng) {
	var win = Ti.UI.createWindow({
		backgroundColor: "ccc",
		layout : "vertical"
	});
	
	var latLbl = Ti.UI.createLabel(format);
	latLbl.text = "Latitude: " + lat;
	var lngLbl = Ti.UI.createLabel(format);
	lngLbl.text = "Longitude: " + lng;

	win.add(latLbl);
	win.add(lngLbl);
	win.open();
};

exports.buildGeo = buildGeo; 
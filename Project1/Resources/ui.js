var format1 = {
	color : "fff",
	top : 40,
	//backgroundColor : "fff",
	font: {fontSize: 60}
};

var format2 = {
	color : "fff",
	top : 40,
	//backgroundColor : "fff",
	font: {fontSize: 40}
};

var buildUI = function(wObj) {
	var win = Ti.UI.createWindow({
		backgroundImage : "background.png",
		backgroundRepeat: "repeat-y",
		layout : "vertical"
	});
	// var latLbl = Ti.UI.createLabel(format);
	// latLbl.text = "Latitude: " + lat;
	// var lngLbl = Ti.UI.createLabel(format);
	// lngLbl.text = "Longitude: " + lng;
	// var icon = Ti.UI.createImageView({
		// image: wObj.icon,
		// top: 20
	// });
	
	var dateLbl = Ti.UI.createLabel(format2);
	dateLbl.text = wObj.month + "/" + wObj.day + "/" + wObj.year;
	var timeLbl = Ti.UI.createLabel(format2);
	timeLbl.text = wObj.time;
	var whereLbl = Ti.UI.createLabel(format2);
	whereLbl.text = wObj.city + ", " +wObj.country;
	var tempLbl = Ti.UI.createLabel(format1);
	tempLbl.text = "High: " + wObj.high + ", Low: " + wObj.low;
	var iconLbl = Ti.UI.createLabel(format1);
	iconLbl.text = "Conditions: " + wObj.conditions;
	var aveWindLbl = Ti.UI.createLabel(format1);
	aveWindLbl.text = "Average: " + wObj.aveWind + " mph";
	var maxWindLbl = Ti.UI.createLabel(format1);
	maxWindLbl.text = "Max: " + wObj.maxWind + " mph";
	//win.add(latLbl);
	//win.add(lngLbl);
	// win.add(icon);
	win.add(dateLbl);
	win.add(timeLbl);
	win.add(whereLbl);
	win.add(tempLbl);
	win.add(iconLbl);
	win.add(aveWindLbl);
	win.add(maxWindLbl);
	win.open();
};

exports.buildUI = buildUI;

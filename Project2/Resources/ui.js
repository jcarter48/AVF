Ti.UI.setBackgroundColor("#ffffff");
var win = Ti.UI.createWindow({
	backgroundImage : "background.png",
	backgroundRepeat : "repeat-y",
	//layout : "vertical",
	top : 20
});

var pWidth = Ti.Platform.displayCaps.platformWidth;
var itemCount = 8;
var itemsInRow = 8;
var margin = 10;
var trueCanvasWidth = pWidth - (margin * (itemsInRow + 1));
var size = trueCanvasWidth / itemsInRow;
var viewContainer1 = Ti.UI.createScrollView({
	layout : "vertical",
	top : 10,
	showVerticalScrollIndicator : true
});

var pWidth = Ti.Platform.displayCaps.platformWidth;
console.log(pWidth);

var format1 = {
	text : "...",
	color : "#ffffff",
	font : {
		fontSize : 32
	}
};

var format2 = {
	text : "...",
	color : "#ffffff",
	font : {
		fontSize : 16
	}
};

var dateLbl = Ti.UI.createLabel(format2);
var timeLbl = Ti.UI.createLabel(format2);
var tempNowLbl = Ti.UI.createLabel(format1);
var tempLbl = Ti.UI.createLabel(format1);
var windSpeedLbl = Ti.UI.createLabel(format2);
var avgMaxWindLbl = Ti.UI.createLabel(format2);
var whereLbl = Ti.UI.createLabel(format1);
var icon = Ti.UI.createImageView();

win.add(viewContainer1);
win.open();

var buildUI = function(wObj) {
	dateLbl.text = wObj.month + "/" + wObj.day + "/" + wObj.year;
	timeLbl.text = wObj.time;
	tempNowLbl.text = wObj.tempNow + "°f" + ", " + wObj.conditions;
	tempLbl.text = "H " + wObj.high + "°f, L " + wObj.low + "°f";
	windSpeedLbl.text = "Wind Speed:";
	avgMaxWindLbl.text = "Avg: " + wObj.aveWind + " mph" + ", Max " + wObj.maxWind + " mph";
	whereLbl.text = wObj.city + ", " + wObj.country;
	icon.image = wObj.icon;

	viewContainer1.add(dateLbl);
	viewContainer1.add(timeLbl);
	viewContainer1.add(tempNowLbl);
	viewContainer1.add(tempLbl);
	viewContainer1.add(windSpeedLbl);
	viewContainer1.add(avgMaxWindLbl);
	viewContainer1.add(whereLbl);
	viewContainer1.add(icon);

	//console.log(wObj.forecast[0].fcTitle);
	//console.log(wObj.length);

	for (var i = 0,
	    j = wObj.forecast.length; i < j; i++) {
		var fcLabel = Ti.UI.createLabel({
			text : wObj.forecast[i].fcTitle,
			color : "#fff",
			font : {
				fontSize : 20
			},
			bottom : 20
		});

		// var desc = Ti.UI.createLabel(format1);
		// desc.text = wObj.forecast[i].fcDesc;
		// viewContainer2.add(desc);

		var icon1 = Ti.UI.createImageView({
			width : size,
			height : size
		});
		icon1.image = wObj.forecast[i].fcIcon;
		fcLabel.add(icon1);
		viewContainer1.add(fcLabel);

	}
};
exports.buildUI = buildUI;

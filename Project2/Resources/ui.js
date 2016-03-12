var win = Ti.UI.createWindow({
		backgroundImage : "background.png",
		backgroundRepeat: "repeat-y",
		layout : "vertical",
	});
	
var pWidth = Ti.Platform.displayCaps.platformWidth;
console.log(pWidth);
var viewContainer = Ti.UI.createScrollView({
	//borderColor: "red",
	layout: "vertical",
	top: 20,
	//To Scroll Horizontally, set contentHeight to device size and set contentWidth to larger than device, i.e.
	//contentWidth: 300,
	//contentHeight: 600
	//To Scroll Vertically, set contentWidth to device size, i.e.
	contentWidth: 768,
	showVerticalScrollIndicator: true
	//disablebounce: true
});
	
var format1 = {
	text: "...",
	color : "#ffffff",
	//top : 40,
	left : 10,
	//backgroundColor : "fff",
	font: {fontSize: 30}
};

var format2 = {
	text: "...",
	color : "#ffffff",
	//top : 20,
	//left: 64,
	//backgroundColor : "fff",
	font: {fontSize: 30}
};

var format3 = {
	text: "...",
	color : "#ffffff",
	//top : 20,
	//left: 64,
	//backgroundColor : "fff",
	font: {fontSize: 30}
};

var dateLbl = Ti.UI.createLabel(format1);
var timeLbl = Ti.UI.createLabel(format1);
var tempNowLbl = Ti.UI.createLabel(format1);	
var iconLbl = Ti.UI.createLabel(format1);
var tempLbl = Ti.UI.createLabel(format1);
var aveWindLbl = Ti.UI.createLabel(format1);
var maxWindLbl = Ti.UI.createLabel(format1);
var whereLbl = Ti.UI.createLabel(format1);	
var icon = Ti.UI.createImageView({
	//height: 60,
	//width : 60
	});
	
win.add(viewContainer);	
win.open();

var buildUI = function(wObj){
	dateLbl.text = wObj.month + "/" + wObj.day + "/" + wObj.year;
	timeLbl.text = wObj.time;
	tempNowLbl.text = "Temp: " + wObj.tempNow + "°f";
	iconLbl.text = wObj.conditions;
	tempLbl.text = "High: " + wObj.high + "°f, Low: " + wObj.low + "°f";
	aveWindLbl.text = "Average: " + wObj.aveWind + " mph";
	maxWindLbl.text = "Max: " + wObj.maxWind + " mph";
	whereLbl.text = wObj.city + ", " +wObj.country;
	icon.image = wObj.icon;
	
	viewContainer.add(dateLbl);
	viewContainer.add(timeLbl);
	viewContainer.add(tempNowLbl);
	viewContainer.add(iconLbl);
	viewContainer.add(tempLbl);
	viewContainer.add(aveWindLbl);
	viewContainer.add(maxWindLbl); 
	viewContainer.add(whereLbl);
	viewContainer.add(icon);
	
	//console.log(wObj.forecast[0].fcTitle);
	//console.log(wObj.length);
	
	for (var i=0, j=wObj.forecast.length; i<j; i++){
		viewContainer.add(Ti.UI.createLabel({
			text : wObj.forecast[i].fcTitle,
			color: "#fff",
			//top: 50
	}));
	
	// var desc = Ti.UI.createLabel(format1);
	// desc.text = wObj.forecast[i].fcDesc;
	// viewContainer.add(desc);
	
	var icon1 = Ti.UI.createImageView();
	icon1.image = wObj.forecast[i].fcIcon;
	viewContainer.add(icon1);
	}
};

exports.buildUI = buildUI;
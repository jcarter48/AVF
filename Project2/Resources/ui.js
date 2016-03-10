var win = Ti.UI.createWindow({
		backgroundImage : "background.png",
		backgroundRepeat: "repeat-y",
		layout : "vertical",
	});
	
var format1 = {
	text: "...",
	color : "#ffffff",
	top : 40,
	left : 64,
	//backgroundColor : "fff",
	font: {fontSize: 30}
};

var format2 = {
	text: "...",
	color : "#ffffff",
	top : 20,
	left: 64,
	//backgroundColor : "fff",
	font: {fontSize: 30}
};

var format3 = {
	text: "...",
	color : "#ffffff",
	top : 20,
	left: 64,
	//backgroundColor : "fff",
	font: {fontSize: 30}
};

var format4 = {
	text: "...",
	color : "#ffffff",
	top : 20,
	left: 64,
	//backgroundColor : "fff",
	font: {fontSize: 40}
};

var format5 = {
	text: "...",
	color : "#ffffff",
	top : 20,
	left: 64,
	//backgroundColor : "fff",
	font: {fontSize: 40}
};

var format6 = {
	text: "...",
	color : "#ffffff",
	top : 200,
	//backgroundColor : "fff",
	font: {fontSize: 60}
};

var dateLbl = Ti.UI.createLabel(format1);
var timeLbl = Ti.UI.createLabel(format2);
var tempNowLbl = Ti.UI.createLabel(format4);	
var iconLbl = Ti.UI.createLabel(format5);
var tempLbl = Ti.UI.createLabel(format3);
var aveWindLbl = Ti.UI.createLabel(format3);
var maxWindLbl = Ti.UI.createLabel(format3);
var whereLbl = Ti.UI.createLabel(format6);	
var icon = Ti.UI.createImageView({
	height: 60,
	width : 60
	});
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
	
	win.add(dateLbl);
	win.add(timeLbl);
	win.add(tempNowLbl);
	win.add(iconLbl);
	win.add(tempLbl);
	win.add(aveWindLbl);
	win.add(maxWindLbl); 
	win.add(whereLbl);
	win.add(icon);
	
	// for (var i=0, j=dbInfo.length; i<j; i++){
		// win.add(Ti.UI.createLabel({
			// text : "Title: " + dbInfo[i].title,
			// color: "#00f",
			// top: 50
	// }));
// 	
	// var author = Ti.UI.createLabel(format);
	// author.text = "Author: " + dbInfo[i].author;
	// win.add(author);
// 	
	// var thumb = Ti.UI.createImageView();
	// thumb.image = dbInfo[i].img;
	// win.add(thumb);
	// }
};

exports.buildUI = buildUI;
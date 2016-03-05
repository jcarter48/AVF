var win = Ti.UI.createWindow({
		backgroundImage : "background.png",
		backgroundRepeat: "repeat-y",
		layout : "vertical"
	});
	
var format1 = {
	text: "...",
	color : "#ffffff",
	top : 40,
	//backgroundColor : "fff",
	font: {fontSize: 60}
};

var format2 = {
	text: "...",
	color : "#ffffff",
	top : 40,
	//backgroundColor : "fff",
	font: {fontSize: 40}
};

var dateLbl = Ti.UI.createLabel(format2);
var timeLbl = Ti.UI.createLabel(format2);
var whereLbl = Ti.UI.createLabel(format2);	
var tempNowLbl = Ti.UI.createLabel(format1);	
var tempLbl = Ti.UI.createLabel(format1);
var iconLbl = Ti.UI.createLabel(format1);
var aveWindLbl = Ti.UI.createLabel(format1);
var maxWindLbl = Ti.UI.createLabel(format1);
	win.open();
	
var buildUI = function(wObj) {
	// var icon = Ti.UI.createImageView({
		// image: wObj.icon,
		// top: 20,
		// width: 100,
		// height: 100
	// });
	
	dateLbl.text = wObj.month + "/" + wObj.day + "/" + wObj.year;
	timeLbl.text = wObj.time;
	whereLbl.text = wObj.city + ", " +wObj.country;
	tempNowLbl.text = "Current Temp: " + wObj.tempNow;
	tempLbl.text = "High: " + wObj.high + ", Low: " + wObj.low;
	iconLbl.text = "Conditions: " + wObj.conditions;
	aveWindLbl.text = "Average: " + wObj.aveWind + " mph";
	maxWindLbl.text = "Max: " + wObj.maxWind + " mph";


	win.add(dateLbl);
	win.add(timeLbl);
	win.add(whereLbl);
	win.add(tempNowLbl);
	win.add(tempLbl);
	win.add(iconLbl);
	win.add(aveWindLbl);
	win.add(maxWindLbl); 

	// for (i-0, j=wObj.days.length; i<j; i++){
		// var title = Ti.UI.createLabel({
			// text : wObj.days[i].title,
			// top: 30
		// });
		// win.add(title);
		// win.add(Ti.UI.createLabel({
			// text: wObj.days[i].fcttext,
			// top: 30
		// }));
		// win.add(Ti.UI.createImageView({
			// image: wObj.days[i].icon
		// }));
	// }
	
	// win.add(icon);
	
};

exports.buildUI = buildUI;

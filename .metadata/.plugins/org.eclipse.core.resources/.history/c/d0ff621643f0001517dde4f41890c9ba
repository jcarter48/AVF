var uiModule = require("ui"); 

if (Ti.Network.online){
	var adbModule = require("adb");
	adbModule.authenticate();
} else {
	alert("no network");
	//read from LS
	var dbModule = require("database");
	dbModule.read();
}
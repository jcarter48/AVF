var uiModule = require("ui");

if (Ti.Network.online) {
	var geoModule = require("geo");
	geoModule.getCoords();
	var dbModule = require("database");

	console.log("...");
} else {
	alert("no network");
	//read from LS
	var dbModule = require("database");
	dbModule.read();

	console.log("...");

}

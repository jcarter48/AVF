//app launches
//net check
//if no, alert, load from LS
//if yes:
//get data
//sava data
//read from LS
//populate UI from LS

var uiModule = require("ui");

if (Ti.Network.online){
	// var apiModule = require("api");
	// apiModule.getData();
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

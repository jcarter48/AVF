if (Ti.Network.online) {
	// var network = require("network");
	// network.dataPull();
	var uiModule = require("ui");
	var geoModule = require("geo");
	geoModule.getCoords();
} else {
	alert("please enable network");
}
if (Ti.Network.online) {
	// var network = require("network");
	// network.dataPull();
	var geoModule = require("geo");
	geoModule.getCoords();
} else {
	alert("please enable network");
}
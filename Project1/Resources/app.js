if (Ti.Network.online) {
	var uiModule = require("ui");
	var geoModule = require("geo");
	geoModule.getCoords();
} else {
	alert("please enable network");
}
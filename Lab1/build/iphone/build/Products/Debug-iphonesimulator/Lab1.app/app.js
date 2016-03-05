if (Titanium.Network.online) {
	var network = require("network");
	network.stockRequest();
} else {
	alert("please enable network");
};
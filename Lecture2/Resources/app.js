// app launches -- app.js
// net check
// if no, alert
// if yes, pull data, create custom object -- network.js
// populate ui from custom object -- ui.js

if (Titanium.Network.online) {
	var network = require("network");
	network.stockRequest();
} else {
	alert("please enable network");
};


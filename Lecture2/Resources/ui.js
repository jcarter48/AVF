var buildUI = function(dataObj) {
	var win = Ti.UI.createWindow({
		backgroundColor : "ccc",
		layout : "vertical"
	});
	var name = Ti.UI.createLabel({
		color : "000",
		text : "Name: " + dataObj.name,
		top : 20
	});
	var symbol = Ti.UI.createLabel({
		color : "000",
		text : "Symbol: " + dataObj.symbol,
		top : 20
	});
	var price = Ti.UI.createLabel({
		color : "000",
		text : "Price" + dataObj.price,
		top : 20
	});
	var hi = Ti.UI.createLabel({
		color : "000",
		text : "High: " + dataObj.hi,
		top : 20
	});
	var lo = Ti.UI.createLabel({
		color : "000",
		text : "Low " + dataObj.lo,
		top : 20
	});
	win.add(name);
	win.add(symbol);
	win.add(price);
	win.add(hi);
	win.add(lo);
	win.open();
};

exports.buildUI = buildUI;

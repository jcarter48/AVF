var read = function() {
	var db = Ti.Database.open("weatherDB");
	db.execute("CREATE TABLE IF NOT EXISTS weatherTBL (id INTEGER PRIMARY KEY, icon TEXT, conditions TEXT, city TEXT, country TEXT, time TEXT, high TEXT, low TEXT, month TEXT, day TEXT, year TEXT, aveWind TEXT, maxWind TEXT, tempNow TEXT, forecast TEXT)");
	var dbRows = db.execute("SELECT icon, conditions, city, country, time, high, low, month, day, year, aveWind, maxWind, tempNow, forecast FROM weatherTBL");

	var dbObj = {
		icon : dbRows.fieldByName("icon"),
		conditions : dbRows.fieldByName("conditions"),
		city : dbRows.fieldByName("city"),
		country : dbRows.fieldByName("country"),
		time : dbRows.fieldByName("time"),
		high : dbRows.fieldByName("high"),
		low : dbRows.fieldByName("low"),
		month : Math.floor(dbRows.fieldByName("month")),
		day : Math.floor(dbRows.fieldByName("day")),
		year : Math.floor(dbRows.fieldByName("year")),
		aveWind : dbRows.fieldByName("aveWind"),
		maxWind : dbRows.fieldByName("maxWind"),
		tempNow : Math.floor(dbRows.fieldByName("tempNow")),
		forecast : JSON.parse(dbRows.fieldByName("forecast"))
	};

	uiModule.buildUI(dbObj);

};

var save = function(wObj) {

	var db = Ti.Database.open("weatherDB");
	db.execute("CREATE TABLE IF NOT EXISTS weatherTBL (id INTEGER PRIMARY KEY, icon TEXT, conditions TEXT, city TEXT, country TEXT, time TEXT, high TEXT, low TEXT, month TEXT, day TEXT, year TEXT, aveWind TEXT, maxWind TEXT, tempNow TEXT, forecast TEXT)");
	db.execute("DELETE FROM weatherTBL");
	db.execute("INSERT INTO weatherTBL (icon, conditions, city, country, time, high, low, month, day, year, aveWind, maxWind, tempNow, forecast) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", wObj.icon, wObj.conditions, wObj.city, wObj.country, wObj.time, wObj.high, wObj.low, wObj.month, wObj.day, wObj.year, wObj.aveWind, wObj.maxWind, wObj.tempNow, JSON.stringify(wObj.forecast));

	read();

};
exports.save = save;
exports.read = read;

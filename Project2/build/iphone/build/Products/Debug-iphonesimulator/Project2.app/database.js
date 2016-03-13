var read = function() {
	var db = Ti.Database.open("weatherDB");
	db.execute("CREATE TABLE IF NOT EXISTS weatherTBL (id INTEGER PRIMARY KEY, icon TEXT, conditions TEXT, city TEXT, country TEXT, time TEXT, high TEXT, low TEXT, month TEXT, day TEXT, year TEXT, aveWind TEXT, maxWind TEXT, tempNow TEXT, forecast TEXT)");
	var dbRows = db.execute("SELECT icon, conditions, city, country, time, high, low, month, day, year, aveWind, maxWind, tempNow, forecast FROM weatherTBL");
	
	//console.log("...");
	//console.log(dbRows.fieldByName("forecast"));
	//console.log(JSON.parse(dbRows.fieldByName("forecast").));
	
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
			year :Math.floor(dbRows.fieldByName("year")),
			aveWind : dbRows.fieldByName("aveWind"),
			maxWind : dbRows.fieldByName("maxWind"),
			tempNow : Math.floor(dbRows.fieldByName("tempNow")),
			forecast : JSON.parse(dbRows.fieldByName("forecast"))
		};
		
		//console.log("lsArray:", lsArray);
		//console.log("..." + dbObj);
		//console.log(dbObj);
		
		uiModule.buildUI(dbObj);
	
};

var save = function(wObj) {
	//console.log("apiInfo: ", apiInfo);
	//console.log("apiInfo: " + JSON.stringify(apiInfo));
	//console.log(wObj);
	
	//console.log(JSON.stringify(wObj.forecast));
	
	var db = Ti.Database.open("weatherDB");
	db.execute("CREATE TABLE IF NOT EXISTS weatherTBL (id INTEGER PRIMARY KEY, icon TEXT, conditions TEXT, city TEXT, country TEXT, time TEXT, high TEXT, low TEXT, month TEXT, day TEXT, year TEXT, aveWind TEXT, maxWind TEXT, tempNow TEXT, forecast TEXT)");
	db.execute("DELETE FROM weatherTBL");
	db.execute("INSERT INTO weatherTBL (icon, conditions, city, country, time, high, low, month, day, year, aveWind, maxWind, tempNow, forecast) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", wObj.icon, wObj.conditions, wObj.city, wObj.country, wObj.time, wObj.high, wObj.low, wObj.month, wObj.day, wObj.year, wObj.aveWind, wObj.maxWind, wObj.tempNow, JSON.stringify(wObj.forecast));
	// for ( i = 0, j = wObj.length; i < j; i++) {
// 
		// db.execute("INSERT INTO weatherTBL (icon, conditions, city, country, time, high, low, month, day, year, aveWind, maxWind, tempNow) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", apiInfo[i].icon, apiInfo[i].conditions, apiInfo[i].city, apiInfo[i].country, apiInfo[i].time, apiInfo[i].high, apiInfo[i].low, apiInfo[i].month, apiInfo[i].day, apiInfo[i].year, apiInfo[i].aveWind, apiInfo[i].maxWind, apiInfo[i].tempNow);
	// }
	// db.close();
	
	read();
	
};
exports.save = save;
exports.read = read; 
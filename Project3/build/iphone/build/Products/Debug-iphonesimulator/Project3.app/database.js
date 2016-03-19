var read = function() {
	var db = Ti.Database.open("riotDB");
	db.execute("CREATE TABLE IF NOT EXISTS riotTBL (id INTEGER PRIMARY KEY, challenger TEXT)");
	var dbRows = db.execute("SELECT challenger FROM riotTBL");

	//db.execute("CREATE TABLE IF NOT EXISTS riotTBL (id INTEGER PRIMARY KEY, summoner TEXT, queue TEXT, name TEXT, tier TEXT, division TEXT, leaguePoints TEXT, wins TEXT, losses TEXT, streak TEXT, veteran TEXT, new TEXT, inactive TEXT)");
	//var dbRows = db.execute("SELECT summoner, queue, name, tier, division, leaguePoints, wins, losses, streak, veteran, new, inactive FROM riotTBL");

	var riotObj = {
		// summoner : dbRows.fieldByName("summoner"),
		// queue : dbRows.fieldByName("queue"),
		// name : dbRows.fieldByName("name"),
		// tier : dbRows.fieldByName("tier"),
		// division : dbRows.fieldByName("division"),
		// leaguePoints : dbRows.fieldByName("leaguePoints"),
		// wins : dbRows.fieldByName("wins"),
		// losses : dbRows.fieldByName("losses"),
		// streak : dbRows.fieldByName("streak"),
		// veteran : dbRows.fieldByName("veteran"),
		// new : dbRows.fieldByName("new"),
		// inactive : dbRows.fieldByName("inactive"),
		challenger : JSON.parse(dbRows.fieldByName("challenger"))
	};

	uiModule.buildUI(riotObj);

};

var save = function(apiInfo) {

	var db = Ti.Database.open("riotDB");
	db.execute("CREATE TABLE IF NOT EXISTS riotTBL (id INTEGER PRIMARY KEY, challenger TEXT)");
	//db.execute("CREATE TABLE IF NOT EXISTS riotTBL (id INTEGER PRIMARY KEY, summoner TEXT, queue TEXT, name TEXT, tier TEXT, division TEXT, leaguePoints TEXT, wins TEXT, losses TEXT, streak TEXT, veteran TEXT, new TEXT, inactive TEXT)");
	db.execute("DELETE FROM riotTBL");
	db.execute("INSERT INTO riotTBL (challenger) VALUES (?)", JSON.stringify(apiInfo.challenger));
	//db.execute("INSERT INTO riotTBL (summoner, queue, name, tier, division, leaguePoints, wins, losses, streak, veteran, new, inactive) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", apiInfo.summoner, apiInfo.queue, apiInfo.name, apiInfo.tier, apiInfo.division, apiInfo.leaguePoints, apiInfo.wins, apiInfo.losses, apiInfo.streak, apiInfo.veteran, apiInfo.new, apiInfo.inactive);

	read();

};
exports.save = save;
exports.read = read;
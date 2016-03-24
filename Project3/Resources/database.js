var read = function() {
	var db = Ti.Database.open("riotDB");
	//db.execute("CREATE TABLE IF NOT EXISTS riotTBL (id INTEGER PRIMARY KEY, recent TEXT)");
	//var dbRows = db.execute("SELECT recent FROM riotTBL");

	db.execute("CREATE TABLE IF NOT EXISTS riotTBL (id INTEGER PRIMARY KEY, summoner TEXT, queue TEXT, name TEXT, tier TEXT, division TEXT, leaguePoints TEXT, wins TEXT, losses TEXT, streak TEXT, veteran TEXT, new TEXT, inactive TEXT, recent TEXT)");
	var dbRows = db.execute("SELECT summoner, queue, name, tier, division, leaguePoints, wins, losses, streak, veteran, new, inactive, recent FROM riotTBL");
	while (dbRows.isValidRow()) {
		var riotObj = {
			summoner : dbRows.fieldByName("summoner"),
			queue : dbRows.fieldByName("queue"),
			name : dbRows.fieldByName("name"),
			tier : dbRows.fieldByName("tier"),
			division : dbRows.fieldByName("division"),
			leaguePoints : Math.floor(dbRows.fieldByName("leaguePoints")),
			wins : Math.floor(dbRows.fieldByName("wins")),
			losses : Math.floor(dbRows.fieldByName("losses")),
			streak : dbRows.fieldByName("streak"),
			veteran : dbRows.fieldByName("veteran"),
			new : dbRows.fieldByName("new"),
			inactive : dbRows.fieldByName("inactive"),
			recent : JSON.parse(dbRows.fieldByName("recent"))
		};
		dbRows.next();
	}
	//console.log("riotObj - read", riotObj);

	uiModule.buildUI(riotObj);

};

var save = function(apiInfo) {

	var db = Ti.Database.open("riotDB");
	//db.execute("CREATE TABLE IF NOT EXISTS riotTBL (id INTEGER PRIMARY KEY, recent TEXT)");
	db.execute("CREATE TABLE IF NOT EXISTS riotTBL (id INTEGER PRIMARY KEY, summoner TEXT, queue TEXT, name TEXT, tier TEXT, division TEXT, leaguePoints TEXT, wins TEXT, losses TEXT, streak TEXT, veteran TEXT, new TEXT, inactive TEXT, recent TEXT)");
	db.execute("DELETE FROM riotTBL");
	//db.execute("INSERT INTO riotTBL (recent) VALUES (?)", JSON.stringify(apiInfo.recent));
	db.execute("INSERT INTO riotTBL (summoner, queue, name, tier, division, leaguePoints, wins, losses, streak, veteran, new, inactive, recent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", apiInfo.summoner, apiInfo.queue, apiInfo.name, apiInfo.tier, apiInfo.division, apiInfo.leaguePoints, apiInfo.wins, apiInfo.losses, apiInfo.streak, apiInfo.veteran, apiInfo.new, apiInfo.inactive, JSON.stringify(apiInfo.recent));

	read();

};
exports.save = save;
exports.read = read;

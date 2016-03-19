var getData = function() {

	var url = "https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=0ae1d37e-0440-419e-a952-c827eec43d86";

	var onLoad = function() {

		var riotInfo = JSON.parse(this.responseText);
		
		//console.log(riotInfo.entries[0].playerOrTeamName);
		
		var riotArray = [];


		var riotObj = {
			// summoner : riotInfo.entries.playerOrTeamName,
			// queue : riotInfo.queue,
			// name : riotInfo.name,
			// tier : riotInfo.tier,
			// division : riotInfo.entries.division,
			// leaguePoints : riotInfo.entries.leaguePoints,
			// wins : riotInfo.entries.wins,
			// losses : riotInfo.entries.losses,
			// streak : riotInfo.entries.isHotStreak,
			// veteran : riotInfo.entries.isVeteran,
			// new : riotInfo.entries.isFreshBlood,
			// inactive : riotInfo.entries.isInactive
		};
		for (var i = 0,
		    j = riotInfo.entries.length; i < j; i++) {
			riotArray.push({
				name : riotInfo.entries[i].playerOrTeamName,
				division : riotInfo.entries[i].division,
				leaguePoints : riotInfo.entries[i].leaguePoints,
				wins : riotInfo.entries[i].wins,
				losses : riotInfo.entries[i].losses,
				hotStreak : riotInfo.entries[i].isHotStreak,
				veteran : riotInfo.entries[i].isVeteran,
				freshBlood : riotInfo.entries[i].isFreshBlood,
				inactive : riotInfo.entries[i].isInactive
			});
		}
	//console.log(riotArray[2]);
		var dbModule = require("database");
		riotObj.challenger = riotArray;
		dbModule.save(riotObj);
		adbModule.saveCloud(riotObj);

	};

	var onError = function(x) {
		console.log("error getting data", x.error);
	};

	var xhr = Ti.Network.createHTTPClient({
		onload : onLoad,
		onerror : onError,
		timeout : 3000
	});

	xhr.open("GET", url);
	xhr.send();
};
exports.getData = getData;

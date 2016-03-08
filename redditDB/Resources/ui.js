var win = Ti.UI.createWindow({
	backgroundColor : "ccc",
	layout: "vertical"
});

var format = {
	color: "#000",
	top: 20
};

win.open();

var buildUI = function(dbInfo){
	
	for (var i=0, j=dbInfo.length; i<j; i++){
		win.add(Ti.UI.createLabel({
			text : "Title: " + dbInfo[i].title,
			color: "#00f",
			top: 50
	}));
	
	var author = Ti.UI.createLabel(format);
	author.text = "Author: " + dbInfo[i].author;
	win.add(author);
	
	var thumb = Ti.UI.createImageView();
	thumb.image = dbInfo[i].img;
	win.add(thumb);
	}
};

exports.buildUI = buildUI;
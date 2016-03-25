// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// var win1 = Titanium.UI.createWindow({  
    // title:'Tab 1',
    // backgroundColor:'#fff'
// });

var infoWin = Ti.UI.createWindow({
	backgroundColor: "#050",
	layout : "horizontal",
	top: 20
	// backgroundImage : "background.png",
	// backgroundRepeat : "repeat-y"
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var infoButton = Titanium.UI.createButton({
	title : 'Stats',
	//top: 50,
	width : 384,
	height : 50,
	//left: 150,
	borderColor : "red"
});

infoButton.addEventListener("singletap", function(e) {
	console.log("infobutton works");
	// matchWin.close();
	// infoWin.open();
});

var matchButton = Titanium.UI.createButton({
	title : 'Recent Matches',
	//top: 50,
	width : 384,
	height : 50,
	// right: 150,
	borderColor : "red"
});

matchButton.addEventListener("singletap", function(e) {
	console.log("matchbutton works");
	// infoWin.close();
	// matchWin.open();
});

//infoWin.add(label1);
infoWin.add(infoButton);
infoWin.add(matchButton);

infoWin.open(label1);
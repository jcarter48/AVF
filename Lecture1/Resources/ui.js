var win = Ti.UI.createWindow({
	backgroundColor : "ccc",
	layout : "vertical"
});
var species = Ti.UI.createLabel({
	color : "000",
	text : "Species: ",
	top : 20
});
var breed = Ti.UI.createLabel({
	color : "000",
	text : "Breed: ",
	top : 20
});
var name = Ti.UI.createLabel({
	color : "000",
	text : "Name: ",
	top : 20
});
var age = Ti.UI.createLabel({
	color : "000",
	text : "Age: ",
	top : 20
});

var uiFunction = function(obj) {
	//alert("ui module");

	species.text = "Species " + obj.species;
	breed.text = "Breed: " + obj.breed;
	name.text = "Name: " + obj.name;
	age.text = "Age: " + obj.age;

	win.add(species);
	win.add(breed);
	win.add(name);
	win.add(age);

	win.open();
};

exports.uiFunction = uiFunction;

angular.module("myNewApp").service("dataService", function(){
	var sodas = ["Coke", "Pepsi", "Mountain Dew", "Dr. Pepper"];

	this.getDrinks = function(){
		return sodas;
	}

	this.addDrink = function(newDrink){
		sodas.push(newDrink);
	}
});
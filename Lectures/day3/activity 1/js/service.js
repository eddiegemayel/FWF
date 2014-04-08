angular.module("myNewApp").service("dataService", function(){
	var sodas = ["Coke", "Pepsi", "Mountain Dew", "Dr. Pepper"];

	this.getDrinks = function(){
		var sodaString = localStorage.getItem("sodaLS");
		sodas = JSON.parse(sodaString) || sodas;

		return sodas;
	}

	this.addDrink = function(newDrink){

		sodas.push(newDrink);

		var sodaString = JSON.stringify(sodas);
		localStorage.setItem("sodaLS", sodaString);
	}
});
angular.module("myNewApp").service("dataService", function(){
	var sodas = ["Coke", "Pepsi", "Mountain Dew", "Dr. Pepper"];

	this.getDrinks = function(){
		//parse it into local storage
		var sodaString = localStorage.getItem("sodaLS");
		sodas = JSON.parse(sodaString) || sodas;

		return sodas;
	}

	this.addDrink = function(newDrink){
		sodas.push(newDrink);
		//sodas.push({type:newDrink});
		//if it was an object this is how you would push it

		var sodaString = JSON.stringify(sodas);
		localStorage.setItem("sodaLS", sodaString);
		//or
		//localStorage.setItem("sodaLS", JSON.stringify(sodas));
	}
});
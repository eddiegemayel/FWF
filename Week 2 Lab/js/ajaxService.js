angular.module("CarApp").service("carService", function($http){

	var cars = [];

	this.getCars = function(){
		if(cars.length !== undefined){
			$http.get("js/json/data.json")
				.success(function(data, status, headers, config){
					 console.log(data);
					 for(var i =0; i < data.vehicles.length; i++){
					 	cars.push(data.vehicles[i]);
					 }

				})
				.error(function(data, status, headers, config){
					console.log("It broke");
				})
		}	

		return cars;
	}

	this.getItemAt = function(idx){
		if(cars[idx]){
			return cars[idx];
		}
		else{
			return {};
		}
	};

});
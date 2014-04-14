angular.module("CarApp").service("carService", function($http){

	var cars = [];

	this.getCars = function(){
		if(cars.length === 0){
			$http.get("js/json/data.json")
				.success(function(data, status, headers, config){
					 console.log(data);
					 for(var i =0; i < data.vehicle.length; i++){
					 	cars.push(data.vehicle[i]);
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
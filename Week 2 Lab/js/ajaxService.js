angular.module("CarApp").service("carService", function($http){

	//empt array to store json data in
	var cars = [];

	this.getCars = function(){

		//not sure if this is supposed to be here
		var carList =  localStorage.getItem("carList");
        cars = JSON.parse(carList) || cars;


		if(cars.length === 0){
			//fetch the json data
			$http.get("js/json/data.json")
			//if the file is there, do this
				.success(function(data, status, headers, config){
					//console log the data to test, push the data into the empty cars array
					 console.log(data);
					 for(var i =0; i < data.vehicles.length; i++){
					 	cars.push(data.vehicles[i]);
					 }


				})
				//if the file isnt there do this
				.error(function(data, status, headers, config){
					console.log("It broke");
				})
		}	

		return cars;
	}

	this.getCarAt = function(idx){
		if(cars[idx]){
			return cars[idx];
		}
		else{
			return {};
		}
	};

	this.deleteCar = function(deadindex){
		cars.splice(deadindex,1);
		localStorage.setItem("carList", JSON.stringify(cars));
	};

	this.addCar = function(car){
		cars.push(car);
        localStorage.setItem("carList", JSON.stringify(cars));
        
    	document.location.hash = "#/list";
	};

});
angular.module("CarApp").service("carService", function(){

	var cars = [
		{
			make : "BMW",
			model : "Z3",
			color : "Silver"
		},
		{
			make : "Porsche",
			model : "911",
			color : "White"
		},
		{
			make : "Mercedes",
			model : "SLS",
			color : "Black"
		},
	];

	 this.getCars = function(){
        var carList =  localStorage.getItem("carList");
        cars = JSON.parse(carList) || cars;

        return cars;
     } 
});
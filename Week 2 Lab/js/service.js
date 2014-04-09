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

     this.deleteCar=function(otherIndex){
        cars.splice(otherIndex,1);
        localStorage.setItem("carList", JSON.stringify(cars));
        
    };

    this.addCar=function(car){
        cars.push(car);
                localStorage.setItem("carList", JSON.stringify(cars));
        
    document.location.hash = "#/list";
    };
});
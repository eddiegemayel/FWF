var theApp = angular.module("myNewApp",[]);

theApp.controller("myFirstController", function($scope, dataService){
	$scope.content = "Hello World!";

	$scope.sodas = dataService.getDrinks();

	$scope.pourSoda = function(){
		dataService.addDrink($scope.sodaInput);
		//soda input = newDrink in the service.js file
	}
});
var thing = angular.module("tacoApp",["ngRoute"]);

thing.config(function($routeProvider){
	$routeProvider
	.when("/list",
		{templateUrl:"parts/list.html", 
		controller: "ListController"})

		.when("/input",
			{templateUrl:"parts/input.html", 
			controller: "InputController"})

			.otherwise({
				redirectedTo:"/list"
			});

	});

thing.controller("ListController", function($scope, tacoService){
	$scope.tacos = tacoService.getTacos();

	$scope.killTaco = function(indexTaco){
		tacoService.delTaco(indexTaco);
	}
});

thing.controller("InputController", function($scope, tacoService){
	$scope.tacos = tacoService.getTacos();

	 $scope.addTaco = function(){
        tacoService.addTacos($scope.tacoType);
        document.location.hash = "#/list";
    }
});


//Before routing was implemented 
// thing.controller("tacoControl", function($scope, tacoService){
// //    $scope.tacos = [{type:"Fish"},{type:"Beef"},{type:"Chicken"}];
//     $scope.tacos =  tacoService.getTacos();
    
//     $scope.addTaco = function(){
//         tacoService.addTacos($scope.tacoType);
//     }
    
//     $scope.killTaco = function(indexTaco){
//         tacoService.delTaco(indexTaco);
//     }
    
//     }
// );
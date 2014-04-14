var app = angular.module("CarApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/list",
          {templateUrl: "parts/list.html" ,
            controller: "theList"
          }
         )
    .when("/detail/:carIndex",
          {templateUrl: "parts/detail.html" ,
            controller: "theDetail"
          }
         )
    .when("/addItem",
          {templateUrl: "parts/addItem.html" ,
            controller: "theAdd"
          }
         )
    .otherwise({redirectTo: "/list"})
});


app.controller("theList", function($scope, carService){
    $scope.cars = carService.getCars();
   $scope.delete=function(index){
        carService.deleteCar(index);
    };
});

app.controller("theDetail", function($scope, carService, $routeParams){
    $scope.carDetail = carService.getCarAt($routeParams.carIndex);
});

app.controller("theAdd", function($scope,carService){
    // $scope.testSubject ="vic";
    $scope.addCar=function(){
    	carService.addCar({make:$scope.make, model:$scope.model,color:$scope.color})
    };
});
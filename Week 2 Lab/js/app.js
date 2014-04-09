var app = angular.module("CarApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/listView",
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
    .otherwise({redirectTo: "/listView"})
});


app.controller("theList", function($scope, carService){
    $scope.cars = carService.getcars();
    $scope.pewpew=function(index){
        carService.killcar(index);
    };
});

app.controller("theDetail", function($scope,carService, $routeParams){
    $scope.car = carService.getcarAt($routeParams.carIndex);
});

app.controller("theAdd", function($scope,carService){
    // $scope.testSubject ="vic";
    $scope.addNoob=function(){
    	carService.addStud({name:$scope.repName,age:$scope.repAge,GPA:$scope.repGPA})
    };
});
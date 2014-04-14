var app = angular.module("NewApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/list",{
        templateUrl:"views/list.html",
        controller: "ListController"
    })
    .when("/details/:idx",{
        templateUrl:"views/details.html",
        controller: "DetailsController"
    })
    .otherwise({redirectTo: "/list"});
});
app.controller("ListController", function($scope, MLPService){
    $scope.peopleList = MLPService.getData();
});
app.controller("DetailsController", function($scope, MLPService, $routeParams){
    $scope.pplDetail=MLPService.getItemAt($routeParams.idx);
});
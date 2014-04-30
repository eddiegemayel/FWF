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
app.controller("ListController", function($scope, Service){
    $scope.peopleList = Service.getData();
});
app.controller("DetailsController", function($scope, Service, $routeParams){
    $scope.pplDetail=Service.getItemAt($routeParams.idx);
});
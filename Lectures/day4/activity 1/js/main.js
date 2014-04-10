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
app.controller("ListController", function($scope, service){
    $scope.peopleList = service.getPeople();
});
app.controller("DetailsController", function($scope, service, $routeParams){
    $scope.pplDetail=service.getPerAt($routeParams.idx);
});

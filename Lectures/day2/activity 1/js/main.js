var theApp = angular.module("myNewApp",[]);

theApp.controller("myFirstController", function($scope){
	$scope.content = "Hello World";
});
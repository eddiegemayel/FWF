function myListController($scope){
	//$scope.test = "yada yada";


	$scope.newTask = "";

	$scope.content = "";


	$scope.tasks = [
		{label:"Do Your Homework" , isCompleted: false},
		{label:"Wash the car" , isCompleted: false},
		{label:"Clean the House", isCompleted: true}
	];

	$scope.pushToArray = function(labelPeram){
		if(labelPeram.length != 0){
			$scope.tasks.push({label:labelPeram, isCompleted: false});
			$scope.content = "";
			$scope.newTask = "";
		}
		else{
			$scope.content = "please type inside the field";
		}
	};

}
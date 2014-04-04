var theApp = angular.module("myApp",[]);

theApp.controller("controller", function($scope, dataService){

	$scope.items = dataService.getCartItems();

	$scope.addAnItem = function(){
		dataService.addItem($scope.hork);
		$scope.hork="";
		$scope.content = "";
	}

	$scope.removeItem = function($index){
		dataService.removeAnItem($index);
	}

	$scope.removePurchased = function(){
		dataService.removeChecked();
	}
});

//Working code before service file was added------------------------------------------------
// function controller($scope){
// 	$scope.items =[
// 		{label:"Eggs" , purchased: false},
// 		{label:"Bread" , purchased: false},
// 		{label:"Milk" , purchased: true}
// 	];
// 	//array of items in the shopping cart

	

// 	//when clicked add an item
// 	$scope.addItem = function(labelPeram){
// 		//as long as the input field isnt empty, add something
// 		if(labelPeram.length > 0){
// 			//push to array
// 			$scope.items.push({label:labelPeram, purchased: false});
// 			//reset and empty other input fields and error message 
// 			$scope.hork="";
// 			$scope.content = "";
// 		}
// 		//if else display error
// 		else{
// 			$scope.content = "Empty Input Field!";
// 		}
		
// 	}

// 	$scope.removeItem = function(deadIdx){
// 		$scope.items.splice(deadIdx,1);
// 		//remove starting at deadIdx, and remove one item
// 	}

// 	$scope.removePurchased = function(){
// 		for(var i = $scope.items.length-1; i>=0; i--){
// 				if($scope.items[i].purchased == true){
// 					$scope.items.splice(i,1);
// 				}
// 		}
// 		// console.log($scope.items[2].hasOwnProperty("purchased"));
// 	}
// }
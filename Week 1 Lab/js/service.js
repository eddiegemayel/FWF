angular.module("myApp").service("dataService", function(){
	var items =[
		{label:"Eggs" , purchased: false},
		{label:"Bread" , purchased: false},
		{label:"Milk" , purchased: true}
	];
	//array of items in the shopping cart

	this.getCartItems = function(){
		var itemString = localStorage.getItem("itemLS");
		items = JSON.parse(itemString) || items;

		return items;
	}

	this.addItem = function(newItem){

		//as long as the input field isnt empty, add something
		if(newItem.length > 0){
			//push to array
			items.push({label:newItem, purchased: false});

			var itemString = JSON.stringify(items);
			//stringify the now new array

			localStorage.setItem("itemLS", itemString);
			//store it in local storage
		}
		//if else display error
		else{
			$scope.content = "Empty Input Field!";
		}

		
	}

	this.removeAnItem = function(index){
		items.splice(index,1);

		var itemString = JSON.stringify(items);

		localStorage.setItem("itemLS", itemString);
	}

	this.removeChecked = function(deadIdx){
		items.splice(deadIdx,1);
	}
});
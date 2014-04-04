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

		items.push(newItem);
		//add new item

		var itemString = JSON.stringify(items);
		//stringify the now new array
		localStorage.setItem("itemLS", itemString);
		//store it in local storage
	}

	this.removeChecked = function(deadIdx){
		items.splice(deadIdx,1);
	}
});
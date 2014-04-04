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
		if (undefined !== newItem && newItem.length) {
    		items.push({label:newItem, purchased: false});
			//add new item

			var itemString = JSON.stringify(items);
			//stringify the now new array
			localStorage.setItem("itemLS", itemString);
			//store it in local storage

		} else {
    		//content = "Empty input field!";
    		//console.log("Empty input field");
		}
	}

	this.removeAnItem = function(index){
		items.splice(index,1);

		var itemString = JSON.stringify(items);

		localStorage.setItem("itemLS", itemString);
	}


	this.removeChecked = function(){
		for(var i = items.length-1; i>=0; i--){
				if(items[i].purchased == true){
					items.splice(i,1);
					var itemString = JSON.stringify(items);

					localStorage.setItem("itemLS", itemString);
				}
		}
	}
	
});
angular.module("NewApp").service("MLPService", function($http){
	//doesnt have to be my little pony
	var theData = [];

	this.getData = function(){

		if(theData.length === 0){
			$http.jsonp("http://wddbs.com/ffw/jsapi/mlp.php?callback=JSON_CALLBACK")
				.success(function(data, status, headers, config){
					 // console.log(data);
					 for(var i =0; i < data.ponies.length; i++){
					 	theData.push(data.ponies[i]);
					 }

				})
				.error(function(data, status, headers, config){
					console.log("It broke");
				})
		}
		return theData;

	};

	this.getItemAt = function(idx){
		if(theData[idx]){
			return theData[idx];
		}
		else{
			return {};
		}
	};
});
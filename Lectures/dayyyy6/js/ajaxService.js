angular.module("NewApp").service("Service", function($http){
	
	var theData = [];

	this.getData = function(){

		if(theData.length === 0){
			$http.jsonp("http://wddbs.com/ffw/jsapi/students.php?callback=JSON_CALLBACK")
				.success(function(data, status, headers, config){
					  console.log(data);
					 for(var i =0; i < data.length; i++){
					 	theData.push(data[i]);
					 	console.log(data);
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
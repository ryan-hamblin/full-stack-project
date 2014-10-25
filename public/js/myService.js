var app = angular.module('fullStack');

app.service('myService', function($http, $q){

	this.getFriends = function() {
		var deferred = $q.defer
		return $http({
			method: "GET", 
			url: "/friends"
		}).then(function (response){
			console.log(response.data);
			deferred.resolve(response.data.friends);

		});
		return deferred.promise;
	}

});

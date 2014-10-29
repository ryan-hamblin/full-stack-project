var app = angular.module('fullStack')

app.service('myService', function($http, $q) {
	var what = [];

	this.getFriends = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: '/friends'
		}).then(function(response) {
			console.log(response.data)
			deferred.resolve(response.data);
		});
		return deferred.promise;
	}
	this.getFamily = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET', 
			url: '/family'
		}).then(function(response) {
			console.log(response.data)
			deferred.resolve(response.data);
		});
		return deferred.promise;
	}
	this.getActivities = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: '/activities'
		}).then(function(response){
			console.log(response.data)
			deferred.resolve(response.data);
		})
	}
});
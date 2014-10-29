var app = angular.module('fullStack');

app.controller('myCtrl', function($scope, myService){
	$scope.test = "Hellow Newman";
	
	$scope.showFriends = false;
	$scope.showFamily = false;
	$scope.showActivities = false;
	$scope.friends = '';

	$scope.getFriends = function() {
		myService.getFriends().then(function(friends) {
			console.log(friends);
			$scope.friends = friends;
		})
	};	
	$scope.getFamily = function() {
		myService.getFamily().then(function(family) {
			console.log(family);
			$scope.family = family;
		})
	};
	$scope.getActivities = function() {
		myService.getActivities().then(function(activity) {
			console.log(activity);
			$scope.activity = activity;
		})
	};

	// var toggleFriends = function(){
	// 	$scope.showFriends = !$scope.showFriends;
	// 	$scope.showFamily = false;
	// 	$scope.showActivities = false;
	// }
	// var toggleFamily = function(){
	// 	$scope.showFamily = !$scope.showFamily;
	// 	$scope.showFriends = false;
	// 	$scope.showActivities = false;
	// }
	// var toggleActivities = function(){
	// 	$scope.showActivities = !$scope.showActivities;
	// 	$scope.showFamily = false;
	// 	$scope.showFriends = false;
	// }
});
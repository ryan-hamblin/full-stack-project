var app = angular.module('fullStack');
app.controller('myCtrl', function($scope, myService){
	$scope.test = "Hellow Newman";
	
	$scope.showFriends = false;
	$scope.showFamily = false;
	$scope.showActivities = false;
	$scope.friends = '';

	$scope.getfriends = function(){
		console.log("riends")
		myService.getFriends().then(function(friends){
			$scope.friends = friends;
		})
	}
	

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
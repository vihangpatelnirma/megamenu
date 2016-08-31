
angular.module('megamenu')
	.controller('megamenu.ctrl',['$scope', 'Network' ,  function($scope , Network){
	
		Network.fetch().success(function(response){
			$scope.data = response;
		});
	}]);

angular.module('megamenu.service')
	.service('Network', ['$http', function ($http) {
		return {
			fetch : fetch
		}

		function fetch(){
			return $http.get('data/data.json');
		}
	}]);
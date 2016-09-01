
angular.module('megamenu.service')
	.service('Network', ['$http', function ($http) {
		return {
			fetch : fetch,
			checkLink : checkLink
		}

		function fetch(){
			return $http.get('data/data.json');
		}

		function checkLink(data){
			return $http.get(data.url);
		}
	}]);
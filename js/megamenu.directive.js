
angular.module('megamenu.directive')
	.directive('strip' , [function(){
		return { 
			restrict: 'E',
			templateUrl: 'partial/strip.html'
		}
	}])
	.directive('submenu' , [function(){
		return { 
			restrict: 'E',
			templateUrl: 'partial/submenu.html'
		}
	}])
	.directive('menu' , [function(){
		return { 
			restrict: 'A',
			templateUrl: 'partial/menu.html'
		}
	}]);
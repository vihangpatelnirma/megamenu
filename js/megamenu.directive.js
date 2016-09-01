
angular.module('megamenu.directive')
	.directive('strip' , [function(){
		return { 
			restrict: 'E',
			templateUrl: 'partial/strip.html'
		}
	}])
	.directive('submenu' , [function(){
		return { 
			restrict: 'A',
			templateUrl: 'partial/submenu.html'
		}
	}])
	.directive('submenuItemlist' , [function(){
		return { 
			restrict: 'A',
			templateUrl: 'partial/submenu-itemlist.html'
		}
	}])
	.directive('linkChecker' , [function(){
		return { 
			restrict: 'E',
			templateUrl: 'partial/link-checker.html'
		}
	}])
	.directive('menu' , [function(){
		return { 
			restrict: 'A',
			templateUrl: 'partial/menu.html'
		}
	}]);
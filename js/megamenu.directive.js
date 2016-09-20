
angular.module('megamenu.directive')
	.directive('strip' , [function(){
		return { 
			restrict: 'E',
			template: window.JST['partial/strip.html']
		}
	}])
	.directive('submenu' , [function(){
		return { 
			restrict: 'A',
			template: window.JST['partial/submenu.html']
		}
	}])
	.directive('submenuItemlist' , [function(){
		return { 
			restrict: 'A',
			template: window.JST['partial/submenu-itemlist.html']
		}
	}])
	.directive('linkChecker' , [function(){
		return { 
			restrict: 'E',
			template: window.JST['partial/link-checker.html']
		}
	}])
	.directive('menu' , [function(){
		return { 
			restrict: 'A',
			template: window.JST['partial/menu.html']
		}
	}]);
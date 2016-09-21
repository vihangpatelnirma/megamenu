
angular.module('megamenu.directive')
	.directive('strip' , [function(){
		return { 
			restrict: 'E',
			template: window.AJST['partial/strip.html']
		}
	}])
	.directive('submenu' , [function(){
		return { 
			restrict: 'A',
			template: window.AJST['partial/submenu.html']
		}
	}])
	.directive('submenuItemlist' , [function(){
		return { 
			restrict: 'A',
			template: window.AJST['partial/submenu-itemlist.html']
		}
	}])
	.directive('linkChecker' , [function(){
		return { 
			restrict: 'E',
			template: window.AJST['partial/link-checker.html']
		}
	}])
	.directive('menu' , [function(){
		return { 
			restrict: 'A',
			template: window.AJST['partial/menu.html']
		}
	}]);
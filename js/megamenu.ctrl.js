
angular.module('megamenu')
	.controller('megamenu.ctrl',['$scope', 'Network' ,  function($scope , Network){
		
		$scope.addMainMenu = function(){
			$scope.data.push({
				name : '*new',
				href : 'http://www.craftsvilla.com',
				data : [
					{
						name : 'New Type',
						href : 'www.craftsvilla.com',
						data : [
							{
								name : 'New sub type',
								href : 'www.craftsvilla.com',
							}
						]
					}
				]
			});
		}

		$scope.addSubMenu = function(menu){
			menu.push({
				name : 'New Type',
				href : 'www.craftsvilla.com',
				data : [
					{
						name : 'New sub type',
						href : 'www.craftsvilla.com',
					}
				]
			});
			return menu;
		}

		$scope.menuSelected = function(index){
			$scope.currentMenu && ($scope.currentMenu.show = false);
			$scope.currentMenu = $scope.data[index];
			$scope.data[index].show = !$scope.data[index].show;
	
		}

		Network.fetch().success(function(response){
			$scope.data = response;
		});
	}]);
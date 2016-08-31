
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

		$scope.deleteMenu = function(index){
			if(!confirm("Do you want to delete main menu")){
				return;
			}
			$scope.data.splice(index,1);
		}

		$scope.deleteSubMenu = function(index){
			if(!confirm("Do you want to delete sub menu")){
				return;
			}
			$scope.currentMenu.data.splice(index,1);
		}

		$scope.deleteSubSubMenu = function(parentIndex , index){
			if(!confirm("Do you want to delete sub sub menu")){
				return;
			}
			$scope.currentMenu.data[parentIndex].data.splice(index,1);	
		}

		$scope.menuSelected = function(index){
			$scope.currentMenu && ($scope.currentMenu.show = false);
			$scope.currentMenu = $scope.data[index];
			$scope.data[index].show = !$scope.data[index].show;
	
		}

		$scope.downloadJSON = function(){
			console.log($scope.data);
		}

		Network.fetch().success(function(response){
			$scope.data = response;
		});
	}]);
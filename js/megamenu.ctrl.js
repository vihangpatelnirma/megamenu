
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

		$scope.addSubSubMenu = function(menu){
			menu.push({
				name : 'New sub type',
				href : 'www.craftsvilla.com',
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
			setTimeout(function() {
				var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify($scope.data));
				var dlAnchorElem = document.getElementById('download-button');
				dlAnchorElem.setAttribute("href",     dataStr     );
				dlAnchorElem.setAttribute("download", "megamenu.json");
				dlAnchorElem.click();
			},100);
		}

		$scope.checkBrokenLinks = function(){
			$scope.requestCount = 0;
			$scope.responseCount = 0;
			var data = $scope.data,
				i , j , k;
			for(i = 0 ; i < data.length ; i++){
				$scope.checkLink(data[i]);
				for(j = 0 ; j < data[i].data.length ; j++){
					$scope.checkLink(data[i].data[j]);
					for(k = 0 ; k < data[i].data[j].data.length ; k++){
						$scope.checkLink(data[i].data[j].data[k]);
					}
				}
			}
		}

		$scope.checkLink = function(data){
			console.log(data);
			data.href && (Network.checkLink({ url : data.href}).then($scope.onResponse,$scope.onError),
				$scope.requestCount++);
		}

		$scope.onResponse = function(response){
			console.info(response);
			$scope.responseCount++;
		}

		$scope.onError = function(response){
			console.warn(response);
			$scope.responseCount++;
		}

		Network.fetch().success(function(response){
			$scope.data = response;
		});
	}]);
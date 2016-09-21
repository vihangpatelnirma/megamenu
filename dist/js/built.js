
angular.module('megamenu.controller' , []);
angular.module('megamenu.directive' , []);
angular.module('megamenu.service' , []);

angular.module('megamenu',[
		'megamenu.controller',
		'megamenu.directive',
		'megamenu.service'
	]);;
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
			var allowedArray = ['data' , 'href' , 'url' , 'images' , 'name' , 'isNew'],
				fileName =  ["megamenu", (new Date).getTime().toString().slice(0,10) , "json"].join(".");
			setTimeout(function() {
				var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify($scope.data,allowedArray,'\t'));
				var dlAnchorElem = document.getElementById('download-button');
				dlAnchorElem.setAttribute("href",     dataStr     );
				dlAnchorElem.setAttribute("download", fileName);
				dlAnchorElem.click();
			},100);
			$scope.fileName = fileName;
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
	}]);;
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
	}]);;
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
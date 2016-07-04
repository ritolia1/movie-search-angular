/*
	calls the list.html page with movie name and page number in the uri.
	*/
	sampleApp.controller('indexCtrl', function($scope,$http,$timeout,$location) {
		
		$scope.check = function () {
			action();
		}

		function action() {
			var item = $scope.MovieName;
			var patt = new RegExp("^[0-9]{4}$");
			var res = patt.test(item);
			if(item != null && item !='' && res) {
				$location.path('/list/'+ item+'/1');
			}
			else {
				$scope.alertVisibility='true';	
				$scope.errorMessage="Enter the Valid Search Item.";
				$timeout(function() {
					$scope.alertVisibility='false';	
				}, 2000);	 
			}
		}
	}); 

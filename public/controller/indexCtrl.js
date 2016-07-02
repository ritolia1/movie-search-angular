/*
	calls the list.html page with movie name and page number in the uri.
	*/
	
	index.controller('indexCtrl', function($scope,$http,$timeout) {

		$scope.check = function () {
			action();
		}

		function action() {
			var item = $scope.MovieName;
			var patt = new RegExp("^[0-9]{4}$");
    		var res = patt.test(item);
			if(item != null && item !='' && res) {
				window.open('list.html?'+item+'/1','_self');
			}
			else {
				$scope.alertVisibility='false';	
				$scope.errorMessage="Enter the Valid Search Item.";
			}
		}
	}); 

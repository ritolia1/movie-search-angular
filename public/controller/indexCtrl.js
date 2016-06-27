/*
	calls the list.html page with movie name and page number in the uri.
	*/
	var pagecount=0;
	index.controller('indexCtrl', function($scope,$http) {

		$scope.check = function () {
			pagecount=1;
			action();
		}

		function action() {
			var item = $scope.MovieName;
			if(item != null && item !='') {
				window.open('list.html?'+item+'/'+pagecount,'_self');
			}
			else {
				$scope.alertVisibility='false';
			}
		}
	}); 

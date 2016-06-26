/*
	calls the list.html page with movie name and page number in the uri.
*/
var pagecount=0;
index.controller('indexCtrl', function($scope,$http) {
	
	$scope.check = function () {
		pagecount++;
		action();
	}

	function action() {
		var item = $scope.MovieName;
		window.open('list.html?'+item+'/'+pagecount,'_self');
	}
}); 
